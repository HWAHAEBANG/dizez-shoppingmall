import React from "react";
import { FaWallet } from "react-icons/fa";
import { MdCall, MdLocalShipping } from "react-icons/md";

export default function Advertise() {
  return (
    <div className='flex w-3/4 m-auto py-40 gap-10 text-zinc-800'>
      <div>
        <MdLocalShipping className='text-7xl' />
        <p className='pt-10 pb-2 border-b-2 text-2xl'>Free Shipping</p>
        <div className='pt-5'>
          Haec pagina tantum temptat. Intellige quaeso quod non operatur nisi
          propter pauca munera.
        </div>
      </div>
      <div>
        <MdCall className='text-7xl' />
        <p className='pt-10 pb-2 border-b-2 text-2xl'>24/7 Customer Service</p>
        <div className='pt-5'>
          Haec pagina tantum temptat. Intellige quaeso quod non operatur nisi
          propter pauca munera.
        </div>
      </div>
      <div>
        <FaWallet className='text-7xl' />
        <p className='pt-10 pb-2 border-b-2 text-2xl'>Money Back Guarantee</p>
        <div className='pt-5'>
          Haec pagina tantum temptat. Intellige quaeso quod non operatur nisi
          propter pauca munera.
        </div>
      </div>
    </div>
  );
}
