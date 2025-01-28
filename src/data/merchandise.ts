// DBから取得.
/*
型データ
{
id: number;          // 商品ID
name: string;        // 商品名
description: string; // 商品説明
price: number;       // 商品価格
disaster: number;    // 商品関連災害ID
image: string;       // 商品画像
}
*/
const merchandise = [
  {
    id: 1,
    name: "輪島塗",
    description: "商品説明。",
    price: 5000,
    disaster: 4,
    image: "/demo.png"
  },
  {
    id: 2,
    name: "輪島塗",
    description: "商品説明。",
    price: 6000,
    disaster: 4,
    image: "/demo.png"
  },
  {
    id: 3,
    name: "輪島塗",
    description: "商品説明。",
    price: 6000,
    disaster: 4,
    image: "/demo.png"
  }
]

export default merchandise;