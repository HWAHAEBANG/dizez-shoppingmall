import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import useDibbs from "../hooks/useDibbs";

export default function ProductCard({
  product,
  product: { id, category, image, price, timeStamp, title, tags },
  comeFromDibbs,
}) {
  const navigate = useNavigate();
  const [heart, setHeart] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    } else {
      return JSON.parse(window.localStorage.getItem(`heartKey${id}`));
    }
  });

  // console.log(tags);
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

  useEffect(() => {
    localStorage.setItem(`heartKey${id}`, JSON.stringify(heart));
  }, [heart]);

  console.log(typeof image);

  return (
    <div className='p-3 font-["Raleway"]'>
      <div className='h-10 bg-white flex justify-between items-center px-2'>
        <div className='flex gap-2'>
          {tags && tags.new && (
            <div className='bg-red-600 text-white px-1 text-sm leading-5'>
              NEW
            </div>
          )}
          {tags && tags.best && (
            <div className='bg-black text-white px-1 text-sm leading-5'>
              BEST
            </div>
          )}
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
          <img
            className=' w-90'
            src={typeof image === "object" ? image[0] : image}
            //나중엔 다 배열로 올라갈거니까 나중엔 없애도 되겠어
            alt='product'
          />
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
