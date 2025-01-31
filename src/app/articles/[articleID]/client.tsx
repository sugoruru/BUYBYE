"use client";
import articles from "@/data/articles";
import Image from "next/image";

const Client = ({ params }: { params: { strArticleID: string } }) => {
  const articleID = parseInt(params.strArticleID);
  const item = articles.filter((item) => item.id === articleID)[0];

  return (
    <div className="">
      {!item ? (
        <div className="text-xl font-bold">記事が存在しません</div>
      ) : (
        <div className="md:mt-10 md:w-[600px] md:mx-auto">
          <div className="">
            <Image src={item.image} width={200} height={200} alt="" className="md:w-[600px] max-md:w-full max-md:h-32 object-cover aspect-video" unoptimized />
          </div>
          <div className="max-md:mx-4">
            <h1 className="font-bold md:text-3xl max-md:text-xl max-md:mt-4 md:mt-8">{item.title}</h1>
            <h2 className="font-bold mt-5 md:text-xl max-md:text-lg">募金前の困っている話</h2>
            <p className="mt-2">{item.content_trouble}</p>
            <h2 className="font-bold mt-5 md:text-xl max-md:text-lg">募金後の感謝と変化の話</h2>
            <p className="mt-2">{item.content_solution}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Client;
