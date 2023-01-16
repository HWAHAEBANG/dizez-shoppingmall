import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { addOrUpdateToCart } from "../api/firebase";
import Quantity from "../components/Quantity";
import MainButton from "../components/ui/MainButton";
import { useAuthContext } from "../context/AuthContext";

export default function ProductDetail() {
  const { uid } = useAuthContext();
  const {
    state: { product },
  } = useLocation();

  const { id, image, category, title, price, description, size, color } =
    product;

  const [selectedSize, setSelectedSize] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  // console.log(selectedSize);
  // console.log(selectedColor);
  // console.log(selectedQuantity);

  // console.log(uid);

  const handleSubmit = () => {
    if (!selectedSize && !selectedColor) {
      alert("사이즈와 색상을 선택하세요");
    } else if (!selectedSize && selectedColor) {
      alert("사이즈를 선택하세요");
    } else if (selectedSize && !selectedColor) {
      alert("색상을 선택하세요");
    } else {
      const product = {
        id,
        image,
        category,
        title,
        price,
        selectedSize,
        selectedColor,
        selectedQuantity,
      };
      addOrUpdateToCart(uid, product);
      alert("장바구니에 담겼습니다 장바구니로 이동하시겠습니까?");
    }
  };

  return (
    <div className='pt-24 flex p-8 font-["Raleway"] '>
      <section className='basis-1/2'>
        <img src={image} alt='product image' className='w-full' />
      </section>
      <section className='pt-10 pl-28 flex flex-col gap-4 basis-1/2'>
        <p>{category}</p>
        <p className='text-3xl'>{title}</p>
        <p className='text-2xl'>￦ {price}</p>
        <p>{description}</p>
        <div className='text-xl flex gap-2 mt-14'>
          <span className='mr-16'>SIZE</span>
          {size.map((item, index) => (
            <div
              key={index}
              className={
                selectedSize === item
                  ? "text-center leading-7 text-sm border w-12  h-8 bg-black text-white"
                  : "text-center leading-7 text-sm border w-12  h-8"
              }
              onClick={() => setSelectedSize(item)}
            >
              {item}
            </div>
          ))}
        </div>
        <div className='text-xl flex gap-2 items-center'>
          <span className='mr-10'>COLOR</span>
          {color.map((item, index) => (
            <div
              key={index}
              className={
                // 색상이 첫 번째 것만 표시되는 버그가 있음!
                selectedColor === item
                  ? `w-8 h-8 border rounded-full bg-${item}-600`
                  : `w-6 h-6 border rounded-full bg-${item}-600`
              }
              onClick={() => setSelectedColor(item)}
            ></div>
          ))}
        </div>
        <div className='flex gap-2 mt-8'>
          <Quantity setSelectedQuantity={setSelectedQuantity} />
          <MainButton
            text='ADD TO BASKET'
            bgcolor='black'
            color='white'
            action={handleSubmit}
          />
        </div>
      </section>
    </div>
  );
}
