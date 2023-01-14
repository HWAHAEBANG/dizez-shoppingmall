import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function ProductCard({
  product: { category, image, price, timeStamp, title },
}) {
  const [heart, setHeart] = useState(false);

  return (
    <div className='p-3 font-["Raleway"]'>
      <div className='h-10 bg-white flex justify-between items-center px-2'>
        <div className='flex gap-2'>
          <div className='bg-black text-white px-1 text-sm leading-5'>BEST</div>
          <div className='bg-red-600 text-white px-1 text-sm leading-5'>
            NEW
          </div>
        </div>
        {!heart && <FaHeart onClick={() => setHeart((heart) => !heart)} />}
        {heart && (
          <FaHeart
            onClick={() => setHeart((heart) => !heart)}
            className=' text-red-600'
          />
        )}
      </div>
      <div className='w-90 h-96 overflow-hidden'>
        <img className=' w-90' src={image} alt='image' />
      </div>
      <div className=' p-3'>
        <p className='text-xs text-gray-500'>{category}</p>
        <p>{title}</p>
        <p>￦ {price}</p>
      </div>
    </div>
  );
}
