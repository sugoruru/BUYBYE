import ItemCard from "@/components/itemCard";
import likes from "@/data/likes";
import merchandise from "@/data/merchandise";

export default function Page() {
  const items = [];
  for (const like of likes) {
    const item = merchandise.find((item) => item.id === like.id);
    if (item) items.push(item);
  }
  return (
    <div className="mx-4 mt-5">
      <h1 className="text-2xl block font-bold text-center">マイいいね</h1>
      <div className="flex flex-wrap justify-center">
        {items.map((item, index) => {
          return <ItemCard key={`likes_${index}`} image={item.image} name={item.name} price={item.price}></ItemCard>;
        })}
      </div>
    </div>
  );
}
