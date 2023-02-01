import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Quantity from "../components/Quantity";
import MainButton from "../components/ui/MainButton";
import useCart from "../hooks/useCart";
// import useDibbs from "../hooks/useDibbs";
import { useAlert, transitions } from "react-alert";
import { useAuthContext } from "../context/AuthContext";

export default function ProductDetail() {
  const alert = useAlert();
  const { setUpdater } = useAuthContext();

  useEffect(() => {
    setUpdater((prev) => !prev);
  }, []);

  const {
    state: { product },
  } = useLocation();

  const { id, image, category, title, price, description, size, color, tags } =
    product;

  //이것도 나중에 원래대로 바꿔도 될 부분. 메인사진 안바뀌는 에러 났던부분
  const [mainImage, setMainImage] = useState(
    typeof image === "object" ? image[0] : image
  );

  useEffect(() => {
    setMainImage(typeof image === "object" ? image[0] : image);
  }, [product]);
  // 에러 여기까지. setMainImage 따로 하나 만드니까 됨

  const [selectedSize, setSelectedSize] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const { addOrUpdateCartItem } = useCart();

  if (JSON.parse(localStorage.getItem("viewedKey")) !== null) {
    let arr = JSON.parse(localStorage.getItem("viewedKey"));
    // console.log(arr);
    let already = arr.filter((item) => {
      // console.log(item);
      return item.id !== product.id;
    });
    already.unshift(product);
    if (already.length >= 6) {
      already.pop();
      localStorage.setItem("viewedKey", JSON.stringify(already));
    } else {
      localStorage.setItem("viewedKey", JSON.stringify(already));
    }
    // console.log(already);
  } else {
    localStorage.setItem("viewedKey", JSON.stringify([product]));
  }

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
          const test = "상품을 장바구니에 담았습니다.";
          alert.success(test);
        },
      });
    }
  };

  // console.log(image);
  // console.log(test);
  // const {
  //   dibbsQuery: { data: dibbsProducts },
  // } = useDibbs();

  return (
    <div className='pt-24 flex p-8 font-["Raleway"] '>
      <section className='basis-1/2'>
        <div className=' h-auto flex justify-center'>
          <img className=' h-128' src={mainImage} alt='local file' />
        </div>
        <div className='h-1/4 flex items-center justify-center'>
          {image && typeof image === "object"
            ? image
                // .slice(1)
                .map((item, index) => (
                  <img
                    key={index}
                    className=' h-36 w-28 py-4 px-2 cursor-pointer'
                    src={item}
                    alt='local file'
                    onClick={() => {
                      setMainImage(item);
                    }}
                  />
                ))
            : ""}
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
                  ? "text-center leading-7 text-sm border w-12  h-8 bg-black text-white cursor-pointer"
                  : "text-center leading-7 text-sm border w-12  h-8 cursor-pointer"
              }
              onClick={() => setSelectedSize(item)}
            >
              {item}
            </div>
          ))}
        </div>
        <div className='text-xl flex gap-2 items-center'>
          <span className='mr-10'>COLOR</span>
          {color &&
            color.map((item, index) => (
              <div
                key={index}
                className={
                  // 색상이 첫 번째 것만 표시되는 버그가 있음! 해결!
                  selectedColor === item
                    ? `w-8 h-8 border rounded-full bg-${
                        item === "black" || item === "white"
                          ? item
                          : item + "-500"
                      }
                      } cursor-pointer`
                    : `w-6 h-6 border rounded-full bg-${
                        item === "black" || item === "white"
                          ? item
                          : item + "-500"
                      }
                      }cursor-pointer`
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
