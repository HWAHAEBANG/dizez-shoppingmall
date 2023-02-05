import React from "react";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { useCookies } from "react-cookie";
import Countdown from "react-countdown";
import MainButton from "./ui/MainButton";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Popup() {
  const [open, setOpen] = useState(true);
  const [checked, setChecked] = useState(false);
  const [hasCookie, setHasCookie] = useState(false);
  const [cookies, setCookies] = useCookies();

  const handleClose = () => {
    setOpen((prev) => !prev);
  };

  const handleChange = (e) => {
    const changed = e.target.checked;
    changed ? setChecked(true) : setChecked(false);
  };

  const getExpiredDate = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  };

  useEffect(() => {
    if (cookies["DIZEZ_Cookie"]) {
      setHasCookie(true);
    } else {
      setHasCookie(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!checked && !open) {
      return;
    }
    if (checked && !open) {
      const expires = getExpiredDate(1);
      setCookies("DIZEZ_Cookie", true, { path: "/", expires: expires });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked, open]);

  return (
    <div className="font-['Raleway'] text-shadow sm:text-shadow-sm md:text-shadow-md lg:text-shadow-lg xl:text-shadow-xl ">
      {!hasCookie ? (
        <div
          className={
            open
              ? "fixed top-0 left-0 h-full w-full z-20 bg-black bg-opacity-70 flex items-center justify-center"
              : "hidden"
          }
        >
          <div className='relative w-80 xl:w-96 h-auto rounded-tl-3xl rounded-br-3xl overflow-hidden drop-shadow-2xl'>
            <RiCloseLine
              className='absolute top-3 right-3 w-5 h-5 cursor-pointer'
              onClick={handleClose}
            />
            <img src='./image/main/popup_1.jpg' alt='' />
            <div className='absolute top-8 left-8 '>
              <p className='text-xl mb-4  text-white'>
                <span className='font-bold'>DEAL</span> OF THE WEEK
              </p>
              <p className='text-5xl mb-32  xl:mb-48  text-white'>
                Time Sale
                <br />
                Olny
              </p>
              <Countdown
                date={Date.now() + 100000000}
                className='text-4xl font-bold text-shadow sm:text-shadow-sm md:text-shadow-md lg:text-shadow-lg xl:text-shadow-xl  text-white'
              />
              <p className='text-sm mb-3  text-white'>
                &nbsp;&nbsp;&nbsp;days &nbsp;&nbsp;&nbsp; hours
                &nbsp;&nbsp;&nbsp; mins &nbsp;&nbsp;&nbsp; sec
              </p>
              <Link to='/shop/women'>
                <MainButton text='Shop Now' bgcolor='white' color='black' />
              </Link>
            </div>
            <div className='absolute bottom-0 left-0'>
              <input
                className='m-2 '
                type='checkbox'
                id='checkbox'
                onChange={handleChange}
              />
              <label htmlFor='checkbox' className='text-white '>
                오늘 하루 더이상 보지 않기
              </label>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
