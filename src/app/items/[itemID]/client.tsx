"use client";
import BuyingDialog from "@/components/buyingDialog";
import merchandise from "@/data/merchandise";
import Image from "next/image";
import { useState } from "react";

const Client = ({ params }: { params: { strItemID: string } }) => {
  const itemID = parseInt(params.strItemID);
  const item = merchandise.filter((item) => item.id === itemID)[0];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:mx-40 max-lg:mx-5 mt-5">
      {!item ? (
        <div className="text-xl font-bold">商品が存在しません</div>
      ) : (
        <div>
          <div className="sm:flex">
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              className="w-96 h-96 max-sm:mx-auto max-sm:my-8 sm:my-5"
            />
            <div className="w-full">
              <h1 className="max-sm:my-8 text-3xl font-bold sm:mx-5 sm:my-5">
                {item.name}
              </h1>
              <h1 className="max-sm:my-8 text-3xl font-bold sm:mx-5 sm:my-5 text-blue-950 border-b-2 border-blue-950">
                {item.price}円
              </h1>
              <p className="max-sm:my-8 sm:mx-5 sm:my-5">{item.description}</p>
              <div className="flex justify-end max-sm:my-8 sm:mx-5 sm:my-5">
                <button
                  className="bg-red-600 text-white px-4 py-2 font-bold hover:bg-red-700 transition duration-300 mx-5"
                  onClick={() => {
                    alert("デモページのため、カートに追加できません");
                  }}
                >
                  カートに追加
                </button>
                <button
                  className="bg-green-600 text-white px-4 py-2 font-bold hover:bg-green-700 transition duration-300"
                  onClick={() => setIsOpen(true)}
                >
                  今すぐ購入
                </button>
              </div>
            </div>
          </div>
          <BuyingDialog
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            price={item.price}
          />
        </div>
      )}
    </div>
  );
};

export default Client;
