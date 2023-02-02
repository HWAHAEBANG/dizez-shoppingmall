import React from "react";
import { GrSend } from "react-icons/gr";

export default function Footer() {
  return (
    <section className="border-t-8 boder font-['Raleway'] px-10">
      <div className='flex gap-5 py-3 xl:py-6 justify-center xl:justify-left'>
        <div className='basis-2/6 flex-col items-center pr-10 hidden xl:block'>
          <div className='border-b-2 pb-5 hidden xl:block'>
            Haec pagina tantum temptat. Intellige quaeso quod non operatur nisi
            propter pauca munera.
          </div>
          <div className='pt-10 hidden xl:block'>
            <p>Find us here:</p>
            <p className='text-xs mt-3 hidden xl:block'>
              FB &nbsp; &nbsp; &nbsp; TW &nbsp; &nbsp; &nbsp; INS &nbsp;
              &nbsp;&nbsp; PT
            </p>
          </div>
        </div>
        <div className=' basis-1/6 text-center xl:text-left'>
          <p className='text-lg xl:mb-5'>About</p>
          <ul className='flex-col gap-5 list-disc text-sm hidden xl:flex'>
            <li>About US</li>
            <li>Collections</li>
            <li>Shop</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className='basis-2/6 flex flex-col text-center xl:basis-1/6 xl:text-left'>
          <p className='text-lg xl:mb-5'>Useful Links</p>
          <ul className='flex-col gap-5 list-disc text-sm hidden xl:flex'>
            <li>Privacy Policy</li>
            <li>Terms of use</li>
            <li>Support</li>
            <li>Shipping details</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className='basis-2/6 text-center xl:text-left'>
          <p className='text-lg xl:mb-5'>Newsletter</p>
          <p className='hidden xl:block'>
            Subscribe to be the first to hear about deals. offers and upcoming
            collections.
          </p>
          <p className='justify-between border-b-2 mt-7 hidden xl:flex'>
            <span>Enter your email</span>

            <GrSend />
          </p>
        </div>
      </div>
      <div className='flex justify-between border-t-2 py-6'>
        <p>© All right reserved. CACTUS 2023</p>
        <p className='hidden xl:block'>Payment Methods</p>
      </div>
    </section>
  );
}
