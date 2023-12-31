import { StoreType } from "@/interface";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import {
  AiOutlineClose,
  AiOutlineInfoCircle,
  AiOutlineCheck,
  AiOutlinePhone,
} from "react-icons/ai";
import { HiOutlineMapPin } from "react-icons/hi2";
interface StoreBoxProps {
  store: StoreType;
  setStore: Dispatch<SetStateAction<any>>;
}
const StoreBox = ({ store, setStore }: StoreBoxProps) => {
  return (
    <div className="fixed transition ease-in-out delay-150 inset-x-0 mx-auto bottom-20 rounded-lg  shadow-lg max-w-sm md:max-w-xl z-10 w-full bg-white">
      {store && (
        <>
          <div className="p-8">
            <div className="flex justify-between items-start">
              <div className="flex gap-4 items-center">
                <Image
                  src={
                    store?.categories
                      ? `/images/markers/${store?.categories}.png`
                      : "/images/markers/default/png"
                  }
                  width={100}
                  height={100}
                  alt="아이콘 이미지"
                />
                <div>
                  <div className="font-sembold">{store?.name}</div>
                  <div className="text0">{store?.storeType}</div>
                </div>
              </div>
              <button type="button" onClick={() => setStore(null)}>
                <AiOutlineClose />
              </button>
            </div>
            <div className="mt-2 flex gap-2 items-center">
              <HiOutlineMapPin />
              {store?.address}
            </div>
            <div className="mt-2 flex gap-2 items-center">
              <AiOutlinePhone />
              {store?.phone}
            </div>
            <div className="mt-2 flex gap-2 items-center">
              <AiOutlineInfoCircle />
              {store?.storeType}
            </div>
            <div className="mt-2 flex gap-2 items-center">
              <AiOutlineCheck />
              {store?.categories}
            </div>
          </div>
          <button
            type="button"
            onClick={() => window.alert("작업중")}
            className="w-full bg-blue-700 hover:bg-blue-500 py-3 text-white font-semibold rounded-b-lg"
          >
            상세보기
          </button>
        </>
      )}
    </div>
  );
};

export default StoreBox;
