import React, { useEffect, useState } from "react";
import { uploadImage } from "../api/uploader";
import Banner from "../components/Banner";
import MainButton from "../components/ui/MainButton";
import useProducts from "../hooks/userProducts";
import { useAlert } from "react-alert";
import { ReactComponent as Reservation } from "../loading.svg";

const INPUT_PROPERTY =
  "bg-zinc-100 x-2 h-12 p-2 rounded-sm mb-5 border flex items-center outline-none";
const LABEL_PROPERTY = "w-80 mb-2";
export default function AddProduct() {
  const alert = useAlert();
  const { addProduct } = useProducts();
  const [tags, setTags] = useState({ new: false, best: false });
  const [colorArray, setColorArray] = useState([]);
  const [product, setProduct] = useState({
    category: "",
    title: "",
    price: "",
    description: "",
    size: "",
    color: "",
  });
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [mainImage, setMainImage] = useState();

  const handleTags = (e) => {
    setTags({ ...tags, [e.target.id]: e.target.checked });
  };

  const handleCheck = (e) => {
    e.target.checked && setColorArray([...colorArray, e.target.id]);

    let temp =
      !e.target.checked && colorArray.filter((item) => item !== e.target.id);
    temp && setColorArray(temp);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (value.length !== 0 && name && name === "file") {
      console.log(files);
      if (files.length > 5) {
        setFile(Array.prototype.slice.call(files, 0, 5));
      } else setFile(files && Object.values(files));
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    let colorNullCheck = [];
    for (let i = 6; i < 15; i++) {
      // 모두 false면 alert
      colorNullCheck.push(e.target[i].checked);
    }
    if (product.category === "" || product.category === "unselected") {
      alert.error("카테고리를 선택해주세요.");
    } else {
      if (!colorNullCheck.includes(true)) {
        alert.error("색상을 선택해주세요.");
      } else {
        alert.info("업로드 중입니다. 잠시만 기다려주세요.");
        setTimeout(() => {
          alert.info("용량이 커서 시간이 조금 걸리네요 😅");
        }, 7000);
        setTimeout(() => {
          alert.info("죄송해요 정말 거의 다 됐어요 😥");
        }, 50000);
        setTimeout(() => {
          alert.info(
            "렉걸린 거 아니에요. 대용량 파일이 원래 엄청 오래 걸려요 😭"
          );
        }, 200000);
        const timeStamp = Date.now();
        uploadImage(file) //
          .then((url) => {
            addProduct.mutate(
              { product, url, timeStamp },
              {
                onSuccess: () => {
                  setIsLoading(false);
                  alert.success("상품이 등록되었습니다.");
                  window.location.reload();
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
      }
    }
  };

  useEffect(() => {
    setProduct((product) => ({ ...product, color: colorArray, tags: tags }));
  }, [colorArray, tags]);

  return (
    <>
      <Banner title='Register a New Product' subTitle='새 상품 등록하기' />
      <div className=' flex flex-col lg:flex-row m-10 font-["Raleway"]'>
        <section className='basis-1/2 flex flex-col justify-center items-center px-10'>
          {!file && (
            <div className='h-40  lg:h-full w-full flex justify-center items-center bg-gray-50 text-gray-600 text-center'>
              이미지를 첨부하시면 <br />
              미리보기가 생성됩니다.
            </div>
          )}

          {file && (
            <img
              className=''
              src={URL.createObjectURL(mainImage ? mainImage : file[0])}
              alt='local file'
            />
          )}
          <div className='flex'>
            {file &&
              file.map((item, index) => (
                <img
                  key={index}
                  className='h-20 w-18 lg:h-40 lg:w-28 py-4 px-1 lg:px-2'
                  src={URL.createObjectURL(item)}
                  alt='local file'
                  onClick={() => {
                    setMainImage(item);
                  }}
                />
              ))}
          </div>
        </section>
        <section className='basis-1/2 lg:backdrop:px-10'>
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <label htmlFor='file' className={LABEL_PROPERTY}>
              Product Image (최대 5장까지)
            </label>
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
              Category
            </label>
            <select
              className={INPUT_PROPERTY}
              name='category'
              onChange={handleChange}
              required='required'
            >
              <option value='unselected'>카테고리를 선택해주세요.</option>
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
              placeholder='상품명을 입력해주세요.'
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
              onWheel={(e) => e.target.blur()}
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
              placeholder='상품설명을 입력해주세요.'
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
            <label className={LABEL_PROPERTY}>Color</label>
            <div className='flex flex-col lg:flex-row bg-zinc-100 x-2 lg-18 lg:h-12 p-2 rounded-sm mb-5 border items-center outline-none'>
              <div>
                <input
                  type='checkBox'
                  id='black'
                  className='mr-1'
                  onChange={handleCheck}
                />
                <label htmlFor='black' className='mr-3'>
                  Black
                </label>
                <input
                  type='checkBox'
                  id='white'
                  className='mr-1'
                  onChange={handleCheck}
                />
                <label htmlFor='white' className='mr-3'>
                  White
                </label>
                <input
                  type='checkBox'
                  id='red'
                  className='mr-1'
                  onChange={handleCheck}
                />
                <label htmlFor='red' className='mr-3'>
                  Red
                </label>
                <input
                  type='checkBox'
                  id='green'
                  className='mr-1'
                  onChange={handleCheck}
                />
                <label htmlFor='green' className='mr-3'>
                  Green
                </label>
              </div>
              <div>
                <input
                  type='checkBox'
                  id='blue'
                  className='mr-1'
                  onChange={handleCheck}
                />
                <label htmlFor='blue' className='mr-3'>
                  Blue
                </label>
                <input
                  type='checkBox'
                  id='yellow'
                  className='mr-1'
                  onChange={handleCheck}
                />
                <label htmlFor='yellow' className='mr-3'>
                  Yellow
                </label>
                <input
                  type='checkBox'
                  id='pink'
                  className='mr-1'
                  onChange={handleCheck}
                />
                <label htmlFor='pink' className='mr-3'>
                  Pink
                </label>
              </div>
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
            {isLoading ? (
              <div className=' h-20 w-20  animate-spin mx-auto'>
                <Reservation className='h-full w-full ' />
              </div>
            ) : (
              <MainButton
                text='Upload'
                bgcolor='black'
                color='white'
                onSubmit={handleSubmit}
                length='full'
              />
            )}
          </form>
        </section>
      </div>
    </>
  );
}
