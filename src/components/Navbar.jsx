import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { login, logout, onUserStateChange } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

// 로그인 구현까지 완료되면 반응형 좀 손 보겠습니다~ -칵투스

export default function Navbar() {
  const [mouseOver, setMouseOver] = useState(false);
  // const [user, setUser] = useState();

  // useEffect(() => {
  //   onUserStateChange((user) => {
  //     // console.log(user);
  //     setUser(user);
  //   });
  // }, []);

  const { user, login, logout } = useAuthContext();

  const handleLogin = () => login();
  const handleLogout = () => logout();

  // console.log(user);
  return (
    <div
      onMouseLeave={() => setMouseOver(false)}
      className={
        mouseOver
          ? "w-full h-24 bg-white duration-200 fixed left-0 2xl:px-36 z-10 font-['Raleway']"
          : "w-full h-14 bg-white duration-200 overflow-hidden fixed left-0 2xl:px-36 z-10 font-['Raleway']"
      }
    >
      <section className='flex justify-between items-center h-14'>
        <Link to='/' className='text-2xl mx-5 font-semibold '>
          DI:ZEZ
        </Link>
        <div className='flex flex-1 gap-6 ml-7 md:ml-28 text-lg duration-200'>
          <Link to='/'>Home</Link>
          <Link
            className='flex items-center'
            onMouseEnter={() => setMouseOver(true)}
          >
            Shop
            <IoIosArrowDown className='text-sm mt-2 ml-1' />
          </Link>
          <span>Blog</span>
          <span>Contact</span>
        </div>
        <div className='mx-10 flex gat-6 text-lg'>
          <div className='flex gap-7 mx-5'>
            <Link to='/dibbs' className='flex items-center gap-2'>
              <FaHeart />
              <div className='bg-black h-6 w-6 text-white text-sm text-center rounded-full'>
                3
              </div>
            </Link>
            <Link to='/cart' className='flex items-center gap-2'>
              <FaShoppingBag />
              <div className='bg-black h-6 w-6 text-white text-sm text-center rounded-full'>
                3
              </div>
            </Link>
          </div>
          {user && user.isAdmin && (
            <Link to='/shop/add'>
              <button className='text-sm mx-5 bg-gray-700 text-white px-3 h-7 rounded-lg hover:brightness-200 shrink-0'>
                새 제품 등록하기
              </button>
            </Link>
          )}
          {user && (
            <div className='mx-5 shrink-0'>
              {user.displayName}
              <span className='text-xs'> 님</span>
            </div>
          )}
          {user && (
            <button className='mx-5' onClick={handleLogout}>
              Logout
            </button>
          )}
          {!user && (
            <button className='mx-5' onClick={handleLogin}>
              Login
            </button>
          )}
        </div>
      </section>
      <section className='flex items-center ml-24 md:ml-44 gap-10'>
        <Link to='/shop/men'>Men</Link>
        <Link to='/shop/women'>Women</Link>
        <Link to='/shop/acc'>Accessories</Link>
        <Link to='/shop/shoes'>Shoes</Link>
      </section>
    </div>
  );
}
