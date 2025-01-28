import ItemCard from "@/components/itemCard";
import bought from "@/data/bought";
import merchandise from "@/data/merchandise";

export default function Page() {
  const items = [];
  for (const thing of bought) {
    const item = merchandise.find((item) => item.id === thing.id);
    if (item) items.push(item);
  }
  return (
    <div className="mx-4 mt-5">
      <h1 className="text-2xl block font-bold text-center">購入履歴</h1>
      <div className="flex flex-wrap justify-center">
        {items.map((item, index) => {
          return <ItemCard key={`bought_${index}`} image={item.image} name={item.name} price={item.price}></ItemCard>;
        })}
      </div>
    </div>
  );
}
