/* ============================================================
   青島シンプルアクセサリー製造所｜共通スクリプト
   製品一覧の表示・検索・カテゴリー切替、モバイルメニュー
   ============================================================ */
(function () {
  "use strict";

  /* ---------- モバイルメニュー ---------- */
  var navToggle = document.querySelector(".nav-toggle");
  var globalNav = document.getElementById("global-nav");
  if (navToggle && globalNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = globalNav.classList.toggle("open");
      navToggle.classList.toggle("active", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    globalNav.addEventListener("click", function (e) {
      if (e.target && e.target.tagName === "A") {
        globalNav.classList.remove("open");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- ヒーロー画像スライドショー ---------- */
  (function initSlideshow() {
    var wrap = document.getElementById("hero-slides");
    var dotsBox = document.getElementById("hero-slide-dots");
    var caption = document.getElementById("hero-caption");
    if (!wrap) { return; }
    var slides = wrap.querySelectorAll(".hero-slide");
    if (slides.length === 0) { return; }
    var current = 0;
    var timer = null;
    var captionTimer = null;
    var dots = [];

    /* キャプション（画像の下の文字）を連動して切り替え */
    function setCaption(text) {
      if (!caption) { return; }
      if (captionTimer) { clearTimeout(captionTimer); captionTimer = null; }
      if (caption.textContent === text) { caption.style.opacity = "1"; return; }
      caption.style.opacity = "0";
      captionTimer = setTimeout(function () {
        caption.textContent = text;
        caption.style.opacity = "1";
        captionTimer = null;
      }, 250);
    }

    function show(i, resetTimer) {
      slides[current].classList.remove("active");
      if (dots[current]) { dots[current].classList.remove("active"); }
      current = i;
      slides[current].classList.add("active");
      if (dots[current]) { dots[current].classList.add("active"); }
      setCaption(slides[current].getAttribute("data-caption") || "");
      if (resetTimer) { restart(); }
    }

    function next() {
      show((current + 1) % slides.length, false);
    }

    function restart() {
      if (timer) { clearInterval(timer); }
      if (slides.length > 1) { timer = setInterval(next, 4500); }
    }

    /* ドット（インジケーター）生成 */
    if (dotsBox && slides.length > 1) {
      for (var i = 0; i < slides.length; i++) {
        (function (idx) {
          var dot = document.createElement("button");
          dot.type = "button";
          dot.setAttribute("aria-label", (idx + 1) + "枚目の画像を表示");
          dot.addEventListener("click", function () { show(idx, true); });
          dotsBox.appendChild(dot);
          dots.push(dot);
        })(i);
      }
    }

    show(0, false);
    restart();
  })();

  /* ---------- 製品一覧 ---------- */
  var grid = document.getElementById("product-grid");
  var countEl = document.getElementById("result-count");
  var noResult = document.getElementById("no-result");
  var searchForm = document.getElementById("search-form");
  var searchInput = document.getElementById("search-input");
  var tabsBox = document.getElementById("category-tabs");
  var paginationBox = document.getElementById("pagination");

  if (!grid || typeof PRODUCTS === "undefined") { return; }

  var CONTACT_EMAIL = "sxd@simpleaccessory.com";
  var PAGE_SIZE = 48;
  var state = { keyword: "", category: "all", page: 1 };
  var currentList = [];

  function categoryName(id) {
    for (var i = 0; i < CATEGORIES.length; i++) {
      if (CATEGORIES[i].id === id) { return CATEGORIES[i].name; }
    }
    return id;
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* 画像未アップロード時に表示するプレースホルダー */
  var PLACEHOLDER_IMG = "data:image/svg+xml," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">' +
    '<rect width="320" height="320" fill="#efece6"/>' +
    '<text x="160" y="150" text-anchor="middle" font-family="sans-serif" font-size="18" fill="#8a8378">画像準備中</text>' +
    '<text x="160" y="180" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#b3ac9f" letter-spacing="2">IMAGE PREPARING</text>' +
    '</svg>'
  );

  function imagePath(p) {
    return (p.image && String(p.image).length > 0) ? p.image : "images/products/" + p.code + "-1.jpg";
  }

  function imageSlot(src, alt) {
    var s = (src && String(src).length > 0) ? src : PLACEHOLDER_IMG;
    var cls = (s === PLACEHOLDER_IMG) ? " is-placeholder" : "";
    return '<div class="product-img-item"><img class="' + cls.trim() + '" src="' + escapeHtml(s) + '" alt="' + escapeHtml(alt) + '" loading="lazy"></div>';
  }

  function basePriceHtml(p) {
    var v = p.basePrice;
    if (v === null || v === undefined || v === "") {
      return '<span class="price-ask">お問い合わせください</span>';
    }
    if (typeof v === "number" || /^[0-9]+(\.[0-9]+)?$/.test(String(v))) {
      return '<span class="price-value">' + escapeHtml(v) + ' 円/個　EXW</span>';
    }
    return '<span class="price-value">' + escapeHtml(v) + '</span>';
  }

  function cardHtml(p) {
    var catName = categoryName(p.category);
    var img2 = (p.image2 && String(p.image2).length > 0) ? p.image2 : "";
    var imagesHtml = imageSlot(imagePath(p), p.code + " " + catName + " 商品画像");
    imagesHtml += imageSlot(img2, p.code + " " + catName + " サービス説明");
    var subject = encodeURIComponent("製品についてのお問い合わせ（" + p.code + "）");
    var mailBody = encodeURIComponent(
      "青島シンプルアクセサリー製造所 ご担当者様\n\n以下の製品についてお問い合わせございます。\n\n品番：" + p.code + "\n\n（ご質問・ご要望をご記入ください）\n"
    );
    return (
      '<article class="product-card" data-code="' + escapeHtml(p.code) + '">' +
        '<div class="product-img">' + imagesHtml + '</div>' +
        '<div class="product-body">' +
          '<div class="product-head">' +
            '<p class="product-code">' + escapeHtml(p.code) + '</p>' +
            '<span class="product-cat">' + escapeHtml(catName) + '</span>' +
          '</div>' +
          '<p class="product-meta">サイズ：' + escapeHtml(p.size || "—") + '</p>' +
          '<p class="product-meta">材質：' + escapeHtml(p.material || "—") + '</p>' +
          '<p class="product-keywords"><span class="kw-label">キーワード：</span>' + escapeHtml(p.keywords || "") + '</p>' +
          '<p class="product-price"><span class="price-label">生地値段：</span>' + basePriceHtml(p) + '</p>' +
          '<a class="product-inquiry" href="mailto:' + CONTACT_EMAIL + "?subject=" + subject + "&body=" + mailBody + '">この製品について問い合わせる</a>' +
        '</div>' +
      '</article>'
    );
  }

  function bindImageFallback() {
    var imgs = grid.querySelectorAll(".product-img img");
    Array.prototype.forEach.call(imgs, function (img) {
      img.addEventListener("error", function onErr() {
        img.removeEventListener("error", onErr);
        img.classList.add("is-placeholder");
        img.src = PLACEHOLDER_IMG;
      });
    });
  }

  /* 品番・分類・サイズ・材質・キーワードを対象に検索 */
  function applyFilters() {
    var kw = state.keyword.trim().toLowerCase();
    currentList = PRODUCTS.filter(function (p) {
      if (state.category !== "all" && p.category !== state.category) { return false; }
      if (!kw) { return true; }
      var haystack = [p.code, p.material, p.desc, p.keywords, p.size, categoryName(p.category)].join(" ").toLowerCase();
      return haystack.indexOf(kw) !== -1;
    });
    state.page = 1;
    render();
  }

  function render() {
    var total = currentList.length;
    var tp = Math.max(1, Math.ceil(total / PAGE_SIZE));
    if (state.page > tp) { state.page = tp; }
    var start = (state.page - 1) * PAGE_SIZE;
    var pageItems = currentList.slice(start, start + PAGE_SIZE);
    grid.innerHTML = pageItems.map(cardHtml).join("");
    bindImageFallback();
    if (total > 0) {
      countEl.textContent = total + "件中 " + (start + 1) + "-" + (start + pageItems.length) + "件を表示しています（全" + tp + "ページ）";
    } else {
      countEl.textContent = "";
    }
    noResult.hidden = total > 0;
    renderPagination(total, tp);
  }

  /* ---------- ページネーション ---------- */
  function goToPage(n) {
    var tp = Math.max(1, Math.ceil(currentList.length / PAGE_SIZE));
    if (n < 1 || n > tp || n === state.page) { return; }
    state.page = n;
    render();
    var sec = document.getElementById("products");
    if (sec) { sec.scrollIntoView({ behavior: "smooth", block: "start" }); }
  }

  function pageBtn(label, page, disabled, isActive) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "page-btn" + (isActive ? " active" : "");
    b.textContent = label;
    if (disabled) { b.disabled = true; }
    b.addEventListener("click", function () { goToPage(page); });
    return b;
  }

  /* ページ番号（多い場合は「…」で省略） */
  function pageNumbers(current, total) {
    var items = [];
    var i;
    if (total <= 7) {
      for (i = 1; i <= total; i++) { items.push(i); }
      return items;
    }
    items.push(1);
    if (current <= 4) {
      for (i = 2; i <= 5; i++) { items.push(i); }
      items.push("...", total);
    } else if (current >= total - 3) {
      items.push("...");
      for (i = total - 4; i <= total; i++) { items.push(i); }
    } else {
      items.push("...");
      for (i = current - 1; i <= current + 1; i++) { items.push(i); }
      items.push("...", total);
    }
    return items;
  }

  function renderPagination(total, tp) {
    if (!paginationBox) { return; }
    paginationBox.innerHTML = "";
    if (tp <= 1) { paginationBox.hidden = true; return; }
    paginationBox.hidden = false;
    paginationBox.appendChild(pageBtn("前へ", state.page - 1, state.page === 1, false));
    pageNumbers(state.page, tp).forEach(function (item) {
      if (item === "...") {
        var span = document.createElement("span");
        span.className = "page-ellipsis";
        span.textContent = "…";
        paginationBox.appendChild(span);
      } else {
        paginationBox.appendChild(pageBtn(String(item), item, false, item === state.page));
      }
    });
    paginationBox.appendChild(pageBtn("次へ", state.page + 1, state.page === tp, false));
  }

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      state.keyword = searchInput.value;
      applyFilters();
    });
  }
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      state.keyword = searchInput.value;
      applyFilters();
    });
  }
  if (tabsBox) {
    var tabs = tabsBox.querySelectorAll(".tab");
    Array.prototype.forEach.call(tabs, function (tab) {
      tab.addEventListener("click", function () {
        Array.prototype.forEach.call(tabs, function (t) {
          t.classList.remove("active");
          t.setAttribute("aria-pressed", "false");
        });
        tab.classList.add("active");
        tab.setAttribute("aria-pressed", "true");
        state.category = tab.getAttribute("data-category");
        applyFilters();
      });
    });
  }

  /* ---------- 商品画像のクリック拡大（ライトボックス） ---------- */
  (function initLightbox() {
    var lb = document.createElement("div");
    lb.className = "img-lightbox";
    lb.hidden = true;
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-label", "画像の拡大表示");
    var lbImg = document.createElement("img");
    lbImg.alt = "";
    lb.appendChild(lbImg);
    document.body.appendChild(lb);

    function close() {
      lb.hidden = true;
      lbImg.removeAttribute("src");
      document.body.style.overflow = "";
    }
    function open(src) {
      lbImg.src = src;
      lb.hidden = false;
      document.body.style.overflow = "hidden";
    }
    lb.addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !lb.hidden) { close(); }
    });
    /* 商品カードの画像をクリックで拡大（動的生成にも対応するため委任） */
    document.addEventListener("click", function (e) {
      var t = e.target;
      if (t && t.tagName === "IMG" && t.closest && t.closest(".product-img")) {
        open(t.src);
      }
    });
  })();

  /* ---------- メールアドレスのコピー ---------- */
  (function initCopyEmail() {
    var btn = document.getElementById("copy-email-btn");
    if (!btn) { return; }
    var email = btn.getAttribute("data-email") || "";
    var timer = null;
    var originalLabel = btn.textContent;

    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        done();
      } catch (e) {
        window.prompt("メールアドレスをコピーしてください：", email);
      }
      document.body.removeChild(ta);
    }

    function done() {
      btn.textContent = "コピーしました";
      btn.classList.add("copied");
      if (timer) { clearTimeout(timer); }
      timer = setTimeout(function () {
        btn.textContent = originalLabel;
        btn.classList.remove("copied");
      }, 2000);
    }

    btn.addEventListener("click", function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(done).catch(fallback);
      } else {
        fallback();
      }
    });
  })();

  applyFilters();
})();
