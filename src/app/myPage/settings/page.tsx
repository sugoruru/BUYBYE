import users from "@/data/users";

export default function Settings() {
  const user = users.filter((user) => user.id === "taro111")[0];
  return (
    <div className="text-xl md:mx-24 flex flex-col items-center">
      <h1 className="text-center mt-10 text-3xl font-bold">アカウント設定</h1>
      <h1 className="text-center text-sm font-bold text-gray-600">(デモページのため編集はできません)</h1>
      <div className="md:flex md:justify-center">
        <div className="my-10 md:mx-5">
          <label htmlFor="last_name" className="font-bold p-2.5">
            姓
          </label>
          <br />
          <input type="text" className="bg-gray-200 border border-gray-300 text-gray-900 w-80 mx-2 text-sm rounded-md p-2.5" id="last_name" value={user?.lastName} disabled />
        </div>
        <div className="my-10 md:mx-5">
          <label htmlFor="first_name" className="font-bold p-2.5">
            名
          </label>
          <br />
          <input type="text" className="bg-gray-200 border border-gray-300 text-gray-900 mx-2 w-80 text-sm rounded-md p-2.5" id="first_name" value={user?.firstName} disabled />
        </div>
      </div>
      <div className="md:flex md:justify-center">
        <div className="my-10 md:mx-5">
          <label htmlFor="address" className="font-bold p-2.5">
            住所
          </label>
          <br />
          <input type="text" className="bg-gray-200 border border-gray-300 text-gray-900 mx-2 w-80 text-sm rounded-md p-2.5" id="address" value={user?.address} disabled />
        </div>
        <div className="my-10 md:mx-5">
          <label htmlFor="phone" className="font-bold p-2.5">
            電話番号
          </label>
          <br />
          <input type="text" className="bg-gray-200 border border-gray-300 text-gray-900 mx-2 w-80 text-sm rounded-md p-2.5" id="phone" value={user?.phone} disabled />
        </div>
      </div>
      <div className="md:flex md:justify-center">
        <div className="my-10 md:mx-5">
          <label htmlFor="mail" className="font-bold p-2.5">
            メールアドレス
          </label>
          <br />
          <input type="text" className="bg-gray-200 border border-gray-300 text-gray-900 mx-2 w-80 text-sm rounded-md p-2.5" id="mail" value={user?.email} disabled />
        </div>
        <div className="my-10 md:mx-5">
          <label htmlFor="id" className="font-bold p-2.5">
            BUYBYE ID
          </label>
          <br />
          <input type="text" className="bg-gray-200 border border-gray-300 text-gray-900 mx-2 w-80 text-sm rounded-md p-2.5" id="id" value={user?.id} disabled />
        </div>
      </div>
    </div>
  );
}
