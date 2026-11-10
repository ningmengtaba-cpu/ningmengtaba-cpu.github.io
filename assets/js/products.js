/* ============================================================
   青島シンプルアクセサリー製造所｜製品データファイル
   ------------------------------------------------------------
   【製品の追加方法（如何添加产品）】
   1. 下の PRODUCTS 配列に、1件につき1つの { ... } ブロックを追加します。
      最後の製品のブロックにも「,」を付けてから、新しいブロックを
      追加してください（途中の製品だけ「,」で区切ります）。
   2. 各項目の意味：
      code      : 品番（例 "20260903-1"）
      category  : 分類。下記のいずれかを指定します
                    "pierce"   = ピアス
                    "charm"    = チャーム＆ペンダントトップ
                    "necklace" = ネックレス
                    "case"     = ケース
                    "parts"    = パーツ
                    "bracelet" = ブレスレット
                    "brooch"   = ブローチ
                    "bangle"   = バングル
      size      : サイズ（例 "13.23mm"）
      material  : 材質（例 "亜鉛合金、ステンレス"）
      keywords  : キーワード（検索対象になります。空白区切りで記入）
      basePrice : 生地値段。数値の場合は「42 円/個　EXW」と表示されます。
                  テキストも可（例 "お問い合わせをお願い致します"）。
                  null の場合は「お問い合わせください」と表示されます。
      image     : 1枚目の画像（商品精修図）のパス。空欄で自動参照します。
      image2    : 2枚目の画像（共通説明図など）のパス。不要な場合は "" か省略可
   【画像の追加方法（如何上传产品图）】
   製品写真は images/products/ フォルダに保存してください（JPEG推奨）。
   1枚目：{品番}-1.jpg（例: 20260903-1-1.jpg）
   2枚目：{品番}-2.jpg、または全商品共通の notice.jpg を参照
   画像は元の構図を保つため、白い画布に合わせて中央に配置されます。
   画像が未アップロードの製品は「画像準備中」と表示されます。
   検索は「品番・分類・サイズ・材質・キーワード」で行えます。
   ============================================================ */

var CATEGORIES = [
  { id: "pierce",   name: "ピアス" },
  { id: "charm",    name: "チャーム＆ペンダントトップ" },
  { id: "necklace", name: "ネックレス" },
  { id: "case",     name: "ケース" },
  { id: "parts",    name: "パーツ" },
  { id: "bracelet", name: "ブレスレット" },
  { id: "brooch",   name: "ブローチ" },
  { id: "bangle",   name: "バングル" }
];

