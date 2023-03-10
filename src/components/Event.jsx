import React from "react";
import { Link } from "react-router-dom";
import MainButton from "./ui/MainButton";

export default function Event({ comeFromBlog }) {
  return (
    <div className='w-3/4 m-auto font-["Raleway"] flex flex-col items-center mb-16'>
      <div className='flex flex-col gap-4 mb-7 items-center'>
        <p>Head Designer</p>
        <p className='text-3xl xl:text-4xl font-bold'>The Last In DI:ZEZ</p>
        <p className='text-center'>
          Haec pagina tantum temptat.
          <br />
          Intellige quaeso quod non operatur nisi propter pauca munera.
        </p>
      </div>
      <div className='flex flex-col gap-10 mb-16 xl:flex-row'>
        <div className='relative'>
          <img src='./image/main/blog_1.png' alt='' />
          <div className='bg-white bg-opacity-50 absolute bottom-0 right-0 py-3 lg:py-6 px-4 lg:px-8'>
            <p className='text-sm lg:text-xl'>
              Fashion Trends In 2023: <br />
              Style, Colors, Accessories
            </p>
            <p className='text-xs mt-1 lg:mt-4 mb-2 lg:mb-8 '>Aug 02. 2023</p>
            <div className='flex items-center hover:translate-x-10 duration-500 '>
              <div className='h-0.5 w-6 bg-black'></div>
              <div className='ml-2 cursor-pointer'>Read More</div>
            </div>
          </div>
        </div>
        <div className='relative'>
          <img src='./image/main/blog_2.png' alt='' />
          <div className='bg-white bg-opacity-50 absolute bottom-0 right-0 py-3 lg:py-6 px-4 lg:px-8'>
            <p className='text-sm lg:text-xl'>
              Fashion Trends In 2023: <br />
              Style, Colors, Accessories
            </p>
            <p className='text-xs mt-1 lg:mt-4 mb-2 lg:mb-8'>Aug 02. 2023</p>
            <div className='flex items-center hover:translate-x-10 duration-500 '>
              <div className='h-0.5 w-6 bg-black'></div>
              <div className='ml-2 cursor-pointer'>Read More</div>
            </div>
          </div>
        </div>
      </div>
      {!comeFromBlog && (
        <Link to='/blog'>
          <MainButton text='Read Blog' bgcolor='black' color='white' />
        </Link>
      )}
    </div>
  );
}
