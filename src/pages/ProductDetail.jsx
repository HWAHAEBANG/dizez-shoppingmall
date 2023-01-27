import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Quantity from "../components/Quantity";
import MainButton from "../components/ui/MainButton";
import useCart from "../hooks/useCart";
// import useDibbs from "../hooks/useDibbs";
import { useAlert, transitions } from "react-alert";

export default function ProductDetail() {
  const alert = useAlert();

  const {
    state: { product },
  } = useLocation();

  const { id, image, category, title, price, description, size, color, tags } =
    product;

  const [mainImage, setMainImage] = useState(image[0]);

  const [selectedSize, setSelectedSize] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const { addOrUpdateCartItem } = useCart();

  const handleSubmit = () => {
    if (!selectedSize && !selectedColor) {
      alert.error("사이즈와 색상을 선택하세요");
    } else if (!selectedSize && selectedColor) {
      alert.error("사이즈를 선택하세요");
    } else if (selectedSize && !selectedColor) {
      alert.error("색상을 선택하세요");
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
      addOrUpdateCartItem.mutate(product, {
        onSuccess: () => {
          // setSuccess("장바구니에 추가되었습니다.");
          // setTimeout(() => setSuccess(null), 3000);
        },
      });

      const test = "상품을 장바구니에 담았습니다.";
      alert.success(test);
    }
  };

  console.log(image);
  // console.log(test);
  // const {
  //   dibbsQuery: { data: dibbsProducts },
  // } = useDibbs();

  return (
    <div className='pt-24 flex p-8 font-["Raleway"] '>
      <section className='basis-1/2'>
        {/* {image &&
          image.map((item, index) => (
            <img src={item} key={index} alt='product' className='w-full' />
          ))} */}
        {/* {image && <img className='h-full' src={image[0]} alt='local file' />} */}
        <div className=' h-auto flex justify-center'>
          {image && <img className=' h-128' src={mainImage} alt='local file' />}
        </div>
        <div className='h-1/4 flex items-center justify-center'>
          {image &&
            image
              // .slice(1)
              .map((item, index) => (
                <img
                  key={index}
                  className='h-40 w-28 py-4 px-2'
                  src={item}
                  alt='local file'
                  onClick={() => {
                    setMainImage(item);
                  }}
                />
              ))}
        </div>
      </section>
      <section className='pt-10 pl-28 flex flex-col gap-4 basis-1/2'>
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
        <p>{category}</p>
        <p className='text-3xl -mt-6'>{title}</p>
        <p className='text-2xl'>￦ {price}</p>
        <p>{description}</p>
        <div className='text-xl flex gap-2 mt-14 '>
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
        <div className='flex gap-2 text-xl mb-8'>
          <span className='mr-2'>QUANTITY</span>
          <Quantity
            quantityFromDetail={selectedQuantity}
            setQuantityFromDetail={setSelectedQuantity}
          />
        </div>
        <MainButton
          text='ADD TO BASKET'
          bgcolor='black'
          color='white'
          action={handleSubmit}
          length='full'
        />
      </section>
    </div>
  );
}
