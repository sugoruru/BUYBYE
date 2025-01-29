import { regions } from "@/data/constants";
import { Dialog, DialogPanel, DialogTitle, DialogBackdrop, Button } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";

const BuyingDialog = ({ isOpen, setIsOpen, price }: { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; price: number }) => {
  return (
    <>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={() => setIsOpen(false)}>
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel transition className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
              <div>
                <RxCross2 className="fixed text-2xl" onClick={() => setIsOpen(false)} />
                <DialogTitle as="h3" className="text-xl font-semibold text-gray-800 text-center">
                  購入手続き
                </DialogTitle>
              </div>
              <p className="mt-2 text-lg font-semibold text-gray-800">募金先選択</p>
              <div className="mt-2">
                {[...regions.keys()].map((region) => (
                  <div key={region} className="flex items-center gap-2">
                    <input type="radio" id={region} name="region" value={region} />
                    <label htmlFor={region}>{region}</label>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-lg font-semibold text-gray-800">金額</p>
              <p className="mt-1 text-lg font-semibold text-blue-950 border-b-2 border-blue-950">{price}円</p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-red-600 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-red-700 transition data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={() => {
                    alert("購入");
                    setIsOpen(false);
                  }}
                >
                  購入
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default BuyingDialog;
