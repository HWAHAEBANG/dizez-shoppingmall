import React from "react";
import { FaWallet } from "react-icons/fa";
import { MdCall, MdLocalShipping } from "react-icons/md";

export default function Advertise() {
  return (
    <div className='flex w-full lg:w-3/4 justify-center lg:m-auto pt-20 pb-10 lg:pb-40 gap-7 lg:gap-10 text-zinc-800'>
      <div>
        <MdLocalShipping className='text-7xl' />
        <p className='text-xs lg:pt-10 pb-2 border-b-2 lg:text-2xl'>
          Free Shipping
        </p>
        <div className='pt-5 hidden lg:block'>
          Haec pagina tantum temptat. Intellige quaeso quod non operatur nisi
          propter pauca munera.
        </div>
      </div>
      <div>
        <MdCall className='text-7xl' />
        <p className='text-xs lg:pt-10 pb-2 border-b-2 lg:text-2xl'>
          24/7 Service
        </p>
        <div className='pt-5 hidden lg:block'>
          Haec pagina tantum temptat. Intellige quaeso quod non operatur nisi
          propter pauca munera.
        </div>
      </div>
      <div>
        <FaWallet className='text-7xl' />
        <p className='text-xs lg:pt-10 pb-2 border-b-2 lg:text-2xl'>
          Back Guarantee
        </p>
        <div className='pt-5 hidden lg:block'>
          Haec pagina tantum temptat. Intellige quaeso quod non operatur nisi
          propter pauca munera.
        </div>
      </div>
    </div>
  );
}
