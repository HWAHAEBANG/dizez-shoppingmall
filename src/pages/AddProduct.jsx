import React, { useState } from "react";
import { uploadImage } from "../api/uploader";
import Banner from "../components/Banner";
import MainButton from "../components/ui/MainButton";

const INPUT_PROPERTY = "bg-zinc-100 x-2 h-12 p-2 rounded-sm mb-5 border";
const LABEL_PROPERTY = "w-96 mb-2";
export default function AddProduct() {
  const [product, setProduct] = useState({
    category: "",
    title: "",
    price: "",
    description: "",
    size: "",
    color: "",
  });
  const [file, setFile] = useState();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // console.log(e);
    if (name === "file") {
      setFile(files && files[0]);
      // console.log(files);
      // console.log(files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  // console.log(product);
  // console.log(file);
  const handleSubmit = (e) => {
    e.preventDefault();

    uploadImage(file).then((url) => {
      console.log(url);
    });
  };

  return (
    <>
      <Banner title='Register a New Product' subTitle='새 제품 등록하기' />
      <div className=' flex m-10 font-["Raleway"]'>
        <section className='basis-1/2 flex justify-center items-center'>
          {!file && (
            <div className='h-full w-full flex justify-center items-center bg-gray-50 text-gray-600 text-center'>
              사진을 첨부하시면 <br />
              미리보기가 생성됩니다.
            </div>
          )}
          {file && (
            <img
              className=' max-h-screen'
              src={URL.createObjectURL(file)}
              alt='local file'
            />
          )}
        </section>
        <section className='basis-1/2 px-20'>
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <label htmlFor='file' className={LABEL_PROPERTY}>
              Product Image
            </label>
            <input
              id='file'
              className={INPUT_PROPERTY}
              type='file'
              accept='image/* '
              name='file'
              onChange={handleChange}
              required
            />
            <label htmlFor='category' className={LABEL_PROPERTY}>
              Category
            </label>
            <input
              id='category'
              className={INPUT_PROPERTY}
              type='text'
              value={product.category ?? ""}
              name='category'
              onChange={handleChange}
              placeholder='카테고리를 입력해주세요.'
              required
            />
            <label htmlFor='title' className={LABEL_PROPERTY}>
              Product Name
            </label>
            <input
              id='title'
              className={INPUT_PROPERTY}
              type='text'
              value={product.title ?? ""}
              name='title'
              onChange={handleChange}
              placeholder='제품명을 입력해주세요.'
              required
            />
            <label htmlFor='price' className={LABEL_PROPERTY}>
              Price
            </label>
            <input
              id='price'
              className={INPUT_PROPERTY}
              type='number'
              value={product.price ?? ""}
              name='price'
              onChange={handleChange}
              placeholder='가격을 입력해주세요.'
              required
            />
            <label htmlFor='description' className={LABEL_PROPERTY}>
              Description
            </label>
            <input
              id='description'
              className={INPUT_PROPERTY}
              type='text'
              value={product.description ?? ""}
              name='description'
              onChange={handleChange}
              placeholder='제품설명을 입력해주세요.'
              required
            />
            <label htmlFor='size' className={LABEL_PROPERTY}>
              Size
            </label>
            <input
              id='size'
              className={INPUT_PROPERTY}
              type='text'
              value={product.size ?? ""}
              name='size'
              onChange={handleChange}
              placeholder='사이즈 종류를 ",(콤마)"로 구분하여 입력해주세요.'
              required
            />
            <label htmlFor='color' className={LABEL_PROPERTY}>
              Color
            </label>
            <input
              id='color'
              className={INPUT_PROPERTY}
              type='text'
              value={product.color ?? ""}
              name='color'
              onChange={handleChange}
              placeholder='색상 종류를 ",(콤마)"로 구분하여 입력해주세요.'
              required
            />
            <MainButton text='Upload' bgcolor='black' color='white' />
          </form>
        </section>
      </div>
    </>
  );
}
