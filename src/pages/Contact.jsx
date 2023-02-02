import React from "react";
import Advertise from "../components/Advertise";
import Banner from "../components/Banner";

export default function Contact() {
  return (
    <div>
      <Banner title='Contact Us' />
      <div className='font-["Raleway"] pt-10'>
        <div className='text-5xl text-center mb-5'>
          Get the info you're looking for right now
        </div>
        <div className='flex justify-center'>
          <img className='w-20 m-10' src='/image/main/contact.png' alt='' />
          <ul className='flex flex-col gap-3 text-xl justify-center  pl-10'>
            <li>
              -{" "}
              <span className='hover:underline cursor-pointer'>
                How we're keeping customers & crewmembers satisfaction.
              </span>
            </li>
            <li>
              -{" "}
              <span className='hover:underline cursor-pointer'>
                Explanation of refund policy.
              </span>
            </li>
            <li>
              -{" "}
              <span className='hover:underline cursor-pointer'>
                Inquiries about restocking.
              </span>
            </li>
            <li>
              -{" "}
              <span className='hover:underline cursor-pointer'>
                How we're keeping customers & crewmembers satisfaction
              </span>
            </li>
          </ul>
        </div>
      </div>
      <Advertise />
    </div>
  );
}
