import React from "react";
import { RxCross2 } from "react-icons/rx";
import Quantity from "../components/Quantity";
import useCart from "../hooks/useCart";

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
  const { removeCartItem } = useCart(); //
  const handleDelete = () => removeCartItem.mutate(id);

  return (
    <div className='mb-20 lg:mb-0 lg:mt-6'>
      <div className='flex lg:flex-row flex-col lg:items-center my-3'>
        <div className='basis-1/12'>
          <img
            src={image[0]}
            alt='product'
            className='w-full lg:w-20 mb-2 lg:mb-0 '
          />
        </div>
        <div className='basis-4/12 pl-4 mb-4 lg:mb-0 font-bold lg:font-medium'>
          <p>{`${title} (${selectedColor + " / " + selectedSize})`}</p>
          <p className='text-sm text-gray-500'>{category}</p>
        </div>
        <div className='basis-2/12'>
          <span className='pl-4 lg:hidden'>PRICE : </span>￦{price}
        </div>
        <div className='basis-3/12 flex'>
          <span className='pl-4 pr-2 lg:hidden'>QUANTITY : </span>
          <Quantity comeFromCart={true} product={product} />
        </div>
        <div className='basis-2/12 flex flex-col lg:flex-row lg:items-center justify-between'>
          <span>
            <span className='pl-4 lg:hidden'>SUBTOTAL : </span>￦
            {price * selectedQuantity}
          </span>
          <RxCross2
            className='mt-2 lg:mt-0 ml-4 lg:ml-0 text-2xl font-bold'
            onClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
