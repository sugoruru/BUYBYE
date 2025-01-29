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
    name: "輪島塗1",
    category: "輪島塗",
    region: "石川県輪島市",
    description: "商品説明がここに入ります。",
    price: 5000,
    disaster: 3,
    image: "/demo.png"
  },
  {
    id: 2,
    name: "輪島塗2",
    category: "輪島塗",
    region: "石川県輪島市",
    description: "商品説明がここに入ります。",
    price: 6000,
    disaster: 3,
    image: "/demo.png"
  },
  {
    id: 3,
    name: "輪島塗3",
    category: "輪島塗",
    region: "石川県輪島市",
    description: "商品説明がここに入ります。",
    price: 6000,
    disaster: 3,
    image: "/demo.png"
  },
  {
    id: 4,
    name: "会津塗1",
    category: "会津塗",
    region: "福島県会津若松市",
    description: "商品説明がここに入ります。",
    price: 6000,
    disaster: 2,
    image: "/demo.png"
  }
]

export default merchandise;