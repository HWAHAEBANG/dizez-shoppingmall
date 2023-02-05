import React from "react";
import Event from "../components/Event";

export default function Blog() {
  return (
    <div>
      <div className='bg-black w-full mt-14  relative font-["Raleway"] rounded-b-3xl overflow-hidden mb-12'>
        <img className='w-96' src='image/main/establisher.jpg' alt='' />
        <div className='absolute z-10 text-white top-2 xl:top-32 left-5 xl:left-80 leading-10 w-full lg:left-32 2xl:top-32 2xl:left-80'>
          <p className='absolute left-0 text-xl xl:text-6xl font-bold m-5'>
            "It's very easy to be different,
          </p>
          <p className='absolute top-12 xl:top-28 left-36 xl:left-96 text-xl xl:text-6xl font-bold leading-20'>
            difficult to be better."
          </p>
          <p className='absolute top-24 xl:top-72 right-10 xl:right-96 text-sm xl:text-3xl'>
            - Christian Dior
            <span className='text-xs'>&nbsp;DI:ZEZ establisher</span>
          </p>
        </div>
        <div></div>
      </div>
      <Event comeFromBlog />
    </div>
  );
}
