"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { regions } from "@/data/constants";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import merchandise from "@/data/merchandise";
import ItemCard from "@/components/itemCard";
import disasters from "@/data/disasters";

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

  // 災害での検索.
  let disaster_search = null;
  if (searchParams.has("disaster") && searchParams.get("disaster") !== "") {
    disaster_search = merchandise.filter((item) => item.disaster === Number(searchParams.get("disaster")));
  }

  // 地域での検索.
  let region_search = null;
  const region = searchParams.get("region");
  if (searchParams.has("region") && region) {
    const region_disasters = disasters.filter((disaster) => disaster.location === regions.get(region));
    region_search = [];
    for (const disaster of region_disasters) {
      const related_merchandise = merchandise.filter((item) => item.disaster === disaster.id);
      region_search.push(...related_merchandise);
    }
  }

  return searchParams.has("keyword") && searchParams.get("keyword") !== "" ? (
    <div>
      <h1>検索結果</h1>
      <p>キーワード: {searchParams.get("keyword")}</p>
    </div>
  ) : region_search ? (
    <div>
      <h1 className="text-xl text-center font-bold my-5">検索結果</h1>
      {region_search.length === 0 ? (
        <h1 className="text-xl font-bold my-5 text-center">該当商品が見つかりませんでした。</h1>
      ) : (
        <div className="flex flex-wrap justify-center">
          {region_search.map((item, index) => {
            return <ItemCard key={`search_region_${index}`} price={item.price} name={item.name} image={item.image} />;
          })}
        </div>
      )}
    </div>
  ) : disaster_search ? (
    <div>
      <h1 className="text-xl text-center font-bold my-5">検索結果</h1>
      {disaster_search.length === 0 ? (
        <h1 className="text-xl font-bold my-5 text-center">該当商品が見つかりませんでした。</h1>
      ) : (
        <div className="flex flex-wrap justify-center">
          {disaster_search.map((item, index) => {
            return <ItemCard key={`search_disaster_${index}`} price={item.price} name={item.name} image={item.image} />;
          })}
        </div>
      )}
    </div>
  ) : (
    <div className="mx-4 mt-5">
      <h1 className="text-2xl font-bold text-gray-800 border-b-4 border-blue-950">文字検索</h1>
      <div className="my-4">
        <input
          type="text"
          className="bg-gray-50 border mx-2 border-gray-300 text-gray-900 text-sm rounded-full block w-72 p-2.5 h-2/3 my-auto"
          placeholder="検索"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex my-5">
          <button className="bg-red-600 text-white px-4 py-2 font-bold hover:bg-red-700 transition duration-300 mx-2">商品別に探す</button>
          <button className="bg-green-600 text-white px-4 py-2 font-bold hover:bg-green-700 transition duration-300 mx-2">地域別に探す</button>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-gray-800 border-b-4 border-blue-950">地域名検索</h1>
      <div className="">
        {[...regions.keys()].map((region, index) => {
          return (
            <div key={index} className="flex my-2 search-region">
              <Link href={`/search?region=${region}`} className="mx-2 text-xl">
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
