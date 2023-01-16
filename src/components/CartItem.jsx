import React from "react";
import { RxCross2 } from "react-icons/rx";
import Quantity from "../components/Quantity";

export default function CartItem({
  product,
  product: {
    id,
    category,
    image,
    price,
    selectedColor,
    selectedQuantity,
    selectedSize,
    title,
  },
}) {
  return (
    <div className='my-6'>
      <div className='flex items-center my-3'>
        <div className='basis-1/12'>
          <img src={image} alt='image' className='w-20' />
        </div>
        <div className='basis-4/12  pl-4'>
          <p>{`${title} (${selectedColor})`}</p>
          <p>{category}</p>
        </div>
        <div className='basis-2/12'>{price}</div>
        <div className='basis-3/12'>
          <Quantity comeFromCart={true} product={product} />
        </div>
        <div className='basis-2/12 flex items-center justify-between'>
          <span>{price * selectedQuantity}</span>
          <RxCross2 className='text-2xl font-bold' />
        </div>
      </div>
    </div>
  );
}