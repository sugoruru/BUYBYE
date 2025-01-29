import ItemCard from "@/components/itemCard";
import disasters from "@/data/disasters";
import merchandise from "@/data/merchandise";

export default function Home() {
  return (
    <div className="mx-4 mt-5">
      {disasters.map((disaster, index) => {
        return (
          <div key={`home_disasters_${index}`} className="mt-4">
            <h1 className="text-2xl font-bold text-gray-800 border-b-4 border-blue-950">
              {disaster.name}({disaster.date})
            </h1>
            {/* 横スクロール */}
            <div className="flex overflow-x-scroll scroller">
              {merchandise
                .filter((item) => item.disaster === disaster.id)
                .map((item, index) => {
                  return <ItemCard key={`home_merchandise_${index}`} image={item.image} name={item.name} price={item.price} id={item.id}></ItemCard>;
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
