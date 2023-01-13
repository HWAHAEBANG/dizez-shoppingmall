import React from "react";
import { GrSend } from "react-icons/gr";

export default function Footer() {
  return (
    <section className="border-t-8 boder font-['Raleway']">
      <div className='flex gap-5 py-6'>
        <div className='basis-2/6 flex-col items-center pr-10'>
          <div className='border-b-2 pb-5'>
            Haec pagina tantum temptat. Intellige quaeso quod non operatur nisi
            propter pauca munera.
          </div>
          <div className='pt-10'>
            <p>Find us here:</p>
            <p className='text-xs mt-3'>
              FB &nbsp; &nbsp; &nbsp; TW &nbsp; &nbsp; &nbsp; INS &nbsp;
              &nbsp;&nbsp; PT
            </p>
          </div>
        </div>
        <div className=' basis-1/6'>
          <p className='text-lg mb-5'>About</p>
          <ul className='flex flex-col gap-5 list-disc text-sm'>
            <li>About US</li>
            <li>Collections</li>
            <li>Shop</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className='basis-1/6 flex flex-col'>
          <p className='text-lg mb-5'>Useful Links</p>
          <ul className='flex flex-col gap-5 list-disc text-sm'>
            <li>Privacy Policy</li>
            <li>Terms of use</li>
            <li>Support</li>
            <li>Shipping details</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className='basis-2/6'>
          <p className='text-lg mb-5'>Newsletter</p>
          <p>
            Subscribe to be the first to hear about deals. offers and upcoming
            collections.
          </p>
          <p className='flex justify-between border-b-2 mt-7'>
            <span>Enter your email</span>

            <GrSend />
          </p>
        </div>
      </div>
      <div className='flex justify-between border-t-2 px-10 py-6'>
        <p>© All right reserved. CACTUS 2023</p>
        <p>Payment Methods</p>
      </div>
    </section>
  );
}
