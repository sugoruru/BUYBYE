"use client";
import carts from "@/data/carts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHome, IoHomeOutline, IoSearch, IoSearchOutline, IoCart, IoCartOutline, IoPerson, IoPersonOutline } from "react-icons/io5";

const Menu = () => {
  const pathname = usePathname();
  return (
    <div className="h-[10lvh] border-t fixed bottom-0 w-full lg:hidden bg-white z-[10000]">
      <div className="flex h-full justify-around">
        <Link href="/" className="my-auto">
          {pathname.split("/")[1] === "" ? <IoHome className="text-3xl" /> : <IoHomeOutline className="text-3xl" />}
        </Link>
        <Link href="/search" className="my-auto">
          {pathname.split("/")[1] === "search" ? <IoSearch className="text-3xl" /> : <IoSearchOutline className="text-3xl" />}
        </Link>
        <Link href="/cart" className="my-auto">
          <div className="cart" data-num={carts.filter((cart) => cart.userId === "taro111").length}>
            {pathname.split("/")[1] === "cart" ? <IoCart className="text-3xl text-black" /> : <IoCartOutline className="text-3xl text-black" />}
          </div>
        </Link>
        <Link href="/myPage" className="my-auto">
          {pathname.split("/")[1] === "myPage" ? <IoPerson className="text-3xl" /> : <IoPersonOutline className="text-3xl" />}
        </Link>
      </div>
    </div>
  );
};

export default Menu;
