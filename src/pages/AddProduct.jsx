// import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { set } from "firebase/database";
import React, { useEffect, useState } from "react";
// import { addNewProduct } from "../api/firebase";
import { uploadImage } from "../api/uploader";
import Banner from "../components/Banner";
import MainButton from "../components/ui/MainButton";
import useProducts from "../hooks/userProducts";
import { useAlert } from "react-alert";
import { FaObjectUngroup } from "react-icons/fa";

const INPUT_PROPERTY =
  "bg-zinc-100 x-2 h-12 p-2 rounded-sm mb-5 border flex items-center";
const LABEL_PROPERTY = "w-96 mb-2";
export default function AddProduct() {
  const [tags, setTags] = useState({ new: false, best: false });
  const [colorArray, setColorArray] = useState([]);
  // const [success, setSuccess] = useState(false);
  const [product, setProduct] = useState({
    category: "",
    title: "",
    price: "",
    description: "",
    size: "",
    color: "",
  });
  const [file, setFile] = useState();
  const { addProduct } = useProducts();
  const alert = useAlert();

  const handleTags = (e) => {
    // console.log(e.target.id);
    // console.log(e.target.checked);
    setTags({ ...tags, [e.target.id]: e.target.checked });
  };
  // setProduct((product) => ({ ...product, tags: tags }));
  // console.log(tags);
  // console.log(product);

  const handleCheck = (e) => {
    // console.log(e.target.checked);
    // console.log(e.target.id);
    e.target.checked && setColorArray([...colorArray, e.target.id]);

    let temp =
      !e.target.checked && colorArray.filter((item) => item !== e.target.id);
    temp && setColorArray(temp);
  };

  useEffect(() => {
    setProduct((product) => ({ ...product, color: colorArray, tags: tags }));
  }, [colorArray, tags]);

  // console.log(product);
  // console.log(colorArray);

  const handleChange = (e) => {
    console.log(e);
    const { name, value, files } = e.target;
    if (name === "file") {
      // console.log(files);
      setFile(files && Object.values(files));
      return;
    }
    setProduct((product) => ({ ...product, [name]: value, category: "Men" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const timeStamp = Date.now();
    uploadImage(file) //
      .then((url) => {
        addProduct.mutate(
          { product, url, timeStamp },
          {
            onSuccess: () => {
              alert.success("제품이 등록되었습니다.");
            },
          }
        );
      });
    setProduct({
      category: "",
      title: "",
      price: "",
      description: "",
      size: "",
      color: [],
      tags: {},
    });
    setFile();
  };

  console.log(file);
  // console.log(typeof file);
  // console.log(Object.assign({}, file));

  return (
    <>
      <Banner title='Register a New Product' subTitle='새 제품 등록하기' />
      <div className=' flex m-10 font-["Raleway"]'>
        <section className='basis-1/2 flex flex-col justify-center items-center'>
          {!file && (
            <div className='h-full w-full flex justify-center items-center bg-gray-50 text-gray-600 text-center'>
              사진을 첨부하시면 <br />
              미리보기가 생성됩니다.
            </div>
          )}
          {/* {file && (
            <img
            className=' max-h-screen'
            src={URL.createObjectURL(file)}
            alt='local file'
            />
          )} */}
          {/* {file &&
            file.map((item, index) => <span key={index}>{item.name}</span>)} */}
          {file && (
            <img
              className='h-full'
              src={URL.createObjectURL(file[0])}
              alt='local file'
            />
          )}
          <div className='flex'>
            {file &&
              file
                .slice(1)
                .map((item, index) => (
                  <img
                    key={index}
                    className='h-40 w-28 py-4 px-2'
                    src={URL.createObjectURL(item)}
                    alt='local file'
                  />
                ))}
          </div>
        </section>
        <section className='basis-1/2 px-20'>
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <label htmlFor='file' className={LABEL_PROPERTY}>
              Product Image (여러장 업로드로 리팩토링 예정)
            </label>
            {/* 업로드 완류 후 파일 이름 남는 현상 해결 요망 */}
            <input
              id='file'
              className={INPUT_PROPERTY}
              type='file'
              accept='image/* '
              name='file'
              onChange={handleChange}
              multiple
              required
            />
            <label htmlFor='category' className={LABEL_PROPERTY}>
              Category (옵션으로 리팩토링 예정)
            </label>
            {/* <input
              id='category'
              className={INPUT_PROPERTY}
              type='text'
              value={product.category ?? ""}
              name='category'
              onChange={handleChange}
              placeholder='카테고리를 입력해주세요.'
              required
            /> */}
            <select
              className={INPUT_PROPERTY}
              name='category'
              onChange={handleChange}
              required='required'
            >
              <option value='Men'>Men</option>
              <option value='Women'>Women</option>
              <option value='Accessories'>Accessories</option>
              <option value='Shoes'>Shoes</option>
            </select>
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
            <label className={LABEL_PROPERTY}>
              Color (체크박스로 리팩토링 예정)
            </label>
            <div className={INPUT_PROPERTY}>
              <input
                type='checkBox'
                id='black'
                className='mr-1'
                onChange={handleCheck}
              />
              <label htmlFor='black' className='mr-5'>
                Black
              </label>
              <input
                type='checkBox'
                id='white'
                className='mr-1'
                onChange={handleCheck}
              />
              <label htmlFor='white' className='mr-5'>
                White
              </label>
              <input
                type='checkBox'
                id='red'
                className='mr-1'
                onChange={handleCheck}
              />
              <label htmlFor='red' className='mr-5'>
                Red
              </label>
              <input
                type='checkBox'
                id='green'
                className='mr-1'
                onChange={handleCheck}
              />
              <label htmlFor='green' className='mr-5'>
                Green
              </label>
              <input
                type='checkBox'
                id='blue'
                className='mr-1'
                onChange={handleCheck}
              />
              <label htmlFor='blue' className='mr-5'>
                Blue
              </label>
              <input
                type='checkBox'
                id='yellow'
                className='mr-1'
                onChange={handleCheck}
              />
              <label htmlFor='yellow' className='mr-5'>
                Yellow
              </label>
              <input
                type='checkBox'
                id='pink'
                className='mr-1'
                onChange={handleCheck}
              />
              <label htmlFor='pink' className='mr-5'>
                Pink
              </label>
            </div>

            <label className={LABEL_PROPERTY}>Tags</label>
            <div className={INPUT_PROPERTY}>
              <input
                type='checkbox'
                id='new'
                className='mr-1'
                onChange={handleTags}
              />
              <label htmlFor='new' className='mr-5'>
                NEW
              </label>
              <input
                type='checkbox'
                id='best'
                className='mr-1'
                onChange={handleTags}
              />
              <label htmlFor='best' className='mr-5'>
                BEST
              </label>
            </div>
            <MainButton
              text='Upload'
              bgcolor='black'
              color='white'
              onSubmit={handleSubmit}
              length='full'
            />
          </form>
          {/* {success && <p className='my-2'>✅{success}</p>} */}
        </section>
      </div>
    </>
  );
}