var PRODUCTS = [
  {
    code: "20260903-1",
    category: "pierce",
    size: "13.23mm",
    material: "亜鉛合金、ステンレス",
    keywords: "ピアス 耳飾り ポストピアス 角丸 丸角 R角 ローレット ロープ風 ロープ ひも状 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 42,
    image: "images/products/20260903-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260918-1",
    category: "charm",
    size: "15.21mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム ハート型 ハート ラブ スクロール 唐草 スクロール模様 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 127,
    image: "images/products/20260918-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-1",
    category: "charm",
    size: "21mm",
    material: "銀",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント ハート型 ハート ラブ CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261029-8-1",
    category: "charm",
    size: "13.76mm",
    material: "ステンレス",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 正方形 角形 スクエア 縁取り 縁 エッジ 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261029-8-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260903-2",
    category: "pierce",
    size: "19.29mm",
    material: "亜鉛合金、ステンレス",
    keywords: "ピアス 耳飾り ポストピアス 丸型 サークル 丸 オープン 透かし 穴あき 中空 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 42,
    image: "images/products/20260903-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260903-3",
    category: "pierce",
    size: "28.63mm",
    material: "亜鉛合金、ステンレス",
    keywords: "ピアス 耳飾り ポストピアス 丸型 サークル 丸 ひねり ねじれ ひねり模様 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 68,
    image: "images/products/20260903-3-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260903-4",
    category: "pierce",
    size: "25.40mm",
    material: "亜鉛合金、ステンレス",
    keywords: "ピアス 耳飾り ポストピアス 長方形 長方 レクタル ローレット ロープ風 ロープ ひも状 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 55,
    image: "images/products/20260903-4-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260903-5",
    category: "pierce",
    size: "17.04mm",
    material: "亜鉛合金、ステンレス",
    keywords: "ピアス 耳飾り ポストピアス 楕円型 長円 楕円 波線 ウェーブ 波打つ 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 42,
    image: "images/products/20260903-5-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260903-6",
    category: "pierce",
    size: "23.97mm",
    material: "亜鉛合金、ステンレス",
    keywords: "ピアス 耳飾り ポストピアス 丸型 サークル 丸 重ね 二重 重ね合わせ 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 55,
    image: "images/products/20260903-6-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260903-7",
    category: "pierce",
    size: "14.77mm",
    material: "亜鉛合金、ステンレス、ガラス",
    keywords: "ピアス 耳飾り ポストピアス 丸型 サークル 丸 ガラス パボ設定 パベ 象嵌 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール ガラス石",
    basePrice: 42,
    image: "images/products/20260903-7-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260903-8",
    category: "pierce",
    size: "21.98mm",
    material: "亜鉛合金、ステンレス",
    keywords: "ピアス 耳飾り ポストピアス 楕円型 長円 楕円 重ね 二重 重ね合わせ 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 55,
    image: "images/products/20260903-8-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260903-9",
    category: "pierce",
    size: "17.35mm",
    material: "亜鉛合金、ステンレス",
    keywords: "ピアス 耳飾り ポストピアス 丸型 サークル 丸 ローレット ロープ風 ロープ ひも状 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 42,
    image: "images/products/20260903-9-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260903-10",
    category: "pierce",
    size: "18.92mm",
    material: "亜鉛合金、ステンレス",
    keywords: "ピアス 耳飾り ポストピアス 丸型 サークル 丸 ひねり ねじれ ひねり模様 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 42,
    image: "images/products/20260903-10-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260903-11",
    category: "pierce",
    size: "17.56mm",
    material: "亜鉛合金、ステンレス",
    keywords: "ピアス 耳飾り ポストピアス 丸型 サークル 丸 波線 ウェーブ 波打つ 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 42,
    image: "images/products/20260903-11-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260903-12",
    category: "pierce",
    size: "23.97mm",
    material: "亜鉛合金、ステンレス",
    keywords: "ピアス 耳飾り ポストピアス 丸型 サークル 丸 重ね 二重 重ね合わせ 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 55,
    image: "images/products/20260903-12-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260903-13",
    category: "pierce",
    size: "21.92mm",
    material: "亜鉛合金、ステンレス",
    keywords: "ピアス 耳飾り ポストピアス 涙滴型 涙滴 ピードロップ フレーム 枠 額縁 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 55,
    image: "images/products/20260903-13-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260903-14",
    category: "pierce",
    size: "14.74mm",
    material: "亜鉛合金、ステンレス",
    keywords: "ピアス 耳飾り ポストピアス 丸型 サークル 丸 留め具 クラスプ 固定金具 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 42,
    image: "images/products/20260903-14-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260903-15",
    category: "pierce",
    size: "23.47mm",
    material: "亜鉛合金、ステンレス",
    keywords: "ピアス 耳飾り ポストピアス 丸型 サークル 丸 ローレット ロープ風 ロープ ひも状 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 55,
    image: "images/products/20260903-15-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260903-16",
    category: "pierce",
    size: "22.25mm",
    material: "亜鉛合金、ステンレス",
    keywords: "ピアス 耳飾り ポストピアス 丸型 サークル 丸 花線 華線 花柄 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 55,
    image: "images/products/20260903-16-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260903-17",
    category: "pierce",
    size: "22.53mm",
    material: "亜鉛合金、ステンレス",
    keywords: "ピアス 耳飾り ポストピアス 丸型 サークル 丸 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 55,
    image: "images/products/20260903-17-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260903-18",
    category: "brooch",
    size: "18.78mm",
    material: "亜鉛合金、ステンレス",
    keywords: "フープ リング ホープ 正方形 角形 スクエア フレーム 枠 額縁 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 42,
    image: "images/products/20260903-18-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260903-19",
    category: "pierce",
    size: "19.92mm",
    material: "亜鉛合金、ステンレス、ガラス",
    keywords: "ピアス 耳飾り ポストピアス 丸型 サークル 丸 ハンマー打ち ハンマー仕上げ 叩き目 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール ガラス ガラス石",
    basePrice: 42,
    image: "images/products/20260903-19-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260903-20",
    category: "pierce",
    size: "13.87mm",
    material: "亜鉛合金、ステンレス",
    keywords: "ピアス 耳飾り ポストピアス 丸型 サークル 丸 極小サイズ 極小 ミニ 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 42,
    image: "images/products/20260903-20-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260903-21",
    category: "pierce",
    size: "17.57mm",
    material: "亜鉛合金、ステンレス",
    keywords: "ピアス 耳飾り ポストピアス 丸型 サークル 丸 ひねり ねじれ ひねり模様 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 42,
    image: "images/products/20260903-21-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260903-22",
    category: "pierce",
    size: "24.76mm",
    material: "亜鉛合金、ステンレス",
    keywords: "ピアス 耳飾り ポストピアス 丸型 サークル 丸 リング型 リング 輪 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 55,
    image: "images/products/20260903-22-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260918-2",
    category: "charm",
    size: "7.64mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "パーツ アクセサリーパーツ 小物パーツ 丸型 サークル 丸 フルCZ フルジルコニア パCZ 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造 ジルコニア CZ",
    basePrice: 153,
    image: "images/products/20260918-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260918-3",
    category: "charm",
    size: "16.60mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 花型 花 フラワー フルCZ フルジルコニア パCZ 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造 ジルコニア CZ",
    basePrice: 263,
    image: "images/products/20260918-3-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260918-4",
    category: "charm",
    size: "17.54mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 花型 花 フラワー フルCZ フルジルコニア パCZ パール パールカラー CZパール 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造 ジルコニア CZ",
    basePrice: 217,
    image: "images/products/20260918-4-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260918-5",
    category: "charm",
    size: "39.87mm",
    material: "真鍮鋳造",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 不規則型 不定形 ランダム スクロール 唐草 スクロール模様 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 195,
    image: "images/products/20260918-5-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260918-6",
    category: "charm",
    size: "22.62mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 不規則型 不定形 ランダム フルCZ フルジルコニア パCZ 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造 ジルコニア CZ",
    basePrice: 178,
    image: "images/products/20260918-6-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260918-7",
    category: "charm",
    size: "16.74mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 蝶型 蝶 バタフライ フルCZ フルジルコニア パCZ 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造 ジルコニア CZ",
    basePrice: 106,
    image: "images/products/20260918-7-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260918-8",
    category: "charm",
    size: "12.09mm",
    material: "真鍮鋳造",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 花型 花 フラワー 薄型 薄 薄手 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 38,
    image: "images/products/20260918-8-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260918-9",
    category: "charm",
    size: "21.09mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 涙滴型 涙滴 ピードロップ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 255,
    image: "images/products/20260918-9-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260918-10",
    category: "charm",
    size: "11.91mm",
    material: "真鍮鋳造",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 花型 花 フラワー 中空 オープン 穴あき 透かし 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 36,
    image: "images/products/20260918-10-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260918-11",
    category: "charm",
    size: "43.68mm",
    material: "真鍮鋳造",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 羽毛型 羽 フェザー 波線 ウェーブ 波打つ 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 93,
    image: "images/products/20260918-11-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260918-12",
    category: "charm",
    size: "25.06mm",
    material: "真鍮鋳造",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 靴型 ブーツ 靴 中空 オープン 穴あき 透かし 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 72,
    image: "images/products/20260918-12-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260918-13",
    category: "charm",
    size: "25.06mm",
    material: "真鍮鋳造",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム シーホース型 シーホース 海馬 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 119,
    image: "images/products/20260918-13-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260918-14",
    category: "charm",
    size: "10.90mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 樹木型 樹木 ツリー CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 183,
    image: "images/products/20260918-14-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260918-15",
    category: "charm",
    size: "18.27mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "リング用留め具 リング用クラスプ 留め具 リング型 リング 輪 フルCZ フルジルコニア パCZ 多色 マルチカラー カラー 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造 ジルコニア CZ",
    basePrice: 204,
    image: "images/products/20260918-15-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260918-16",
    category: "charm",
    size: "15.15mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 星型 スター CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 62,
    image: "images/products/20260918-16-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260918-17",
    category: "charm",
    size: "12.41mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム ハート型 ハート ラブ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 57,
    image: "images/products/20260918-17-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260918-18",
    category: "charm",
    size: "16.23mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム ハート型 ハート ラブ フレーム 枠 額縁 フルCZ フルジルコニア パCZ 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造 ジルコニア CZ",
    basePrice: 72,
    image: "images/products/20260918-18-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260919-01",
    category: "pierce",
    size: "29.21mm",
    material: "亜鉛合金、ステンレス",
    keywords: "ピアス 耳飾り ポストピアス 楕円型 長円 楕円 オープン 透かし 穴あき 中空 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 68,
    image: "images/products/20260919-01-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260919-02",
    category: "pierce",
    size: "19.69mm",
    material: "亜鉛合金、ステンレス",
    keywords: "フープピアス フープ リングピアス 輪ピアス 丸型 サークル 丸 オープン 透かし 穴あき 中空 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 42,
    image: "images/products/20260919-02-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260919-03",
    category: "pierce",
    size: "14.83mm",
    material: "亜鉛合金、ステンレス",
    keywords: "フープピアス フープ リングピアス 輪ピアス 丸型 サークル 丸 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 42,
    image: "images/products/20260919-03-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260919-04",
    category: "pierce",
    size: "18.08mm",
    material: "亜鉛合金、ステンレス",
    keywords: "フープピアス フープ リングピアス 輪ピアス 丸型 サークル 丸 CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 42,
    image: "images/products/20260919-04-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260919-05",
    category: "pierce",
    size: "19.86mm",
    material: "亜鉛合金、ステンレス",
    keywords: "フープピアス フープ リングピアス 輪ピアス ハート型 ハート ラブ 厚型 厚 厚手 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 42,
    image: "images/products/20260919-05-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260919-06",
    category: "pierce",
    size: "16.45mm",
    material: "亜鉛合金、ステンレス",
    keywords: "フープピアス フープ リングピアス 輪ピアス 丸型 サークル 丸 丸太型 丸棒 ロッド 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 42,
    image: "images/products/20260919-06-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260919-07",
    category: "pierce",
    size: "15.17mm",
    material: "亜鉛合金、ステンレス",
    keywords: "フープピアス フープ リングピアス 輪ピアス 丸型 サークル 丸 留め具 クラスプ 固定金具 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 42,
    image: "images/products/20260919-07-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260919-08",
    category: "pierce",
    size: "17.93mm",
    material: "亜鉛合金、ステンレス",
    keywords: "フープピアス フープ リングピアス 輪ピアス 丸型 サークル 丸 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ステンレス スチール",
    basePrice: 42,
    image: "images/products/20260919-08-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260919-09",
    category: "pierce",
    size: "25.75mm",
    material: "亜鉛合金",
    keywords: "フープピアス フープ リングピアス 輪ピアス 楕円型 長円 楕円 オープン 透かし 穴あき 中空 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 68,
    image: "images/products/20260919-09-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260919-10",
    category: "pierce",
    size: "21.12mm",
    material: "亜鉛合金",
    keywords: "フープピアス フープ リングピアス 輪ピアス 丸型 サークル 丸 ひねり ねじれ ひねり模様 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 55,
    image: "images/products/20260919-10-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260919-11",
    category: "pierce",
    size: "17.98mm",
    material: "亜鉛合金",
    keywords: "フープピアス フープ リングピアス 輪ピアス 丸型 サークル 丸 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 42,
    image: "images/products/20260919-11-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260919-12",
    category: "pierce",
    size: "20.17mm",
    material: "亜鉛合金",
    keywords: "フープピアス フープ リングピアス 輪ピアス 丸型 サークル 丸 竹節 竹の節 竹目 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 42,
    image: "images/products/20260919-12-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260919-13",
    category: "pierce",
    size: "17.59mm",
    material: "亜鉛合金",
    keywords: "フープピアス フープ リングピアス 輪ピアス 丸型 サークル 丸 丸太型 丸棒 ロッド 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 42,
    image: "images/products/20260919-13-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260919-14",
    category: "pierce",
    size: "17.29mm",
    material: "亜鉛合金",
    keywords: "フープピアス フープ リングピアス 輪ピアス 丸型 サークル 丸 留め具 クラスプ 固定金具 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 42,
    image: "images/products/20260919-14-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260919-15",
    category: "pierce",
    size: "14.77mm",
    material: "亜鉛合金",
    keywords: "フープピアス フープ リングピアス 輪ピアス 丸型 サークル 丸 スクロール 唐草 スクロール模様 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 42,
    image: "images/products/20260919-15-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260919-16",
    category: "pierce",
    size: "20.29mm",
    material: "亜鉛合金",
    keywords: "フープピアス フープ リングピアス 輪ピアス 丸型 サークル 丸 メッシュ 網目 メッシュ状 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 42,
    image: "images/products/20260919-16-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260919-17",
    category: "pierce",
    size: "14.45mm",
    material: "亜鉛合金",
    keywords: "フープピアス フープ リングピアス 輪ピアス 丸型 サークル 丸 花線 華線 花柄 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 42,
    image: "images/products/20260919-17-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260919-18",
    category: "pierce",
    size: "18.21mm",
    material: "亜鉛合金",
    keywords: "フープピアス フープ リングピアス 輪ピアス 丸型 サークル 丸 ハンマー打ち ハンマー仕上げ 叩き目 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 42,
    image: "images/products/20260919-18-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260919-19",
    category: "pierce",
    size: "15.19mm",
    material: "亜鉛合金",
    keywords: "接続リング コネクター 丸カン 引き輪 リング型 リング 輪 波線 ウェーブ 波打つ 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 42,
    image: "images/products/20260919-19-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260919-20",
    category: "pierce",
    size: "24.28mm",
    material: "亜鉛合金",
    keywords: "留め具 クラスプ 固定金具 丸型 サークル 丸 波線 ウェーブ 波打つ 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 55,
    image: "images/products/20260919-20-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260919-21",
    category: "pierce",
    size: "29.66mm",
    material: "亜鉛合金",
    keywords: "チェーン用留め具 チェーン用クラスプ 留め具金具 チェーン型 チェーン 鎖 ひねり ねじれ ひねり模様 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 68,
    image: "images/products/20260919-21-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-2",
    category: "charm",
    size: "14mm",
    material: "銀、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム ハート型 ハート ラブ フルCZ フルジルコニア パCZ 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925 ジルコニア CZ",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-3",
    category: "charm",
    size: "27mm",
    material: "銀、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 三角形 トライアングル 三稜 CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-3-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-4",
    category: "charm",
    size: "17mm",
    material: "銀、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 蝶型 蝶 バタフライ CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-4-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-5",
    category: "charm",
    size: "24mm",
    material: "銀、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 丸型 サークル 丸 蝶型 蝶 バタフライ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-5-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-6",
    category: "charm",
    size: "21mm",
    material: "銀、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 涙滴型 涙滴 ピードロップ CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-6-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-7",
    category: "charm",
    size: "21mm",
    material: "銀、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 不規則型 不定形 ランダム CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-7-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-8",
    category: "charm",
    size: "15mm",
    material: "銀、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム ライン型 細長 ライン フルCZ フルジルコニア パCZ 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925 ジルコニア CZ",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-8-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-9",
    category: "charm",
    size: "22mm",
    material: "銀、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 丸型 サークル 丸 CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-9-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-10",
    category: "charm",
    size: "16mm",
    material: "銀",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム ドーナツ型 ドーナツ 中空リング 星型 スター CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-10-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-11",
    category: "charm",
    size: "29mm",
    material: "銀、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム ドーナツ型 ドーナツ 中空リング 星型 スター CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-11-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-12",
    category: "charm",
    size: "16mm",
    material: "銀",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 蝶型 蝶 バタフライ オープン 透かし 穴あき 中空 CZ ジルコニア ダイヤ風 スクロール 唐草 スクロール模様 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-12-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-13",
    category: "charm",
    size: "42mm",
    material: "銀、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 不規則型 不定形 ランダム ひねり ねじれ ひねり模様 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-13-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-14",
    category: "charm",
    size: "29mm",
    material: "銀、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム ドーナツ型 ドーナツ 中空リング 蝶型 蝶 バタフライ フルCZ フルジルコニア パCZ 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925 ジルコニア CZ",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-14-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-15",
    category: "charm",
    size: "20mm",
    material: "銀、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 丸型 サークル 丸 CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-15-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-16",
    category: "charm",
    size: "17mm",
    material: "銀、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 丸型 サークル 丸 CZ ジルコニア ダイヤ風 波線 ウェーブ 波打つ 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-16-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-17",
    category: "charm",
    size: "22mm",
    material: "銀、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 蝶型 蝶 バタフライ 正方形 角形 スクエア CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-17-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-18",
    category: "charm",
    size: "34mm",
    material: "銀、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント ドーナツ型 ドーナツ 中空リング CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-18-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-19",
    category: "charm",
    size: "21mm",
    material: "銀",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 涙滴型 涙滴 ピードロップ CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-19-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-20",
    category: "charm",
    size: "27mm",
    material: "銀、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 蝶型 蝶 バタフライ チェーン 鎖 チェーンパーツ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-20-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-21",
    category: "charm",
    size: "30mm",
    material: "銀",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 花型 花 フラワー CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-21-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-22",
    category: "charm",
    size: "14mm",
    material: "銀、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 不規則型 不定形 ランダム つやなし マット仕上げ つや消し CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-22-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-23",
    category: "parts",
    size: "22mm",
    material: "銀、ジルコニア",
    keywords: "接続リング コネクター 丸カン 引き輪 不規則型 不定形 ランダム CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-23-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-24",
    category: "charm",
    size: "26mm",
    material: "銀、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 不規則型 不定形 ランダム 楕円型 長円 楕円 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-24-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-25",
    category: "charm",
    size: "23mm",
    material: "銀、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 花型 花 フラワー フルCZ フルジルコニア パCZ 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925 ジルコニア CZ",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-25-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-26",
    category: "necklace",
    size: "42mm",
    material: "銀、ジルコニア",
    keywords: "チェーン 鎖 チェーンパーツ 丸型 サークル 丸 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-26-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-27",
    category: "charm",
    size: "21mm",
    material: "銀、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 楕円型 長円 楕円 CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-27-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-28",
    category: "charm",
    size: "22mm",
    material: "銀、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム ハート型 ハート ラブ CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-28-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-29",
    category: "pierce",
    size: "12mm",
    material: "銀、ジルコニア",
    keywords: "フープ リング ホープ リング型 輪 CZ ジルコニア ダイヤ風 文字入り 文字 刻印 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-29-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-30",
    category: "charm",
    size: "36mm",
    material: "銀、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 星型 スター CZ ジルコニア ダイヤ風 チェーン型 チェーン 鎖 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-30-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260920-31",
    category: "charm",
    size: "29mm",
    material: "銀、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 丸型 サークル 丸 CZ ジルコニア ダイヤ風 ひねり ねじれ ひねり模様 素地 メタル前の生地状態で メッキ加工可 地金 銀 純銀 SV925 925",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20260920-31-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260924-1",
    category: "charm",
    size: "18.46mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 波線 ウェーブ 波打つ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 136,
    image: "images/products/20260924-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260924-2",
    category: "charm",
    size: "12.99mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 蝶型 蝶 バタフライ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 153,
    image: "images/products/20260924-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260924-3",
    category: "charm",
    size: "20.91mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 不規則型 不定形 ランダム CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 62,
    image: "images/products/20260924-3-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260924-4",
    category: "charm",
    size: "27.17mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 星型 スター CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 102,
    image: "images/products/20260924-4-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260924-5",
    category: "charm",
    size: "16.33mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム ハート型 ハート ラブ CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 72,
    image: "images/products/20260924-5-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260924-6",
    category: "charm",
    size: "26.16mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 十字型 クロス 十字 CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 153,
    image: "images/products/20260924-6-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260924-7",
    category: "charm",
    size: "28.80mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 十字型 クロス 十字 CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 93,
    image: "images/products/20260924-7-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260924-8",
    category: "charm",
    size: "18.74mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 不規則型 不定形 ランダム CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 64,
    image: "images/products/20260924-8-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260924-9",
    category: "charm",
    size: "9.52mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 極小サイズ 極小 ミニ ライン型 細長 ライン CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 45,
    image: "images/products/20260924-9-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260924-10",
    category: "charm",
    size: "18.91mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 正方形 角形 スクエア 中空 オープン 穴あき 透かし CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 64,
    image: "images/products/20260924-10-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260924-11",
    category: "charm",
    size: "16.00mm",
    material: "真鍮鋳造",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 涙滴型 涙滴 ピードロップ CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 74,
    image: "images/products/20260924-11-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260924-12",
    category: "charm",
    size: "24.45mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 星型 スター CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 119,
    image: "images/products/20260924-12-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260924-13-1",
    category: "necklace",
    size: "144.35mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チェーン 鎖 チェーンパーツ チェーン型 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 1699,
    image: "images/products/20260924-13-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260924-14",
    category: "charm",
    size: "23.29mm",
    material: "真鍮鋳造",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 羽型 羽毛 フェザー 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 51,
    image: "images/products/20260924-14-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260924-15",
    category: "case",
    size: "43.44mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 楕円型 長円 楕円 CZ ジルコニア ダイヤ風 文字入り 文字 刻印 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 849,
    image: "images/products/20260924-15-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260924-16",
    category: "charm",
    size: "19.38mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 星型 スター CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 85,
    image: "images/products/20260924-16-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260924-17",
    category: "charm",
    size: "30.22mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ ライン型 細長 ライン CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 102,
    image: "images/products/20260924-17-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260924-18",
    category: "charm",
    size: "45.14mm",
    material: "真鍮鋳造",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 丸太型 丸棒 ロッド 文字入り 文字 刻印 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 153,
    image: "images/products/20260924-18-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260926-1",
    category: "pierce",
    size: "24.58mm",
    material: "亜鉛合金",
    keywords: "バック ピアスバック 蝶番 ネット 楕円型 長円 楕円 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 55,
    image: "images/products/20260926-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260926-2",
    category: "pierce",
    size: "17.39mm",
    material: "亜鉛合金",
    keywords: "ピアス用留め具 ピアスバック 蝶番 楕円型 長円 楕円 中空 オープン 穴あき 透かし 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 42,
    image: "images/products/20260926-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260926-3",
    category: "pierce",
    size: "21.48mm",
    material: "亜鉛合金",
    keywords: "ピアス用留め具 ピアスバック 蝶番 丸型 サークル 丸 中空 オープン 穴あき 透かし 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 55,
    image: "images/products/20260926-3-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260926-4",
    category: "pierce",
    size: "28.98mm",
    material: "亜鉛合金",
    keywords: "ピアス用留め具 ピアスバック 蝶番 涙滴型 涙滴 ピードロップ 中空 オープン 穴あき 透かし 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 68,
    image: "images/products/20260926-4-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260926-5",
    category: "pierce",
    size: "26.52mm",
    material: "亜鉛合金",
    keywords: "ピアス用留め具 ピアスバック 蝶番 ひねり ねじれ ひねり模様 スクロール 唐草 スクロール模様 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 68,
    image: "images/products/20260926-5-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260926-6",
    category: "pierce",
    size: "17.23mm",
    material: "亜鉛合金",
    keywords: "ピアス用留め具 ピアスバック 蝶番 星型 スター 中空 オープン 穴あき 透かし 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 42,
    image: "images/products/20260926-6-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260926-7",
    category: "pierce",
    size: "20.95mm",
    material: "亜鉛合金",
    keywords: "ピアス用留め具 ピアスバック 蝶番 楕円型 長円 楕円 中空 オープン 穴あき 透かし 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 55,
    image: "images/products/20260926-7-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260926-8",
    category: "pierce",
    size: "25.92mm",
    material: "亜鉛合金",
    keywords: "ピアス用留め具 ピアスバック 蝶番 涙滴型 涙滴 ピードロップ オープン 透かし 穴あき 中空 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 68,
    image: "images/products/20260926-8-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260926-9",
    category: "pierce",
    size: "29.96mm",
    material: "亜鉛合金",
    keywords: "ピアス用留め具 ピアスバック 蝶番 星型 スター オープン 透かし 穴あき 中空 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 68,
    image: "images/products/20260926-9-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260926-10",
    category: "pierce",
    size: "23.71mm",
    material: "亜鉛合金",
    keywords: "ピアス用留め具 ピアスバック 蝶番 丸型 サークル 丸 ひねり ねじれ ひねり模様 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 55,
    image: "images/products/20260926-10-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260926-11",
    category: "pierce",
    size: "20.07mm",
    material: "亜鉛合金",
    keywords: "ピアス用留め具 ピアスバック 蝶番 角丸 丸角 R角 オープン 透かし 穴あき 中空 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 42,
    image: "images/products/20260926-11-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260926-12",
    category: "pierce",
    size: "17.62mm",
    material: "亜鉛合金",
    keywords: "ピアス用留め具 ピアスバック 蝶番 星型 スター オープン 透かし 穴あき 中空 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 42,
    image: "images/products/20260926-12-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260926-13",
    category: "pierce",
    size: "28.26mm",
    material: "亜鉛合金",
    keywords: "ピアス用留め具 ピアスバック 蝶番 ハート型 ハート ラブ オープン 透かし 穴あき 中空 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 68,
    image: "images/products/20260926-13-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260926-14",
    category: "pierce",
    size: "20.99mm",
    material: "亜鉛合金",
    keywords: "ピアス用留め具 ピアスバック 蝶番 涙滴型 涙滴 ピードロップ ローレット ロープ風 ロープ ひも状 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 55,
    image: "images/products/20260926-14-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260928-1",
    category: "charm",
    size: "21.94mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 文字入り 文字 刻印 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 195,
    image: "images/products/20260928-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260928-2",
    category: "charm",
    size: "20.35mm",
    material: "真鍮鋳造",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント ドーナツ型 ドーナツ 中空リング 中空 オープン 穴あき 透かし 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 93,
    image: "images/products/20260928-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260928-3",
    category: "charm",
    size: "15.51mm",
    material: "真鍮鋳造",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 花型 花 フラワー オープン 透かし 穴あき 中空 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 62,
    image: "images/products/20260928-3-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260928-4",
    category: "charm",
    size: "21.92mm",
    material: "真鍮鋳造",
    keywords: "ピアス用留め具 ピアスバック 蝶番 花型 花 フラワー 重ね 二重 重ね合わせ 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 38,
    image: "images/products/20260928-4-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260928-5",
    category: "charm",
    size: "29.84mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 三角形 トライアングル 三稜 フルCZ フルジルコニア パCZ パール パールカラー CZパール 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造 ジルコニア CZ",
    basePrice: 114,
    image: "images/products/20260928-5-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260928-6",
    category: "charm",
    size: "9.18mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "Findings ファインディングス 金属パーツ 正方形 角形 スクエア CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 102,
    image: "images/products/20260928-6-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260928-7",
    category: "charm",
    size: "18.14mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ピアス 耳飾り ポストピアス 涙滴型 涙滴 ピードロップ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 102,
    image: "images/products/20260928-7-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260928-8",
    category: "charm",
    size: "24.15mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 蝶型 蝶 バタフライ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 195,
    image: "images/products/20260928-8-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260928-9",
    category: "charm",
    size: "22.09mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 涙滴型 涙滴 ピードロップ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 119,
    image: "images/products/20260928-9-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260928-10",
    category: "charm",
    size: "17.30mm",
    material: "真鍮鋳造",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 蝶型 蝶 バタフライ オープン 透かし 穴あき 中空 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 47,
    image: "images/products/20260928-10-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260928-11",
    category: "charm",
    size: "34.88mm",
    material: "真鍮鋳造",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 涙滴型 涙滴 ピードロップ 打痕 打刻 刻印 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 85,
    image: "images/products/20260928-11-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260929-1",
    category: "charm",
    size: "14.80mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 花型 花 フラワー CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 113,
    image: "images/products/20260929-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260929-2",
    category: "charm",
    size: "35.53mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ピアス用留め具 ピアスバック 蝶番 リング型 リング 輪 フルCZ フルジルコニア パCZ 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造 ジルコニア CZ",
    basePrice: 214,
    image: "images/products/20260929-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260929-3",
    category: "charm",
    size: "24.07mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ ライン型 細長 ライン フルCZ フルジルコニア パCZ 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造 ジルコニア CZ",
    basePrice: 98,
    image: "images/products/20260929-3-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260929-4",
    category: "charm",
    size: "23.70mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 涙滴型 涙滴 ピードロップ フルCZ フルジルコニア パCZ 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造 ジルコニア CZ",
    basePrice: 246,
    image: "images/products/20260929-4-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260929-5",
    category: "charm",
    size: "15.41mm",
    material: "真鍮鋳造",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント ハート型 ハート ラブ 穴あき 穴 ホール 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 123,
    image: "images/products/20260929-5-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260929-6",
    category: "charm",
    size: "31.17mm",
    material: "真鍮鋳造",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント ハート型 ハート ラブ メッシュ 網目 メッシュ状 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 195,
    image: "images/products/20260929-6-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260929-7",
    category: "charm",
    size: "15.48mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 花型 花 フラワー CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 89,
    image: "images/products/20260929-7-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260929-8",
    category: "charm",
    size: "16.66mm",
    material: "真鍮鋳造",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 花型 花 フラワー CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 93,
    image: "images/products/20260929-8-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260929-9",
    category: "charm",
    size: "15.02mm",
    material: "真鍮鋳造",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 正方形 角形 スクエア 文字入り 文字 刻印 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 204,
    image: "images/products/20260929-9-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260929-10",
    category: "charm",
    size: "11.86mm",
    material: "真鍮鋳造",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 文字入り 文字 刻印 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 93,
    image: "images/products/20260929-10-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260930-1",
    category: "charm",
    size: "24.43mm",
    material: "真鍮鋳造",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 文字入り 文字 刻印 ローレット ロープ風 ロープ ひも状 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 42,
    image: "images/products/20260930-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260930-2",
    category: "charm",
    size: "15.69mm",
    material: "真鍮鋳造",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 半円型 セミサークル 半月 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 102,
    image: "images/products/20260930-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260930-3",
    category: "charm",
    size: "14.81mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム ハート型 ハート ラブ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 85,
    image: "images/products/20260930-3-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260930-4",
    category: "parts",
    size: "24.43mm",
    material: "真鍮鋳造",
    keywords: "フープピアス フープ リングピアス 輪ピアス 楕円型 長円 楕円 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 178,
    image: "images/products/20260930-4-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260930-5",
    category: "parts",
    size: "14.69mm",
    material: "真鍮鋳造",
    keywords: "フープピアス フープ リングピアス 輪ピアス 丸型 サークル 丸 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 195,
    image: "images/products/20260930-5-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260930-6",
    category: "parts",
    size: "36.95mm",
    material: "真鍮鋳造",
    keywords: "チェーン用留め具 チェーン用クラスプ 留め具金具 楕円型 長円 楕円 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 178,
    image: "images/products/20260930-6-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260930-7",
    category: "pierce",
    size: "11.05mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "耳飾り ピアス クリップオン 花型 花 フラワー 多色 マルチカラー カラー CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 110,
    image: "images/products/20260930-7-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260930-8",
    category: "pierce",
    size: "9.76mm",
    material: "真鍮鋳造",
    keywords: "耳飾り ピアス クリップオン 蝶型 蝶 バタフライ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 191,
    image: "images/products/20260930-8-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260930-9",
    category: "pierce",
    size: "16.77mm",
    material: "真鍮鋳造",
    keywords: "バック ピアスバック 蝶番 ネット 丸型 サークル 丸 ひねり ねじれ ひねり模様 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 102,
    image: "images/products/20260930-9-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20260930-10",
    category: "pierce",
    size: "15.67mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "フープピアス フープ リングピアス 輪ピアス ハート型 ハート ラブ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 102,
    image: "images/products/20260930-10-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261002-1",
    category: "pierce",
    size: "15.01mm",
    material: "真鍮鋳造",
    keywords: "接続リング コネクター 丸カン 引き輪 丸型 サークル 丸 ローレット ロープ風 ロープ ひも状 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 157,
    image: "images/products/20261002-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261002-2",
    category: "bracelet",
    size: "59.13mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "円形 サークル 丸 CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 153,
    image: "images/products/20261002-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261002-3",
    category: "bracelet",
    size: "60.26mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "円形 サークル 丸 CZ ジルコニア ダイヤ風 蝶型 蝶 バタフライ 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 191,
    image: "images/products/20261002-3-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261002-4",
    category: "bracelet",
    size: "7.28mm",
    material: "真鍮鋳造",
    keywords: "円形 サークル 丸 星型 スター CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 127,
    image: "images/products/20261002-4-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261002-5",
    category: "bracelet",
    size: "80.95mm",
    material: "真鍮鋳造",
    keywords: "チェーン 鎖 チェーンパーツ チェーン型 楕円型 長円 楕円 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 1147,
    image: "images/products/20261002-5-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261002-6",
    category: "bracelet",
    size: "无",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チェーン 鎖 チェーンパーツ チェーン型 多色 マルチカラー カラー CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 680,
    image: "images/products/20261002-6-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261002-7",
    category: "bracelet",
    size: "62.63mm",
    material: "真鍮鋳造",
    keywords: "チェーン 鎖 チェーンパーツ チェーン型 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 722,
    image: "images/products/20261002-7-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261002-8",
    category: "charm",
    size: "19.57mm",
    material: "真鍮鋳造",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 不規則型 不定形 ランダム 文字入り 文字 刻印 穴あき 穴 ホール 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 76,
    image: "images/products/20261002-8-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261002-9",
    category: "charm",
    size: "37.76mm",
    material: "真鍮鋳造",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 丸太型 丸棒 ロッド 星型 スター 穴あき 穴 ホール 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 164,
    image: "images/products/20261002-9-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261002-10",
    category: "charm",
    size: "14.19mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 蝶型 蝶 バタフライ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 164,
    image: "images/products/20261002-10-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261004-1",
    category: "charm",
    size: "16.54mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 蝶型 蝶 バタフライ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 204,
    image: "images/products/20261004-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261004-2",
    category: "charm",
    size: "15.35mm",
    material: "真鍮鋳造",
    keywords: "リング 指輪 リングパーツ 丸型 サークル 丸 CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 157,
    image: "images/products/20261004-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261004-3",
    category: "charm",
    size: "14.50mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 花型 花 フラワー CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 106,
    image: "images/products/20261004-3-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261004-4",
    category: "charm",
    size: "14.80mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 星型 スター CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 204,
    image: "images/products/20261004-4-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261004-5",
    category: "charm",
    size: "16.39mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 蝶型 蝶 バタフライ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 221,
    image: "images/products/20261004-5-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261004-6",
    category: "charm",
    size: "25.40mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ ライン型 細長 ライン 多色 マルチカラー カラー CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 183,
    image: "images/products/20261004-6-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261004-7",
    category: "charm",
    size: "14.31mm",
    material: "真鍮鋳造",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 丸型 サークル 丸 CZ ジルコニア ダイヤ風 穴あき 穴 ホール 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 102,
    image: "images/products/20261004-7-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261004-8",
    category: "charm",
    size: "13.65mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 花型 花 フラワー CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 93,
    image: "images/products/20261004-8-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261004-9",
    category: "charm",
    size: "15.31mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 三角形 トライアングル 三稜 三つ巴 三つ葉 巴 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 153,
    image: "images/products/20261004-9-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261004-10",
    category: "charm",
    size: "12.18mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 蝶型 蝶 バタフライ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 132,
    image: "images/products/20261004-10-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261005-1",
    category: "charm",
    size: "15.26mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 花型 花 フラワー CZ ジルコニア ダイヤ風 中空 オープン 穴あき 透かし 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 64,
    image: "images/products/20261005-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261005-2",
    category: "pierce",
    size: "7.43mm",
    material: "真鍮鋳造",
    keywords: "ドロップピアス ドロップ 垂れピアス ダングリング 水滴型 雫 滴 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 76,
    image: "images/products/20261005-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261005-3",
    category: "charm",
    size: "16.24mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ ハート型 ハート ラブ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 127,
    image: "images/products/20261005-3-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261005-4",
    category: "charm",
    size: "38.06mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チェーン 鎖 チェーンパーツ チェーン型 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 153,
    image: "images/products/20261005-4-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261005-5",
    category: "charm",
    size: "22.39mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 十字型 クロス 十字 フルCZ フルジルコニア パCZ 多色 マルチカラー カラー 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造 ジルコニア CZ",
    basePrice: 149,
    image: "images/products/20261005-5-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261005-6",
    category: "charm",
    size: "10.07mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "Findings ファインディングス 金属パーツ 丸型 サークル 丸 ベゼル ベゼル枠 石枠 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 153,
    image: "images/products/20261005-6-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261005-7",
    category: "charm",
    size: "14.49mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 涙滴型 涙滴 ピードロップ CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 121,
    image: "images/products/20261005-7-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261005-8",
    category: "charm",
    size: "17.24mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 丸太型 丸棒 ロッド ひねり ねじれ ひねり模様 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 51,
    image: "images/products/20261005-8-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261005-9",
    category: "charm",
    size: "12.46mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 半円型 セミサークル 半月 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 81,
    image: "images/products/20261005-9-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261005-10",
    category: "charm",
    size: "26.29mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ ライン型 細長 ライン CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 102,
    image: "images/products/20261005-10-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261006-1",
    category: "pierce",
    size: "15.93mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "フープ リング ホープ リング型 輪 ひねり ねじれ ひねり模様 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 119,
    image: "images/products/20261006-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261006-2",
    category: "pierce",
    size: "16.96mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "フープピアス フープ リングピアス 輪ピアス リング型 リング 輪 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 144,
    image: "images/products/20261006-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261006-3",
    category: "pierce",
    size: "17.32mm",
    material: "真鍮鋳造",
    keywords: "フープ リング ホープ リング型 輪 ひねり ねじれ ひねり模様 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 68,
    image: "images/products/20261006-3-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261006-4",
    category: "brooch",
    size: "39.47mm",
    material: "真鍮鋳造",
    keywords: "ブローチ ブローチパーツ 胸飾 蝶型 蝶 バタフライ CZ ジルコニア ダイヤ風 黒 CZブラック 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 1019,
    image: "images/products/20261006-4-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261006-5",
    category: "brooch",
    size: "61.86mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ブローチ ブローチパーツ 胸飾 羽型 羽毛 フェザー フルCZ フルジルコニア パCZ 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造 ジルコニア CZ",
    basePrice: "お問い合わせをお願い致します",
    image: "images/products/20261006-5-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261006-6",
    category: "pierce",
    size: "20.25mm",
    material: "真鍮鋳造",
    keywords: "フープ リング ホープ リング型 輪 ひねり ねじれ ひねり模様 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 246,
    image: "images/products/20261006-6-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261006-7",
    category: "pierce",
    size: "24.85mm",
    material: "真鍮鋳造",
    keywords: "フープ リング ホープ リング型 輪 波線 ウェーブ 波打つ 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 110,
    image: "images/products/20261006-7-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261006-8",
    category: "pierce",
    size: "15.76mm",
    material: "真鍮鋳造",
    keywords: "フープ リング ホープ 涙滴型 涙滴 ピードロップ 鏡面仕上げ 鏡面 磨き 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 106,
    image: "images/products/20261006-8-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261006-9",
    category: "pierce",
    size: "29.42mm",
    material: "真鍮鋳造",
    keywords: "ブローチ ブローチパーツ 胸飾 蝶型 蝶 バタフライ オープン 透かし 穴あき 中空 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 72,
    image: "images/products/20261006-9-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261006-10",
    category: "pierce",
    size: "29.90mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "スタッドピアス スタッド ポストピアス スタッドパーツ 涙滴型 涙滴 ピードロップ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 93,
    image: "images/products/20261006-10-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261006-11",
    category: "pierce",
    size: "13.75mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "スタッドピアス スタッド ポストピアス スタッドパーツ ハート型 ハート ラブ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 76,
    image: "images/products/20261006-11-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261010-1",
    category: "charm",
    size: "14.41mm",
    material: "真鍮鋳造",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 丸型 サークル 丸 CZ ジルコニア ダイヤ風 オープン 透かし 穴あき 中空 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 96,
    image: "images/products/20261010-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261010-2",
    category: "charm",
    size: "23.42mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 半円型 セミサークル 半月 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 123,
    image: "images/products/20261010-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261010-3",
    category: "charm",
    size: "28.46mm",
    material: "真鍮鋳造",
    keywords: "チェーン 鎖 チェーンパーツ チェーン型 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 93,
    image: "images/products/20261010-3-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261010-4",
    category: "charm",
    size: "14.61mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 三角形 トライアングル 三稜 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 53,
    image: "images/products/20261010-4-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261010-5",
    category: "charm",
    size: "27.49mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 正方形 角形 スクエア CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 93,
    image: "images/products/20261010-5-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261010-6",
    category: "charm",
    size: "30.20mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 波線 ウェーブ 波打つ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 110,
    image: "images/products/20261010-6-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261010-7",
    category: "charm",
    size: "20.45mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "吊り下げ 吊り下げパーツ ペンダント 半円型 セミサークル 半月 スクロール 唐草 スクロール模様 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 204,
    image: "images/products/20261010-7-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261010-8",
    category: "charm",
    size: "15.73mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 丸型 サークル 丸 CZ ジルコニア ダイヤ風 フレーム 枠 額縁 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 200,
    image: "images/products/20261010-8-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261010-9",
    category: "charm",
    size: "26.92mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 正方形 角形 スクエア CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 149,
    image: "images/products/20261010-9-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261010-10",
    category: "charm",
    size: "10.09mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 正方形 角形 スクエア CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 96,
    image: "images/products/20261010-10-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261012-1",
    category: "charm",
    size: "21.86mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 正方形 角形 スクエア フレーム 枠 額縁 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 98,
    image: "images/products/20261012-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261012-2",
    category: "charm",
    size: "19.76mm",
    material: "真鍮鋳造",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 正方形 角形 スクエア フレーム 枠 額縁 重ね 二重 重ね合わせ 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 64,
    image: "images/products/20261012-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261012-3",
    category: "charm",
    size: "30.77mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 蝶型 蝶 バタフライ CZ ジルコニア ダイヤ風 石付き 石 ジュエル 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 144,
    image: "images/products/20261012-3-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261012-4",
    category: "charm",
    size: "14.90mm",
    material: "真鍮鋳造",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 丸型 サークル 丸 CZ ジルコニア ダイヤ風 パール パールカラー CZパール ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 178,
    image: "images/products/20261012-4-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261012-5",
    category: "charm",
    size: "11.52mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ピアス用留め具 ピアスバック 蝶番 丸型 サークル 丸 CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 127,
    image: "images/products/20261012-5-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261012-6",
    category: "charm",
    size: "16.85mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 六角形 ヘックス 六角柱 CZ ジルコニア ダイヤ風 フレーム 枠 額縁 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 113,
    image: "images/products/20261012-6-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261012-7",
    category: "charm",
    size: "9.91mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ピアス 耳飾り ポストピアス 涙滴型 涙滴 ピードロップ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 66,
    image: "images/products/20261012-7-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261012-8",
    category: "charm",
    size: "17.52mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 蝶型 蝶 バタフライ CZ ジルコニア ダイヤ風 石付き 石 ジュエル 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 98,
    image: "images/products/20261012-8-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261012-9",
    category: "charm",
    size: "20.05mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "吊り下げ 吊り下げパーツ ペンダント 丸型 サークル 丸 CZ ジルコニア ダイヤ風 ローレット ロープ風 ロープ ひも状 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 89,
    image: "images/products/20261012-9-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261012-10",
    category: "charm",
    size: "36.06mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 正方形 角形 スクエア CZ ジルコニア ダイヤ風 ひねり ねじれ ひねり模様 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 132,
    image: "images/products/20261012-10-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261014-1",
    category: "charm",
    size: "24.34mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ピアス用留め具 ピアスバック 蝶番 涙滴型 涙滴 ピードロップ CZ ジルコニア ダイヤ風 螺子 ネジ スクリュー 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 132,
    image: "images/products/20261014-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261014-2",
    category: "charm",
    size: "11.82mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "スタッド ポスト スタッドパーツ 花型 花 フラワー CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 81,
    image: "images/products/20261014-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261014-3",
    category: "charm",
    size: "86.48mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 涙滴型 涙滴 ピードロップ CZ ジルコニア ダイヤ風 チェーン 鎖 チェーンパーツ 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 722,
    image: "images/products/20261014-3-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261014-4",
    category: "charm",
    size: "23.57mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 三角形 トライアングル 三稜 フレーム 枠 額縁 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 62,
    image: "images/products/20261014-4-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261014-5",
    category: "charm",
    size: "29.37mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 不規則型 不定形 ランダム フルCZ フルジルコニア パCZ フレーム 枠 額縁 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造 ジルコニア CZ",
    basePrice: 238,
    image: "images/products/20261014-5-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261014-6",
    category: "charm",
    size: "11.07mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 星型 スター CZ ジルコニア ダイヤ風 石付き 石 ジュエル 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 64,
    image: "images/products/20261014-6-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261014-7",
    category: "charm",
    size: "22.99mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ピアス 耳飾り ポストピアス 不規則型 不定形 ランダム CZ ジルコニア ダイヤ風 石付き 石 ジュエル 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 96,
    image: "images/products/20261014-7-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261014-8",
    category: "charm",
    size: "11.41mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ピアス用留め具 ピアスバック 蝶番 丸型 サークル 丸 CZ ジルコニア ダイヤ風 石付き 石 ジュエル 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 64,
    image: "images/products/20261014-8-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261015-1",
    category: "charm",
    size: "17.77mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ピアス用留め具 ピアスバック 蝶番 涙滴型 涙滴 ピードロップ CZ ジルコニア ダイヤ風 石付き 石 ジュエル 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 47,
    image: "images/products/20261015-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261015-2",
    category: "charm",
    size: "11.27mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 花型 花 フラワー CZ ジルコニア ダイヤ風 石付き 石 ジュエル 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 55,
    image: "images/products/20261015-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261015-3",
    category: "charm",
    size: "16.84mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 丸型 サークル 丸 CZ ジルコニア ダイヤ風 フレーム 枠 額縁 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 272,
    image: "images/products/20261015-3-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261015-4",
    category: "charm",
    size: "9.77mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ピアス 耳飾り ポストピアス 涙滴型 涙滴 ピードロップ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 59,
    image: "images/products/20261015-4-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261015-5",
    category: "charm",
    size: "13.92mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 正方形 角形 スクエア CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 70,
    image: "images/products/20261015-5-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261015-6",
    category: "charm",
    size: "16.43mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム ハート型 ハート ラブ CZ ジルコニア ダイヤ風 石付き 石 ジュエル 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 93,
    image: "images/products/20261015-6-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261015-7",
    category: "charm",
    size: "23.11mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 正方形 角形 スクエア CZ ジルコニア ダイヤ風 フレーム 枠 額縁 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 127,
    image: "images/products/20261015-7-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261015-8",
    category: "charm",
    size: "15.45mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ピアス用留め具 ピアスバック 蝶番 不規則型 不定形 ランダム CZ ジルコニア ダイヤ風 石付き 石 ジュエル 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 68,
    image: "images/products/20261015-8-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261015-9",
    category: "charm",
    size: "32.80mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 不規則型 不定形 ランダム フルCZ フルジルコニア パCZ スクロール 唐草 スクロール模様 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造 ジルコニア CZ",
    basePrice: 348,
    image: "images/products/20261015-9-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261015-10",
    category: "charm",
    size: "25.64mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 涙滴型 涙滴 ピードロップ CZ ジルコニア ダイヤ風 石付き 石 ジュエル 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 119,
    image: "images/products/20261015-10-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261019-1",
    category: "charm",
    size: "19.36mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ピアス 耳飾り ポストピアス 半円型 セミサークル 半月 CZ ジルコニア ダイヤ風 石付き 石 ジュエル 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 89,
    image: "images/products/20261019-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261019-2",
    category: "charm",
    size: "19.00mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 涙滴型 涙滴 ピードロップ CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 59,
    image: "images/products/20261019-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261019-3",
    category: "charm",
    size: "15.50mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 丸型 サークル 丸 CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 64,
    image: "images/products/20261019-3-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261019-4",
    category: "charm",
    size: "16.82mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 丸型 サークル 丸 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 81,
    image: "images/products/20261019-4-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261019-5",
    category: "charm",
    size: "10.14mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "Findings ファインディングス 金属パーツ 丸型 サークル 丸 石座 石受け マウント CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 47,
    image: "images/products/20261019-5-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261019-6",
    category: "charm",
    size: "13.59mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 涙滴型 涙滴 ピードロップ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 57,
    image: "images/products/20261019-6-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261019-7",
    category: "charm",
    size: "23.56mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "Findings ファインディングス 金属パーツ リング型 リング 輪 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 81,
    image: "images/products/20261019-7-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261029-1-1",
    category: "parts",
    size: "41.34mm",
    material: "ステンレス",
    keywords: "リング 指輪 リングパーツ 丸型 サークル 丸 ローレット ロープ風 ロープ ひも状 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 88,
    image: "images/products/20261029-1-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261029-1-2",
    category: "parts",
    size: "16.36mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 不規則型 不定形 ランダム CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 49,
    image: "images/products/20261029-1-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261029-2-1",
    category: "parts",
    size: "15.18mm",
    material: "ステンレス",
    keywords: "Findings ファインディングス 金属パーツ 涙滴型 涙滴 ピードロップ 鏡面 磨き 光沢 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261029-2-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261029-2-2",
    category: "parts",
    size: "18.84mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 不規則型 不定形 ランダム CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 57,
    image: "images/products/20261029-2-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261029-3-1",
    category: "parts",
    size: "15.21mm",
    material: "ステンレス",
    keywords: "Findings ファインディングス 金属パーツ 三角形 トライアングル 三稜 中空 オープン 穴あき 透かし 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261029-3-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261029-3-2",
    category: "parts",
    size: "9.38mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "Findings ファインディングス 金属パーツ 丸型 サークル 丸 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 38,
    image: "images/products/20261029-3-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261029-4-1",
    category: "parts",
    size: "14.41mm",
    material: "ステンレス",
    keywords: "Findings ファインディングス 金属パーツ 涙滴型 涙滴 ピードロップ つやなし マット仕上げ つや消し 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261029-4-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261029-4-2",
    category: "parts",
    size: "15.14mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "Findings ファインディングス 金属パーツ リング型 リング 輪 スクロール 唐草 スクロール模様 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 66,
    image: "images/products/20261029-4-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261029-5-1",
    category: "parts",
    size: "11.23mm",
    material: "ステンレス",
    keywords: "Findings ファインディングス 金属パーツ 丸型 サークル 丸 波線 ウェーブ 波打つ 穴あき 穴 ホール 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261029-5-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261029-5-2",
    category: "charm",
    size: "17.12mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "Findings ファインディングス 金属パーツ 不規則型 不定形 ランダム 波線 ウェーブ 波打つ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 51,
    image: "images/products/20261029-5-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261029-6-1",
    category: "charm",
    size: "25.26mm",
    material: "ステンレス",
    keywords: "Findings ファインディングス 金属パーツ 正方形 角形 スクエア ハンマー打ち ハンマー仕上げ 叩き目 穴あき 穴 ホール 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 50,
    image: "images/products/20261029-6-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261029-6-2",
    category: "charm",
    size: "21.90mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 涙滴型 涙滴 ピードロップ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 57,
    image: "images/products/20261029-6-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261029-7-1",
    category: "parts",
    size: "20.30mm",
    material: "ステンレス",
    keywords: "Findings ファインディングス 金属パーツ 角丸 丸角 R角 つやなし マット仕上げ つや消し 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261029-7-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261029-7-2",
    category: "charm",
    size: "19.13mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "Findings ファインディングス 金属パーツ 不規則型 不定形 ランダム 波線 ウェーブ 波打つ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 57,
    image: "images/products/20261029-7-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261029-8-2",
    category: "parts",
    size: "14.39mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "Findings ファインディングス 金属パーツ 不規則型 不定形 ランダム CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 49,
    image: "images/products/20261029-8-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261029-9-1",
    category: "parts",
    size: "10.21mm",
    material: "ステンレス",
    keywords: "Findings ファインディングス 金属パーツ 正方形 角形 スクエア ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261029-9-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261029-9-2",
    category: "charm",
    size: "20.96mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 不規則型 不定形 ランダム CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 51,
    image: "images/products/20261029-9-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261029-10-1",
    category: "charm",
    size: "24.26mm",
    material: "ステンレス",
    keywords: "Findings ファインディングス 金属パーツ 楕円型 長円 楕円 ハンマー打ち ハンマー仕上げ 叩き目 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 50,
    image: "images/products/20261029-10-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261029-10-2",
    category: "charm",
    size: "9.39mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "Findings ファインディングス 金属パーツ 丸型 サークル 丸 石座 石受け マウント CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 62,
    image: "images/products/20261029-10-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261029-11-1",
    category: "charm",
    size: "17.30mm",
    material: "ステンレス",
    keywords: "Findings ファインディングス 金属パーツ 楕円型 長円 楕円 波線 ウェーブ 波打つ 穴あき 穴 ホール 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261029-11-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261029-11-2",
    category: "charm",
    size: "22.81mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "Findings ファインディングス 金属パーツ リング型 リング 輪 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 51,
    image: "images/products/20261029-11-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261029-12-1",
    category: "parts",
    size: "13.43mm",
    material: "ステンレス",
    keywords: "Findings ファインディングス 金属パーツ リング型 リング 輪 フルCZ フルジルコニア パCZ 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261029-12-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261029-12-2",
    category: "charm",
    size: "13.66mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "Findings ファインディングス 金属パーツ 十字型 クロス 十字 石座 石受け マウント CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 72,
    image: "images/products/20261029-12-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261031-1",
    category: "charm",
    size: "13.29mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "Findings ファインディングス 金属パーツ 楕円型 長円 楕円 ひねり ねじれ ひねり模様 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 64,
    image: "images/products/20261031-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261031-2",
    category: "charm",
    size: "7.26mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "Findings ファインディングス 金属パーツ ハート型 ハート ラブ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 47,
    image: "images/products/20261031-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261031-3",
    category: "charm",
    size: "14.80mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "Findings ファインディングス 金属パーツ 涙滴型 涙滴 ピードロップ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 62,
    image: "images/products/20261031-3-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261031-4",
    category: "charm",
    size: "13.45mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ドロップピアス ドロップ 垂れピアス ダングリング 涙滴型 涙滴 ピードロップ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 55,
    image: "images/products/20261031-4-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261031-5",
    category: "charm",
    size: "0.41mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "スタッドピアス スタッド ポストピアス スタッドパーツ 蝶型 蝶 バタフライ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 68,
    image: "images/products/20261031-5-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261031-6",
    category: "charm",
    size: "17.58mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 星型 スター CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 89,
    image: "images/products/20261031-6-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261031-7",
    category: "charm",
    size: "23.21mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ドロップピアス ドロップ 垂れピアス ダングリング 涙滴型 涙滴 ピードロップ ひねり ねじれ ひねり模様 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 140,
    image: "images/products/20261031-7-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261031-8",
    category: "charm",
    size: "13.56mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 丸型 サークル 丸 ベゼル ベゼル枠 石枠 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 68,
    image: "images/products/20261031-8-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261031-9",
    category: "charm",
    size: "10.74mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 長方形 長方 レクタル ベゼル ベゼル枠 石枠 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 72,
    image: "images/products/20261031-9-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261031-10",
    category: "charm",
    size: "19.26mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ピアス 耳飾り ポストピアス 丸型 サークル 丸 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 83,
    image: "images/products/20261031-10-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261031-11",
    category: "charm",
    size: "20.05mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ピアス 耳飾り ポストピアス 半円型 セミサークル 半月 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 57,
    image: "images/products/20261031-11-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261031-12",
    category: "charm",
    size: "9.12mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 波線型 ウェーブ 波打つ 石座 石受け マウント CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 83,
    image: "images/products/20261031-12-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261031-13",
    category: "charm",
    size: "12.30mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 涙滴型 涙滴 ピードロップ 石座 石受け マウント CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 51,
    image: "images/products/20261031-13-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261102-1",
    category: "parts",
    size: "26.72mm",
    material: "ステンレス",
    keywords: "Findings ファインディングス 金属パーツ 楕円型 長円 楕円 打痕 打刻 刻印 フレーム 枠 額縁 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 61,
    image: "images/products/20261102-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261102-2",
    category: "parts",
    size: "19.41mm",
    material: "ステンレス",
    keywords: "接続リング コネクター 丸カン 引き輪 楕円型 長円 楕円 薄型 薄 薄手 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261102-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261102-3",
    category: "parts",
    size: "17.82mm",
    material: "ステンレス",
    keywords: "接続リング コネクター 丸カン 引き輪 楕円型 長円 楕円 フレーム 枠 額縁 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261102-3-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261102-4",
    category: "parts",
    size: "27.79mm",
    material: "ステンレス",
    keywords: "接続リング コネクター 丸カン 引き輪 不規則型 不定形 ランダム 鏡面仕上げ 鏡面 磨き 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 61,
    image: "images/products/20261102-4-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261102-5",
    category: "parts",
    size: "15.28mm",
    material: "ステンレス",
    keywords: "接続リング コネクター 丸カン 引き輪 涙滴型 涙滴 ピードロップ 薄型 薄 薄手 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261102-5-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261102-6",
    category: "parts",
    size: "26.28mm",
    material: "ステンレス",
    keywords: "接続リング コネクター 丸カン 引き輪 楕円型 長円 楕円 波線 ウェーブ 波打つ 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 61,
    image: "images/products/20261102-6-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261102-7",
    category: "parts",
    size: "15.43mm",
    material: "ステンレス",
    keywords: "接続リング コネクター 丸カン 引き輪 丸型 サークル 丸 オープン 透かし 穴あき 中空 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261102-7-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261102-8",
    category: "charm",
    size: "27.83mm",
    material: "ステンレス",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 長方形 長方 レクタル フレーム 枠 額縁 穴あき 穴 ホール 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 61,
    image: "images/products/20261102-8-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261102-9",
    category: "parts",
    size: "16.06mm",
    material: "ステンレス",
    keywords: "接続リング コネクター 丸カン 引き輪 角丸 丸角 R角 鏡面仕上げ 鏡面 磨き 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261102-9-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261102-10",
    category: "parts",
    size: "21.84mm",
    material: "ステンレス",
    keywords: "接続リング コネクター 丸カン 引き輪 楕円型 長円 楕円 ひねり ねじれ ひねり模様 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 50,
    image: "images/products/20261102-10-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261102-11",
    category: "parts",
    size: "30.09mm",
    material: "ステンレス",
    keywords: "接続リング コネクター 丸カン 引き輪 楕円型 長円 楕円 鏡面仕上げ 鏡面 磨き 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 61,
    image: "images/products/20261102-11-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261102-12",
    category: "parts",
    size: "22.50mm",
    material: "ステンレス",
    keywords: "接続リング コネクター 丸カン 引き輪 楕円型 長円 楕円 薄型 薄 薄手 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 50,
    image: "images/products/20261102-12-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261104-1",
    category: "charm",
    size: "13.82mm",
    material: "真鍮鋳造",
    keywords: "フープ リング ホープ 丸型 サークル 丸 ピアス用留め具 ピアスバック 蝶番 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 55,
    image: "images/products/20261104-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261104-2",
    category: "charm",
    size: "22.69mm",
    material: "真鍮鋳造",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 円形 サークル 丸 文字入り 文字 刻印 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 85,
    image: "images/products/20261104-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261104-3",
    category: "charm",
    size: "14.94mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 涙滴型 涙滴 ピードロップ 石座 石受け マウント CZ ジルコニア ダイヤ風 多色 マルチカラー カラー 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 117,
    image: "images/products/20261104-3-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261104-4",
    category: "charm",
    size: "13.04mm",
    material: "真鍮鋳造",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 正方形 角形 スクエア 石座 石受け マウント CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 68,
    image: "images/products/20261104-4-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261104-5",
    category: "charm",
    size: "20.24mm",
    material: "真鍮鋳造",
    keywords: "ピアス 耳飾り ポストピアス 波線型 ウェーブ 波打つ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 64,
    image: "images/products/20261104-5-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261104-6",
    category: "charm",
    size: "25.60mm",
    material: "真鍮鋳造",
    keywords: "ピアス 耳飾り ポストピアス 波線型 ウェーブ 波打つ ひねり ねじれ ひねり模様 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 51,
    image: "images/products/20261104-6-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261104-7",
    category: "charm",
    size: "23.26mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 不規則型 不定形 ランダム スクロール 唐草 スクロール模様 中空 オープン 穴あき 透かし CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 115,
    image: "images/products/20261104-7-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261104-8",
    category: "charm",
    size: "9.06mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 不規則型 不定形 ランダム CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 42,
    image: "images/products/20261104-8-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261104-9",
    category: "charm",
    size: "11.61mm",
    material: "真鍮鋳造",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 丸型 サークル 丸 CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 51,
    image: "images/products/20261104-9-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261104-10",
    category: "charm",
    size: "11.15mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ ライン型 細長 ライン CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 72,
    image: "images/products/20261104-10-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261104-11",
    category: "charm",
    size: "12.09mm",
    material: "真鍮鋳造",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 蝶型 蝶 バタフライ ひねり ねじれ ひねり模様 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 51,
    image: "images/products/20261104-11-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261104-12",
    category: "charm",
    size: "15.23mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 十字型 クロス 十字 CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 70,
    image: "images/products/20261104-12-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-1-1",
    category: "bangle",
    size: "60mm",
    material: "亜鉛合金",
    keywords: "楕円型 長円 楕円 アジャスタブル アジャスター 長さ調整 伸縮 螺子 ネジ スクリュー 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 300,
    image: "images/products/20261105-1-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-1-2",
    category: "bangle",
    size: "60mm",
    material: "亜鉛合金",
    keywords: "丸型 サークル 丸 アジャスタブル アジャスター 長さ調整 伸縮 薄型 薄 薄手 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 300,
    image: "images/products/20261105-1-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-2-1",
    category: "bangle",
    size: "60mm",
    material: "亜鉛合金",
    keywords: "丸型 サークル 丸 厚型 厚 厚手 アジャスタブル アジャスター 長さ調整 伸縮 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 337.5,
    image: "images/products/20261105-2-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-2-2",
    category: "bangle",
    size: "60mm",
    material: "亜鉛合金",
    keywords: "楕円型 長円 楕円 アジャスタブル アジャスター 長さ調整 伸縮 螺子 ネジ スクリュー 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 337.5,
    image: "images/products/20261105-2-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-3-1",
    category: "bangle",
    size: "60mm",
    material: "亜鉛合金",
    keywords: "不規則型 不定形 ランダム アジャスタブル アジャスター 長さ調整 伸縮 螺子 ネジ スクリュー 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 300,
    image: "images/products/20261105-3-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-3-2",
    category: "bangle",
    size: "55mm",
    material: "亜鉛合金",
    keywords: "正方形 角形 スクエア アジャスタブル アジャスター 長さ調整 伸縮 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 300,
    image: "images/products/20261105-3-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-4-1",
    category: "bangle",
    size: "60mm",
    material: "亜鉛合金",
    keywords: "丸型 サークル 丸 穴あき 穴 ホール アジャスタブル アジャスター 長さ調整 伸縮 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 337.5,
    image: "images/products/20261105-4-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-4-2",
    category: "bangle",
    size: "60mm",
    material: "亜鉛合金",
    keywords: "丸型 サークル 丸 中空 オープン 穴あき 透かし アジャスタブル アジャスター 長さ調整 伸縮 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 375,
    image: "images/products/20261105-4-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-5",
    category: "bangle",
    size: "65mm",
    material: "亜鉛合金",
    keywords: "丸型 サークル 丸 波線 ウェーブ 波打つ アジャスタブル アジャスター 長さ調整 伸縮 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 300,
    image: "images/products/20261105-5-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-6",
    category: "bangle",
    size: "60mm",
    material: "亜鉛合金",
    keywords: "楕円型 長円 楕円 アジャスタブル アジャスター 長さ調整 伸縮 螺子 ネジ スクリュー 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 300,
    image: "images/products/20261105-6-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-7",
    category: "bangle",
    size: "60mm",
    material: "亜鉛合金、ジルコニア",
    keywords: "不規則型 不定形 ランダム 穴あき 穴 ホール アジャスタブル アジャスター 長さ調整 伸縮 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ジルコニア CZ",
    basePrice: 375,
    image: "images/products/20261105-7-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-8",
    category: "bangle",
    size: "60mm",
    material: "亜鉛合金",
    keywords: "丸型 サークル 丸 螺子 ネジ スクリュー アジャスタブル アジャスター 長さ調整 伸縮 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 300,
    image: "images/products/20261105-8-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-9",
    category: "bangle",
    size: "60mm",
    material: "亜鉛合金",
    keywords: "不規則型 不定形 ランダム スクロール 唐草 スクロール模様 アジャスタブル アジャスター 長さ調整 伸縮 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 337.5,
    image: "images/products/20261105-9-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-10",
    category: "bangle",
    size: "60mm",
    material: "亜鉛合金",
    keywords: "丸型 サークル 丸 直線型 直線 ストレート フレーム 枠 額縁 アジャスタブル アジャスター 長さ調整 伸縮 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 300,
    image: "images/products/20261105-10-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-11",
    category: "bangle",
    size: "55mm",
    material: "亜鉛合金",
    keywords: "丸型 サークル 丸 花線 華線 花柄 アジャスタブル アジャスター 長さ調整 伸縮 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 300,
    image: "images/products/20261105-11-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-12",
    category: "bangle",
    size: "55mm",
    material: "亜鉛合金",
    keywords: "チェーン型 チェーン 鎖 アジャスタブル アジャスター 長さ調整 伸縮 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 300,
    image: "images/products/20261105-12-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-13",
    category: "bangle",
    size: "55mm",
    material: "亜鉛合金",
    keywords: "丸型 サークル 丸 中空 オープン 穴あき 透かし アジャスタブル アジャスター 長さ調整 伸縮 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 375,
    image: "images/products/20261105-13-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-14",
    category: "bangle",
    size: "55mm",
    material: "亜鉛合金",
    keywords: "丸型 サークル 丸 螺子 ネジ スクリュー アジャスタブル アジャスター 長さ調整 伸縮 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 375,
    image: "images/products/20261105-14-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-15",
    category: "bangle",
    size: "55mm",
    material: "亜鉛合金",
    keywords: "正方形 角形 スクエア 波線 ウェーブ 波打つ アジャスタブル アジャスター 長さ調整 伸縮 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 300,
    image: "images/products/20261105-15-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-16",
    category: "bangle",
    size: "60mm",
    material: "亜鉛合金",
    keywords: "丸型 サークル 丸 メッシュ 網目 メッシュ状 アジャスタブル アジャスター 長さ調整 伸縮 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 375,
    image: "images/products/20261105-16-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-17",
    category: "bangle",
    size: "55mm",
    material: "亜鉛合金",
    keywords: "不規則型 不定形 ランダム 波線 ウェーブ 波打つ アジャスタブル アジャスター 長さ調整 伸縮 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 300,
    image: "images/products/20261105-17-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-18",
    category: "bangle",
    size: "60mm",
    material: "亜鉛合金",
    keywords: "丸型 サークル 丸 厚型 厚 厚手 アジャスタブル アジャスター 長さ調整 伸縮 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 300,
    image: "images/products/20261105-18-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-19",
    category: "bangle",
    size: "60mm",
    material: "亜鉛合金",
    keywords: "丸型 サークル 丸 中空 オープン 穴あき 透かし アジャスタブル アジャスター 長さ調整 伸縮 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 375,
    image: "images/products/20261105-19-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-20",
    category: "bangle",
    size: "55mm",
    material: "亜鉛合金",
    keywords: "楕円型 長円 楕円 波線 ウェーブ 波打つ アジャスタブル アジャスター 長さ調整 伸縮 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 300,
    image: "images/products/20261105-20-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-21",
    category: "bangle",
    size: "55mm",
    material: "亜鉛合金",
    keywords: "不規則型 不定形 ランダム 螺子 ネジ スクリュー アジャスタブル アジャスター 長さ調整 伸縮 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 375,
    image: "images/products/20261105-21-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-23",
    category: "bangle",
    size: "55mm",
    material: "亜鉛合金",
    keywords: "丸型 サークル 丸 中空 オープン 穴あき 透かし アジャスタブル アジャスター 長さ調整 伸縮 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 450,
    image: "images/products/20261105-23-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-24",
    category: "bangle",
    size: "60mm",
    material: "亜鉛合金",
    keywords: "丸型 サークル 丸 ひねり ねじれ ひねり模様 留め具 クラスプ 固定金具 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 375,
    image: "images/products/20261105-24-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-25",
    category: "bangle",
    size: "55mm",
    material: "亜鉛合金",
    keywords: "楕円型 長円 楕円 螺子 ネジ スクリュー 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 300,
    image: "images/products/20261105-25-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-26",
    category: "bangle",
    size: "65mm",
    material: "亜鉛合金、ジルコニア",
    keywords: "楕円型 長円 楕円 メッシュ 網目 メッシュ状 穴あき 穴 ホール 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク ジルコニア CZ",
    basePrice: 450,
    image: "images/products/20261105-26-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-27",
    category: "bangle",
    size: "50mm",
    material: "亜鉛合金",
    keywords: "丸型 サークル 丸 花線 華線 花柄 螺子 ネジ スクリュー 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 375,
    image: "images/products/20261105-27-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-28",
    category: "bangle",
    size: "55mm",
    material: "亜鉛合金",
    keywords: "不規則型 不定形 ランダム 波線 ウェーブ 波打つ 螺子 ネジ スクリュー 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 375,
    image: "images/products/20261105-28-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-29",
    category: "bangle",
    size: "60mm",
    material: "亜鉛合金",
    keywords: "角丸 丸角 R角 厚型 厚 厚手 螺子 ネジ スクリュー 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 450,
    image: "images/products/20261105-29-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261105-30",
    category: "bangle",
    size: "55mm",
    material: "亜鉛合金",
    keywords: "丸型 サークル 丸 スクロール 唐草 スクロール模様 オープン 透かし 穴あき 中空 素地 メタル前の生地状態で メッキ加工可 地金 亜鉛合金 ジンク",
    basePrice: 450,
    image: "images/products/20261105-30-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261106-1",
    category: "parts",
    size: "19.81mm",
    material: "ステンレス",
    keywords: "接続リング コネクター 丸カン 引き輪 楕円型 長円 楕円 不規則型 不定形 ランダム 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261106-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261106-2",
    category: "parts",
    size: "22.51mm",
    material: "ステンレス",
    keywords: "接続リング コネクター 丸カン 引き輪 長方形 長方 レクタル ブレード 刃 ナイフ 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 50,
    image: "images/products/20261106-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261106-3",
    category: "parts",
    size: "21.46mm",
    material: "ステンレス",
    keywords: "接続リング コネクター 丸カン 引き輪 長方形 長方 レクタル ローレット ロープ風 ロープ ひも状 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 50,
    image: "images/products/20261106-3-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261106-4",
    category: "parts",
    size: "21.99mm",
    material: "ステンレス",
    keywords: "接続リング コネクター 丸カン 引き輪 長方形 長方 レクタル 打痕 打刻 刻印 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 50,
    image: "images/products/20261106-4-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261106-5",
    category: "parts",
    size: "16.07mm",
    material: "ステンレス",
    keywords: "接続リング コネクター 丸カン 引き輪 ドーナツ型 ドーナツ 中空リング 薄型 薄 薄手 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261106-5-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261106-6",
    category: "parts",
    size: "14.84mm",
    material: "ステンレス",
    keywords: "接続リング コネクター 丸カン 引き輪 丸型 サークル 丸 丸太型 丸棒 ロッド 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261106-6-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261106-7",
    category: "parts",
    size: "22.31mm",
    material: "ステンレス",
    keywords: "接続リング コネクター 丸カン 引き輪 丸型 サークル 丸 ローレット ロープ風 ロープ ひも状 ひねり ねじれ ひねり模様 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 50,
    image: "images/products/20261106-7-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261106-8",
    category: "parts",
    size: "14.75mm",
    material: "ステンレス",
    keywords: "接続リング コネクター 丸カン 引き輪 丸型 サークル 丸 ローレット ロープ風 ロープ ひも状 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261106-8-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261106-9",
    category: "parts",
    size: "15.77mm",
    material: "ステンレス",
    keywords: "接続リング コネクター 丸カン 引き輪 丸型 サークル 丸 ハンマー打ち ハンマー仕上げ 叩き目 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261106-9-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261106-10",
    category: "parts",
    size: "18.17mm",
    material: "ステンレス",
    keywords: "接続リング コネクター 丸カン 引き輪 楕円型 長円 楕円 波線 ウェーブ 波打つ 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261106-10-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261106-11",
    category: "parts",
    size: "18.71mm",
    material: "ステンレス",
    keywords: "接続リング コネクター 丸カン 引き輪 丸型 サークル 丸 ローレット ロープ風 ロープ ひも状 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261106-11-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261106-12",
    category: "parts",
    size: "18.41mm",
    material: "ステンレス",
    keywords: "接続リング コネクター 丸カン 引き輪 丸型 サークル 丸 ボール 球 丸玉 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261106-12-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261109-1",
    category: "charm",
    size: "10.79mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 正方形 角形 スクエア CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 159,
    image: "images/products/20261109-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261109-2",
    category: "charm",
    size: "15.13mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 涙滴型 涙滴 ピードロップ CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 72,
    image: "images/products/20261109-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261109-3",
    category: "charm",
    size: "11.49mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 扇型 扇 ファン フルCZ フルジルコニア パCZ 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造 ジルコニア CZ",
    basePrice: 187,
    image: "images/products/20261109-3-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261109-4",
    category: "charm",
    size: "9.69mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 花型 花 フラワー CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 59,
    image: "images/products/20261109-4-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261109-5",
    category: "charm",
    size: "32.02mm",
    material: "真鍮鋳造",
    keywords: "チェーン 鎖 チェーンパーツ チェーン型 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 140,
    image: "images/products/20261109-5-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261109-6",
    category: "charm",
    size: "19.18mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 不規則型 不定形 ランダム CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 76,
    image: "images/products/20261109-6-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261109-7",
    category: "charm",
    size: "14.05mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "留め具 クラスプ 固定金具 長方形 長方 レクタル CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 64,
    image: "images/products/20261109-7-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261109-8",
    category: "charm",
    size: "21.99mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 三つ巴 三つ葉 巴 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 93,
    image: "images/products/20261109-8-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261109-9",
    category: "charm",
    size: "13.23mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント ハート型 ハート ラブ CZ ジルコニア ダイヤ風 ベゼル ベゼル枠 石枠 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 72,
    image: "images/products/20261109-9-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261109-10",
    category: "charm",
    size: "14.81mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "接続パーツ コネクター 接続金具 ジョイントパーツ 三角形 トライアングル 三稜 CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 55,
    image: "images/products/20261109-10-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261109-11",
    category: "charm",
    size: "10.39mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 正方形 角形 スクエア CZ ジルコニア ダイヤ風 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 38,
    image: "images/products/20261109-11-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261109-12",
    category: "charm",
    size: "19.00mm",
    material: "真鍮鋳造、ジルコニア",
    keywords: "ピアス 耳飾り ポストピアス 涙滴型 涙滴 ピードロップ CZ ジルコニア ダイヤ風 石座 石受け マウント 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 76,
    image: "images/products/20261109-12-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261109-13",
    category: "charm",
    size: "20.93mm",
    material: "真鍮鋳造",
    keywords: "リング 指輪 リングパーツ 丸型 サークル 丸 ひねり ねじれ ひねり模様 ローレット ロープ風 ロープ ひも状 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 51,
    image: "images/products/20261109-13-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261109-14",
    category: "charm",
    size: "15.48mm",
    material: "真鍮鋳造",
    keywords: "ピアス用留め具 ピアスバック 蝶番 丸型 サークル 丸 爪型 爪 爪先 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 76,
    image: "images/products/20261109-14-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261109-15",
    category: "charm",
    size: "27.58mm",
    material: "真鍮鋳造",
    keywords: "ペンダント ペンダントパーツ 吊り下げペンダント 丸型 サークル 丸 打痕 打刻 刻印 文字入り 文字 素地 メタル前の生地状態で メッキ加工可 地金 真鍮 ブラス 真鍮鋳造",
    basePrice: 102,
    image: "images/products/20261109-15-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261111-1",
    category: "charm",
    size: "22.14mm",
    material: "ステンレス",
    keywords: "チェーン 鎖 チェーンパーツ 楕円型 長円 楕円 ローレット ロープ風 ロープ ひも状 ひねり ねじれ ひねり模様 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 50,
    image: "images/products/20261111-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261111-2",
    category: "parts",
    size: "25.06mm",
    material: "ステンレス",
    keywords: "Findings ファインディングス 金属パーツ 楕円型 長円 楕円 フレーム 枠 額縁 薄型 薄 薄手 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 50,
    image: "images/products/20261111-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261111-3",
    category: "charm",
    size: "23.72mm",
    material: "ステンレス",
    keywords: "接続リング コネクター 丸カン 引き輪 リング型 リング 輪 波線 ウェーブ 波打つ 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 50,
    image: "images/products/20261111-3-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261111-4",
    category: "parts",
    size: "13.78mm",
    material: "ステンレス",
    keywords: "接続リング コネクター 丸カン 引き輪 角丸 丸角 R角 厚型 厚 厚手 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261111-4-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261111-5",
    category: "charm",
    size: "21.08mm",
    material: "ステンレス",
    keywords: "Findings ファインディングス 金属パーツ 丸型 サークル 丸 打痕 打刻 刻印 フレーム 枠 額縁 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 50,
    image: "images/products/20261111-5-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261111-6",
    category: "charm",
    size: "18.12mm",
    material: "ステンレス",
    keywords: "Findings ファインディングス 金属パーツ 丸型 サークル 丸 ハート型 ハート ラブ 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261111-6-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261111-7",
    category: "charm",
    size: "18.78mm",
    material: "ステンレス",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 丸型 サークル 丸 ハート型 ハート ラブ 波線 ウェーブ 波打つ 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261111-7-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261111-8",
    category: "charm",
    size: "18.92mm",
    material: "ステンレス",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 丸型 サークル 丸 波線 ウェーブ 波打つ 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261111-8-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261111-9",
    category: "parts",
    size: "15.24mm",
    material: "ステンレス",
    keywords: "Findings ファインディングス 金属パーツ 丸型 サークル 丸 ローレット ロープ風 ロープ ひも状 フレーム 枠 額縁 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261111-9-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261111-10",
    category: "charm",
    size: "12.24mm",
    material: "ステンレス",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 丸型 サークル 丸 花型 花 フラワー 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261111-10-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261111-11",
    category: "charm",
    size: "17.47mm",
    material: "ステンレス",
    keywords: "Findings ファインディングス 金属パーツ 丸型 サークル 丸 波線 ウェーブ 波打つ ボール 球 丸玉 穴あき 穴 ホール 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261111-11-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261111-12",
    category: "charm",
    size: "15.39mm",
    material: "ステンレス",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 丸型 サークル 丸 スクロール 唐草 スクロール模様 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261111-12-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261113-1",
    category: "parts",
    size: "16.35mm",
    material: "ステンレス",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 丸型 サークル 丸 星型 スター スクロール 唐草 スクロール模様 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261113-1-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261113-2",
    category: "charm",
    size: "19.09mm",
    material: "ステンレス",
    keywords: "Findings ファインディングス 金属パーツ ドーナツ型 ドーナツ 中空リング 波線 ウェーブ 波打つ 穴あき 穴 ホール 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261113-2-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261113-3",
    category: "charm",
    size: "15.31mm",
    material: "ステンレス",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 丸型 サークル 丸 蝶型 蝶 バタフライ 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261113-3-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261113-4",
    category: "charm",
    size: "17.92mm",
    material: "ステンレス",
    keywords: "Findings ファインディングス 金属パーツ ドーナツ型 ドーナツ 中空リング 波線 ウェーブ 波打つ ボール 球 丸玉 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261113-4-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261113-5",
    category: "charm",
    size: "15.29mm",
    material: "ステンレス",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 丸型 サークル 丸 蝶型 蝶 バタフライ 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261113-5-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261113-6",
    category: "charm",
    size: "22.54mm",
    material: "ステンレス",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 丸型 サークル 丸 花線 華線 花柄 縁取り 縁 エッジ 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 50,
    image: "images/products/20261113-6-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261113-7",
    category: "charm",
    size: "15.26mm",
    material: "ステンレス",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 丸型 サークル 丸 花線 華線 花柄 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261113-7-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261113-8",
    category: "parts",
    size: "20.18mm",
    material: "ステンレス",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 丸型 サークル 丸 星型 スター 縁取り 縁 エッジ 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261113-8-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261113-9",
    category: "charm",
    size: "15.33mm",
    material: "ステンレス",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 八角形 オクト 八角柱 蝶型 蝶 バタフライ 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 38,
    image: "images/products/20261113-9-1.jpg",
    image2: "images/products/notice.jpg"
  },
  {
    code: "20261113-10",
    category: "charm",
    size: "23.24mm",
    material: "ステンレス",
    keywords: "チャーム チャームパーツ 吊りチャーム 付けチャーム 楕円型 長円 楕円 波線 ウェーブ 波打つ 文字入り 文字 刻印 素地 メタル前の生地状態で メッキ加工可 地金 ステンレス スチール",
    basePrice: 50,
    image: "images/products/20261113-10-1.jpg",
    image2: "images/products/notice.jpg"
  }
];
