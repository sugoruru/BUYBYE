"use client";
import Image from "next/image";
import Link from "next/link";
import { IoCart, IoSearch } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import carts from "@/data/carts";
import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <header className="border-b text-white px-4 py-2 h-[10lvh] fixed top-0 w-full bg-white">
      <div className="h-full lg:flex lg:justify-between">
        <div className="flex h-full">
          <div className="my-auto max-lg:mx-auto h-full">
            <Link href="/" className="">
              <Image src="/BUYBYE.png" width={50} height={50} alt="" className="h-full w-auto aspect-square" />
            </Link>
          </div>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 mx-2 text-sm rounded-lg block w-80 p-2.5 h-2/3 my-auto max-lg:hidden"
            placeholder="検索"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link href={`/search?keyword=${search}`} className="my-auto max-lg:hidden">
            <IoSearch className="text-3xl text-black" />
          </Link>
        </div>
        <div className="max-lg:hidden flex">
          <div className="my-auto mx-1 cursor-pointer">
            <IoIosNotifications className="text-3xl text-black" />
          </div>
          <div className="my-auto mx-1">
            <Link href="/cart">
              <div className="cart" data-num={carts.filter((cart) => cart.userId === "taro111").length}>
                <IoCart className="text-3xl text-black" />
              </div>
            </Link>
          </div>
          <div className="my-auto mx-1">
            <Link href="/myPage">
              <FaRegCircleUser className="text-3xl text-black" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
