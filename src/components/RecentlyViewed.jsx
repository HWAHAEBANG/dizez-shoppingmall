import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";

export default function RecentlyViewed() {
  const navigate = useNavigate();
  const { updater } = useAuthContext();

  const [visible, setVisible] = useState(true);
  const [viewed, setViewed] = useState([]);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setVisible((prev) => !prev);
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("viewedKey")) !== null) {
      setViewed(JSON.parse(localStorage.getItem("viewedKey")));
    } else {
      return;
    }
  }, [clicked, updater]);

  return (
    <div className='fixed left-3 bottom-16 lg:top-1/3 lg:left-auto lg:right-5 '>
      <div
        className='hidden lg:flex absolute left-0 -bottom-8 lg:-top-10 lg:left-auto lg:right-0 w-8 h-8 justify-center items-center border rounded-full bg-slate-100 cursor-pointer'
        onClick={handleClick}
      >
        {visible ? <RxCross2 /> : <FaRegEye />}
      </div>
      <div
        className='lg:hidden absolute left-0 -bottom-8 lg:-top-10 lg:right-0 w-8 h-8 flex justify-center items-center border rounded-full bg-slate-100 cursor-pointer'
        onClick={handleClick}
      >
        {visible ? <FaRegEye /> : <RxCross2 />}
      </div>
      {visible ? (
        <div className='hidden lg:block h-96 w-32 bg-opacity-80 rounded-xl border overflow-hidden bg-white '>
          <div className='border-b h-10 text-center text-sm leading-10 bg-zinc-100'>
            {`최근 본 상품 (${viewed ? viewed.length : "0"})`}
          </div>
          <div className='p-3 pr-5 h-80 flex flex-col gap-1 scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-track-zinc-100 overflow-y-scroll'>
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
      {!visible ? (
        <div className='lg:hidden h-96 w-32 bg-opacity-80 rounded-xl border overflow-hidden bg-white '>
          <div className='border-b h-10 text-center text-sm leading-10 bg-zinc-100'>
            {`최근 본 상품 (${viewed ? viewed.length : "0"})`}
          </div>
          <div className='p-3 pr-5 h-80 flex flex-col gap-1 scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-track-zinc-100 overflow-y-scroll'>
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
