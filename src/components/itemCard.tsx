import Image from "next/image";
import Link from "next/link";

const ItemCard = ({ image, name, price, id }: { image: string; name: string; price: number; id: number }) => {
  return (
    <Link href={`/items/${id}`} className="w-30 p-2 flex-shrink-0">
      <div className="bg-white hover:bg-gray-100 cursor-pointer shadow-md rounded-md hover:shadow-2xl transition duration-300">
        <Image src={image} alt={name} width={100} height={100} className="w-full h-48 object-cover rounded-t-md" />
        <div className="p-4">
          <h1 className="text-lg font-bold text-gray-800">{name}</h1>
          <p className="text-blue-950 font-bold text-xl mt-2">{price}円</p>
        </div>
      </div>
    </Link>
  );
};
export default ItemCard;
