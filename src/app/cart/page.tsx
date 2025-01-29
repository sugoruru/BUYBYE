"use client";
import BuyingDialog from "@/components/buyingDialog";
import ItemCard from "@/components/itemCard";
import carts from "@/data/carts";
import merchandise from "@/data/merchandise";
import { useState } from "react";

export default function Cart() {
  const items = [];
  const [isOpen, setIsOpen] = useState(false);

  for (const cart of carts) {
    const item = merchandise.find((item) => item.id === cart.id);
    if (item) items.push(item);
  }
  return (
    <div className="mx-4 mt-5">
      <h1 className="text-2xl block font-bold text-center">マイカート</h1>
      <div className="flex flex-wrap justify-center">
        {items.map((item, index) => {
          return <ItemCard key={`cart_${index}`} image={item.image} name={item.name} price={item.price} id={item.id}></ItemCard>;
        })}
      </div>
      <div className="flex justify-end my-10">
        <span className="my-auto text-2xl font-bold mx-3 text-blue-950 border-b-2 border-blue-950">
          合計:{" "}
          {items.reduce((sum, item) => {
            return sum + item.price;
          }, 0)}
          円
        </span>
        <button className="bg-red-600 text-white px-4 py-2 font-bold hover:bg-red-700 transition duration-300" onClick={() => setIsOpen(true)}>
          購入手続きへ
        </button>
        <BuyingDialog
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          price={items.reduce((sum, item) => {
            return sum + item.price;
          }, 0)}
        />
      </div>
    </div>
  );
}
