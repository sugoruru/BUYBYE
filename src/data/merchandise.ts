// DBから取得.
/*
型データ
{
id: number;          // 商品ID
name: string;        // 商品名
category: string;    // 商品カテゴリ
region: string;        // 商品の地域
description: string; // 商品説明
price: number;       // 商品価格
disaster: number;    // 商品関連災害ID
image: string;       // 商品画像
}
*/
const merchandise = [
  {
    id: 1,
    name: "寄木細工",
    category: "小物入れ",
    region: "静岡県伊豆市",
    description: "異なる色の木材を組み合わせ幾何学模様を作る小物入れ",
    price: 1200,
    disaster: 1,
    image: "/izu1.png"
  },
  {
    id: 2,
    name: "昆布",
    category: "食品",
    region: "静岡県伊豆市",
    description: "海の近い伊豆でとれた名産の昆布",
    price: 850,
    disaster: 1,
    image: "/izu2.png"
  },
  {
    id: 3,
    name: "昆布",
    category: "食品",
    region: "静岡県伊豆市",
    description: "海の近い伊豆でとれた名産の昆布",
    price: 600,
    disaster: 1,
    image: "/izu3.png"
  },
  {
    id: 4,
    name: "茶葉",
    category: "お茶",
    region: "静岡県静岡市",
    description: "温暖な気候と肥沃な土壌に恵まれ、深い味わいと豊かな香りが特徴の茶葉",
    price: 600,
    disaster: 1,
    image: "/izu4.png"
  },
  {
    id: 5,
    name: "輪島塗",
    category: "食器",
    region: "石川県輪島市",
    description: "日本を代表する漆器の一つで、非常に耐久性が高く、美しい仕上がりが特徴の伝統工芸品",
    price: 500,
    disaster: 3,
    image: "/noto1.png"
  },
  {
    id: 6,
    name: "輪島そうめん",
    category: "食品",
    region: "石川県輪島市",
    description: "コシが強く滑らかな舌触りとすっきりとしたのどごしが特徴のそうめん",
    price: 500,
    disaster: 3,
    image: "/noto2.png"
  },
  {
    id: 7,
    name: "いしり",
    category: "調味料",
    region: "石川県輪島市",
    description: "魚の発酵によって得られる豊かな独特のコクと深みのある醤油",
    price: 300,
    disaster: 3,
    image: "/noto3.png"
  },
  {
    id: 8,
    name: "七尾ろうそく",
    category: "工芸品",
    region: "石川県輪島市",
    description: "ススが出にくく、炎が大きくて風に強く、消えにくいのが特徴です。",
    price: 100,
    disaster: 3,
    image: "/noto4.png"
  },
  {
    id: 9,
    name: "赤ベコ",
    category: "工芸品",
    region: "福島県会津若松市",
    description: "無病息災のお守りとして親しまれる鮮やかな赤色と黒色で描かれた置物",
    price: 700,
    disaster: 2,
    image: "/huku1.png"
  },
  {
    id: 10,
    name: "純米吟醸 （廣戸川）",
    category: "飲料",
    region: "福島県会津若松市",
    description: "キレのある辛口とふくよかな旨味のバランスが良い地酒",
    price: 800,
    disaster: 2,
    image: "/huku2.png"
  },
  {
    id: 11,
    name: "あさか舞（コシヒカリ）",
    category: "食品",
    region: "福島県郡山市",
    description: "しっかりした甘みと程よい粘りが特徴の米",
    price: 3000,
    disaster: 2,
    image: "/huku3.png"
  },
  {
    id: 12,
    name: "喜多方ラーメン",
    category: "食品",
    region: "福島県喜多方市",
    description: "モチモチとした弾力のある麺の喜多方ラーメンが10分でできるラーメンセット",
    price: 300,
    disaster: 2,
    image: "/huku4.png"
  },
]

export default merchandise;