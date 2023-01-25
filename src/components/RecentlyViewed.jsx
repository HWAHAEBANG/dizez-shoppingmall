import React from "react";

export default function RecentlyViewed() {
  return (
    <div className=' h-96 w-32 bg-white opacity-80 fixed top-1/3 right-5 rounded-xl border overflow-hidden'>
      <div className='border-b h-10 text-center leading-10 bg-zinc-100'>
        최근 본 상품
      </div>
      <div className='p-3 '>
        <img src='../image/main/main_1.jpg' alt='' className=' opacity-100' />
        <img src='../image/main/main_1.jpg' alt='' className=' opacity-100' />
      </div>
    </div>
  );
}
