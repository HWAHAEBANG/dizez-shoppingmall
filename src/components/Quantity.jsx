import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function Quantity() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className=' border-4 border-gray-300 w-28 h-10 flex justify-around items-center'>
      <button
        className={quantity <= 1 ? "text-xl text-gray-300" : "text-xl"}
        onClick={() => setQuantity((prev) => prev - 1)}
        disabled={quantity <= 1 && true}
      >
        <FiMinus />
      </button>
      <span>{quantity}</span>
      <button
        className='text-xl'
        onClick={() => setQuantity((prev) => prev + 1)}
      >
        <FiPlus />
      </button>
    </div>
  );
}
