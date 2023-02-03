import React from "react";
import { Link } from "react-router-dom";
import MainButton from "./ui/MainButton";

export default function NewProduct() {
  return (
    <div className='flex-col items-center hidden lg:flex'>
      <div className='flex w-4/5 m-auto pt-32 relative gap-60 font-["Raleway"] mb-20'>
        <div className='absolute flex flex-col items-center left-32 top-52 text-zinc-800'>
          <p className='text-7xl font-semibold'>2587 +</p>
          <p className='text-3xl leading-10'>Products for you</p>
        </div>
        <div className='flex flex-col gap-48'>
          <div className=' relative  h-1/2 mt-96 '>
            <img className='' src='./image/main/adv_3.jpg' alt='' />
            <span className='absolute font-extrabold  text-white text-7xl text-shadow sm:text-shadow-sm md:text-shadow-md lg:text-shadow-lg xl:text-shadow-xl -bottom-9 '>
              DRESSES
            </span>
            <div className='absolute top-60 -right-24 text-zinc-800'>
              <p className='text-xl mb-4'>
                <span className='font-bold'>WOMEN</span> COLLECTION
              </p>
              <p className='text-5xl font-bold mb-9'>
                Trendy Look
                <br />
                For Every Day
              </p>
              <div className='flex items-center hover:translate-x-10 duration-500 '>
                <div className='h-0.5 w-6 bg-black'></div>
                <Link to='/shop/women' className='ml-2 cursor-pointer'>
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className=' relative h-1/2 mt-20'>
            <img className='' src='./image/main/adv_4.jpg' alt='' />
            <div className='text-white absolute top-28 left-12'>
              <p className='text-2xl xl:text-5xl mb-4 font-bold'>
                S E A S I O N
              </p>
              <p className='text-7xl xl:text-9xl font-bold mb-9'>SALE</p>
              <span className='text-2xl'>
                Non aliqua reprehenderit <br />
                reprehenderit culpa laboris nulla
              </span>
              <div className='flex items-center hover:translate-x-10 duration-500 mt-10'>
                <div className='h-0.5 w-6 bg-white'></div>
                <Link to='/shop/women' className='ml-2 cursor-pointer'>
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-48'>
          <div className=' relative h-1/2'>
            <img className='  ' src='./image/main/adv_1.jpg' alt='' />
            <span className='absolute font-["Raleway"] font-extrabold text-white text-7xl text-shadow sm:text-shadow-sm md:text-shadow-md lg:text-shadow-lg xl:text-shadow-xl right-0 -top-9'>
              BLOUSE
            </span>
            <div className='absolute top-28 -left-24 text-zinc-800'>
              <p className='text-xl mb-4'>
                <span className='font-bold'>WOMEN</span> COLLECTION
              </p>
              <p className='text-5xl font-bold mb-9'>
                New Autumn
                <br />
                Arrivals 2023
              </p>
              <div className='flex items-center hover:translate-x-10 duration-500'>
                <div className='h-0.5 w-6 bg-black'></div>
                <Link to='/shop/women' className='ml-2 cursor-pointer'>
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className=' relative h-1/2 -mt-96'>
            <img
              className='absolute -left-20'
              src='./image/main/adv_2.jpg'
              alt=''
            />
            <span className='absolute font-["Raleway"] font-extrabold text-white text-7xl text-shadow sm:text-shadow-sm md:text-shadow-md lg:text-shadow-lg xl:text-shadow-xl -rotate-90 -left-80 top-40  xl:top-80'>
              ACCESSORIES
            </span>
            <div className='absolute top-60 -right-24 text-zinc-800'>
              <p className='text-xl mb-4'>
                <span className='font-bold'>WOMEN</span> ACCESSORIES
              </p>
              <p className='text-5xl font-bold mb-9'>
                Fashion Fro
                <br />
                This Summer
              </p>
              <div className='flex items-center hover:translate-x-10 duration-500'>
                <div className='h-0.5 w-6 bg-black'></div>
                <Link to='/shop/acc' className='ml-2 cursor-pointer'>
                  Shop Now
                </Link>
              </div>
            </div>
            <div className='absolute -bottom-32 -left-24 text-right'>
              <p className='text-2xl xl:text-5xl font-bold'>FESTIVAL</p>
              <p className='text-6xl xl:text-8xl font-bold mb-9'>Alexandra</p>
              <span className='text-2xl'>
                Non aliqua reprehenderit <br />
                reprehenderit culpa laboris nulla <br />
                Haec pagina tantum temptat. <br />
                Intellige quaeso quod non operatur nisi propter pauca munera.
              </span>
              <div className='flex items-center hover:translate-x-10 duration-500 mt-10'>
                <div className='h-0.5 w-6 bg-white'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainButton text='View All Collections' bgcolor='black' color='white' />
    </div>
  );
}
