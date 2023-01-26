import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import MainButton from "./ui/MainButton";

export default function Promotion() {
  return (
    <div className='relative mt-32  text-shadow sm:text-shadow-sm md:text-shadow-md lg:text-shadow-lg xl:text-shadow-xl'>
      <img
        className='w-full'
        src='./image/main/promotion_1.webp'
        alt='promotion_1'
      />
      <div className=' absolute top-0 opacity-40 w-full h-full bg-black'></div>
      <div className='absolute top-16 left-10 text-white '>
        <p className='text-xl mb-4'>
          <span className='font-bold'>DEAL</span> OF THE WEEK
        </p>
        <p className='text-9xl  mb-9'>
          Stay Warm
          <br />
          And Trendy
        </p>
        <Countdown
          date={Date.now() + 100000000}
          className='text-6xl text-shadow sm:text-shadow-sm md:text-shadow-md lg:text-shadow-lg xl:text-shadow-xl'
        />
        <p className='text-xl mb-10'>
          &nbsp;days &nbsp;&nbsp;&nbsp; hours &nbsp;&nbsp;&nbsp; mins
          &nbsp;&nbsp;&nbsp; sec
        </p>
        <MainButton text='Shop Now' bgcolor='white' color='black' />
      </div>
    </div>
  );
}
