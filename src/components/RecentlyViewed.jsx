import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function RecentlyViewed() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  // let arr;
  const [viewed, setViewed] = useState([]);
  const handleClick = () => {
    setVisible((prev) => !prev);
  };
  const [clicked, setClicked] = useState(false);

  // product card 눌렀을 때 바로 UI업데이트 되게 하는 것은 아직 안됨
  // 정녕 context를 써야하는 것인가...
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("viewedKey")) !== null) {
      setViewed(JSON.parse(localStorage.getItem("viewedKey")));
      // console.log(viewed);
    } else {
      return;
    }
  }, [clicked, visible]);

  // console.log(viewed);

  return (
    <div className='fixed top-1/3 right-5 '>
      <div
        className='absolute -top-10 right-0 w-8 h-8 flex justify-center items-center border rounded-full bg-slate-200 cursor-pointer'
        onClick={handleClick}
      >
        {visible ? <RxCross2 /> : <FaRegEye />}
      </div>
      {visible ? (
        <div className='h-96 w-32 bg-opacity-80 rounded-xl border overflow-hidden bg-white'>
          <div className='border-b h-10 text-center leading-10 bg-zinc-100'>
            {`최근 본 상품 (${viewed ? viewed.length : "0"})`}
          </div>
          <div className='p-3 h-80 overflow-y-scroll flex flex-col gap-1'>
            {viewed && viewed.length === 0 ? (
              <p className='text-xs text-center m-auto'>
                최근 본 상품이 없습니다.
              </p>
            ) : (
              viewed.map((item) => (
                <img
                  key={item.id}
                  src={
                    typeof item.image === "object" ? item.image[0] : item.image
                  }
                  alt=''
                  onClick={() => {
                    navigate(`/shop/${item.id}`, {
                      state: { product: item },
                    });
                    setClicked((prev) => !prev);
                  }}
                />
                // 이부분도 나중에는 필요없어 지겠네
              ))
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
