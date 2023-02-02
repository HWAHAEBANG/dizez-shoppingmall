import React from "react";
import Advertise from "../components/Advertise";
import Event from "../components/Event";

export default function Blog() {
  return (
    <div>
      <div className='bg-black w-full mt-14  relative font-["Raleway"] rounded-b-3xl overflow-hidden mb-12'>
        <img className='w-96' src='image/main/establisher.jpg' alt='' />
        <div className='absolute z-10 text-white top-32 left-80 leading-10 w-full'>
          <p className='absolute left-0 text-6xl font-bold m-5'>
            "It's very easy to be different,
          </p>
          <p className='absolute top-28 left-96 text-6xl font-bold leading-20'>
            difficult to be better."
          </p>
          <p className='absolute top-72 right-96 text-3xl'>
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
