import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaRegEye } from "react-icons/fa";

export default function RecentlyViewed() {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className='bg-white fixed top-1/3 right-5'>
      <div
        className='absolute -top-10 right-0 w-8 h-8 flex justify-center items-center border rounded-full bg-slate-200'
        onClick={handleClick}
      >
        {visible ? <RxCross2 /> : <FaRegEye />}
      </div>
      {visible ? (
        <div className='h-96 w-32 opacity-80  rounded-xl border'>
          <div className='border-b h-10 text-center leading-10 bg-zinc-100'>
            최근 본 상품
          </div>
          <div className='p-3 overflow-hidden'>
            <img
              src='../image/main/main_1.jpg'
              alt=''
              className=' opacity-100'
            />
            <img
              src='../image/main/main_1.jpg'
              alt=''
              className=' opacity-100'
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
