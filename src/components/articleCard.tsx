import Image from "next/image";
import Link from "next/link";

const ArticleCard = ({ image, name, id }: { image: string; name: string; id: number }) => {
  return (
    <Link href={`/articles/${id}`} className="w-80 p-2 flex-shrink-0 lg:mx-auto">
      <div className="bg-white hover:bg-gray-100 cursor-pointer shadow-md rounded-md hover:shadow-2xl transition duration-300">
        <Image src={image} alt={name} width={100} height={100} className="w-full h-48 object-cover rounded-t-md" unoptimized />
        <div className="p-4">
          <h1 className="text-lg font-bold text-gray-800">{name}</h1>
        </div>
      </div>
    </Link>
  );
};
export default ArticleCard;
