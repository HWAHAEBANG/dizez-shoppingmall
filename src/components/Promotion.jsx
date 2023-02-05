import React from "react";
import Countdown from "react-countdown";
import MainButton from "./ui/MainButton";

export default function Promotion() {
  return (
    <div className='relative mt-12 xl:mt-24  text-shadow sm:text-shadow-sm md:text-shadow-md lg:text-shadow-lg xl:text-shadow-xl'>
      <img
        className='w-full'
        src='./image/main/promotion_1.webp'
        alt='promotion_1'
      />
      <div className=' absolute top-0 opacity-40 w-full h-full bg-black'></div>
      <div className='absolute top-3 lg:top-12 left-10 '>
        <p className='text-xs lg:text-xl lg:mb-4  text-white'>
          <span className='font-bold'>DEAL</span> OF THE WEEK
        </p>
        <p className='font-bold lg:font-medium text-2xl lg:text-6xl xl:text-9xl mb-2 lg:mb-9 text-white'>
          Stay Warm
          <br />
          And Trendy
        </p>
        <Countdown
          date={Date.now() + 100000000}
          className='text-3xl lg:text-6xl text-shadow sm:text-shadow-sm md:text-shadow-md lg:text-shadow-lg xl:text-shadow-xl  text-white'
        />
        <p className='text-xs lg:text-xl mb-5  text-white'>
          &nbsp;days &nbsp;&nbsp;&nbsp; hours &nbsp;&nbsp;&nbsp; mins
          &nbsp;&nbsp;&nbsp; sec
        </p>
        <div className='hidden lg:block'>
          <MainButton text='Shop Now' bgcolor='white' color='black' />
        </div>
      </div>
    </div>
  );
}
