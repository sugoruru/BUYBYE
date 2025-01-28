"use client";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { useMemo, useState } from "react";
import { regions } from "@/data/constants";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const Map = useMemo(
    () =>
      dynamic(() => import("../testmap/simpleMap"), {
        loading: () => <p>地図の読み込み中...</p>,
        ssr: false,
      }),
    []
  );

  return searchParams.has("keyword") && searchParams.get("keyword") !== "" ? (
    <div>
      <h1>検索結果</h1>
      <p>キーワード: {searchParams.get("keyword")}</p>
    </div>
  ) : searchParams.has("region") && searchParams.get("region") !== "" ? (
    <div>
      <h1>検索結果</h1>
      <p>地域: {searchParams.get("region")}</p>
    </div>
  ) : searchParams.has("disaster") && searchParams.get("disaster") !== "" ? (
    <div>
      <h1>検索結果</h1>
      <p>災害: {searchParams.get("disaster")}</p>
    </div>
  ) : (
    <div className="mx-4 mt-5">
      <h1 className="text-2xl font-bold text-gray-800 border-b-4 border-blue-950 lg:hidden">文字検索</h1>
      <div className="flex justify-center my-4 lg:hidden">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-80 p-2.5 h-2/3 my-auto"
          placeholder="検索"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link href={`/search?keyword=${search}`} className="mx-3 my-auto">
          <IoSearch className="text-3xl text-black" />
        </Link>
      </div>
      <h1 className="text-2xl font-bold text-gray-800 border-b-4 border-blue-950">地域名検索</h1>
      <div className="mx-4">
        {Object.keys(regions).map((region, index) => {
          return (
            <div key={index} className="flex my-2 search-region">
              <Link href={`/search?region=${region}`} className="mx-4 text-xl">
                {region}
              </Link>
            </div>
          );
        })}
      </div>
      <h1 className="text-2xl font-bold text-gray-800 border-b-4 border-blue-950">地図検索</h1>
      <div className="my-6">
        <Map />
      </div>
    </div>
  );
}
