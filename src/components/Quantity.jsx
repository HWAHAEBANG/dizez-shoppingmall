import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { addOrUpdateToCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";
import useCart from "../hooks/useCart";

export default function Quantity({
  product,
  // product: { selectedQuantity }, 이렇게하면 디테일에서 올 때 튕기드라, 그렇다고 여기에 && 사용할 수도 없고
  comeFromCart,
  ////
  quantityFromDetail,
  setQuantityFromDetail,
}) {
  const { addOrUpdateCartItem } = useCart(); //
  //

  // const { uid } = useAuthContext();

  const selectedQuantity = product && product.selectedQuantity;

  // console.log(selectedQuantity);

  const countDown = () => {
    if (comeFromCart) {
      addOrUpdateCartItem.mutate({
        ...product,
        selectedQuantity: selectedQuantity - 1,
      });
      return;
    }
    setQuantityFromDetail((prev) => prev - 1);
  };

  const countUp = () => {
    if (comeFromCart) {
      addOrUpdateCartItem.mutate({
        ...product,
        selectedQuantity: selectedQuantity + 1,
      });
      return;
    }
    setQuantityFromDetail((prev) => prev + 1);
  };

  return (
    <div className=' border-2 border-gray-300 w-28 h-10 flex justify-around items-center'>
      <button
        className={
          quantityFromDetail <= 1 || selectedQuantity <= 1
            ? "text-xl text-gray-300"
            : "text-xl"
        }
        onClick={countDown}
        disabled={quantityFromDetail <= 1 || selectedQuantity <= 1}
      >
        <FiMinus />
      </button>
      <span>{comeFromCart ? selectedQuantity : quantityFromDetail}</span>
      <button className='text-xl' onClick={countUp}>
        <FiPlus />
      </button>
    </div>
  );
}
