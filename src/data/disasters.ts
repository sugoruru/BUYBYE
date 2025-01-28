// DBから取得.
/*
型データ
{
id: number;          // 災害ID
name: string;        // 災害名
description: string; // 災害説明
location: number;    // 災害発生場所ID(県名)
category: number;    // 災害カテゴリID
date: string;        // 災害発生日
lat: number;         // 緯度
lng: number;         // 経度
}
*/
//「https://www.7mate.jp/saigai/」より引用.
const disasters = [
  {
    id: 4,
    name: "能登半島地震",
    description: "日本の石川県能登半島にある鳳珠郡穴水町の北東42 kmを震央として発生し、観測された最大震度は、石川県輪島市門前町走出と羽咋郡志賀町香能で震度7を観測した。",
    location: 4,
    category: 1,
    date: "2024-01-01",
    lat: 37.264,
    lng: 136.842
  },
  {
    id: 3,
    name: "福島県沖地震",
    description: "福島県沖の深さ57kmを震源として、M7.4の地震が発生し、宮城県登米市・蔵王町と福島県相馬市・南相馬市・国見町で最大震度6強を観測した。",
    location: 2,
    category: 1,
    date: "2022-03-16",
    lat: 37.418,
    lng: 141.373
  },
  {
    id: 2,
    name: "伊豆山土砂災害",
    description: "静岡県熱海市伊豆山地区の逢初川で発生した大規模な土砂災害。住宅131棟が被害を受け、小規模なものも含めて10回以上の土石流が繰り返し発生した。",
    location: 4,
    category: 6,
    date: "2021-07-03",
    lat: 34.92,
    lng: 138.598
  },
  {
    id: 1,
    name: "福島県沖地震",
    description: "東北地方沖を震源とする地震で震度6弱以上を観測した。2011年3月11日に発生した東北地方太平洋沖地震の余震であるとされている",
    location: 2,
    category: 1,
    date: "2021-02-13",
    lat: 37.418,
    lng: 141.373
  }
];

export default disasters;