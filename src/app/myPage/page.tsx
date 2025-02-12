import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineQrCode2 } from "react-icons/md";
import { IoIosCheckboxOutline } from "react-icons/io";
import {
  IoDocumentTextOutline,
  IoCalculatorOutline,
  IoHeartOutline,
  IoBagHandleOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { CiClock1 } from "react-icons/ci";
import Link from "next/link";

export default function MyPage() {
  return (
    <div>
      <div className="px-2 py-2 flex justify-center">
        <FaRegCircleUser className="text-6xl" />
        <div className="mx-2 grid-cols-2">
          <div className="text-2xl">日生　太郎</div>
          <div className="text-xl text-gray-700">BUYBYE ID : taro111</div>
        </div>
        <MdOutlineQrCode2 className="text-6xl" />
      </div>
      <div className="border-[3px] mx-5 my-5 text-center rounded-lg border-red-600">
        <div className="px-2 py-4 text-2xl text-gray-700">
          累計募金額　<span className="text-blue-800 font-bold">¥ 45030</span>
          <br />
          先月の募金額　<span className="text-blue-800 font-bold">¥ 3200</span>
        </div>
      </div>
      <div className="border-[3px] mx-5 my-5 text-center rounded-lg border-red-600">
        <div className="px-2 py-4 text-2xl text-gray-700">
          累計保険割引額　
          <span className="text-blue-800 font-bold">¥ 1591</span>
          <br />
          今年の保険割引額　
          <span className="text-blue-800 font-bold">¥ 1591</span>
        </div>
      </div>
      <div className="grid grid-cols-2 mx-5 gap-5 my-5">
        <Link
          href="/myPage/diagnosis"
          className="px-4 py-2 border-2 rounded-lg text-center"
        >
          <IoIosCheckboxOutline className="text-8xl text-red-600 mx-auto" />
          <span className="text-xl text-gray-700">保険診断</span>
        </Link>
        <Link
          href="/myPage/material"
          className="px-4 py-2 border-2 rounded-lg text-center"
        >
          <IoDocumentTextOutline className="text-8xl text-red-600 mx-auto" />
          <span className="text-xl text-gray-700">資料請求</span>
        </Link>
        <Link
          href="/myPage/estimate"
          className="px-4 py-2 border-2 rounded-lg text-center"
        >
          <IoCalculatorOutline className="text-8xl text-red-600 mx-auto" />
          <span className="text-xl text-gray-700">見積診断</span>
        </Link>
        <Link
          href="/myPage/likes"
          className="px-4 py-2 border-2 rounded-lg text-center"
        >
          <IoHeartOutline className="text-8xl mx-auto" />
          <span className="text-xl text-gray-700">いいね一覧</span>
        </Link>
        <Link
          href="/myPage/bought"
          className="px-4 py-2 border-2 rounded-lg text-center"
        >
          <IoBagHandleOutline className="text-8xl mx-auto" />
          <span className="text-xl text-gray-700">購入履歴</span>
        </Link>
        <Link
          href="/myPage/browsing"
          className="px-4 py-2 border-2 rounded-lg text-center"
        >
          <CiClock1 className="text-8xl mx-auto" />
          <span className="text-xl text-gray-700">閲覧履歴</span>
        </Link>
        <Link
          href="/myPage/settings"
          className="px-4 py-2 border-2 rounded-lg text-center"
        >
          <IoSettingsOutline className="text-8xl mx-auto" />
          <span className="text-xl text-gray-700">アカウント</span>
        </Link>
      </div>
    </div>
  );
}
