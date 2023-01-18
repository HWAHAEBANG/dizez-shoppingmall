import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import useDibbs from "../hooks/useDibbs";

export default function ProductCard({
  product,
  product: { id, category, image, price, timeStamp, title },
  comeFromDibbs,
}) {
  const navigate = useNavigate();
  const [heart, setHeart] = useState(false);

  const {
    // dibbsQuery: { data: dibbsProducts },
    removeDibbsItem,
    addOrUpdateDibbsItem,
  } = useDibbs(); //

  const heartOn = () => {
    setHeart((heart) => !heart);
    addOrUpdateDibbsItem.mutate(product);
  };

  const heartOff = () => {
    setHeart((heart) => !heart);
    removeDibbsItem.mutate(id);
  };

  const enter = () => {
    navigate(`/shop/${id}`, { state: { product: product } });
  };

  return (
    <div className='p-3 font-["Raleway"]'>
      <div className='h-10 bg-white flex justify-between items-center px-2'>
        <div className='flex gap-2'>
          <div className='bg-black text-white px-1 text-sm leading-5'>BEST</div>
          <div className='bg-red-600 text-white px-1 text-sm leading-5'>
            NEW
          </div>
        </div>
        {comeFromDibbs ? (
          <div>
            <RxCross2 onClick={heartOff} />
          </div>
        ) : (
          <div>
            {!heart && <FaHeart onClick={heartOn} />}
            {heart && <FaHeart onClick={heartOff} className=' text-red-600' />}
          </div>
        )}
      </div>
      <div onClick={enter}>
        <div className='w-90 h-96 overflow-hidden'>
          <img className=' w-90' src={image} alt='product' />
        </div>
        <div className=' p-3'>
          <p className='text-xs text-gray-500'>{category}</p>
          <p>{title}</p>
          <p>￦ {price}</p>
        </div>
      </div>
    </div>
  );
}
