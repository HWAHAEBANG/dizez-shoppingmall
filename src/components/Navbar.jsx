import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { ImArrowUpRight, ImArrowUpLeft } from "react-icons/im";

import { useAuthContext } from "../context/AuthContext";
import useCart from "../hooks/useCart";
import useDibbs from "../hooks/useDibbs";
import { getAdminAuth } from "../api/firebase";

// 로그인 구현까지 완료되면 반응형 좀 손 보겠습니다~ -칵투스

export default function Navbar() {
  const [mouseOver, setMouseOver] = useState(false);
  const { user, uid, login, logout } = useAuthContext();

  const handleLogin = () => login();
  const handleLogout = () => logout();

  const {
    cartQuery: { data: cartProducts },
  } = useCart();

  const {
    dibbsQuery: { data: dibbsProducts },
  } = useDibbs();

  const getAuthority = () => {
    getAdminAuth(uid);
    window.location.reload();
  };

  return (
    <div className='relative'>
      {!user && (
        <div className='fixed right-52 top-20 z-20  p-5 rounded-2xl text-red-500'>
          <ImArrowUpRight className='absolute right-10 -top-2' />
          <p>로그인을 하시면 찜하기, 장바구니 기능을 이용하실 수 있습니다.</p>
          <p>Google 계정으로 간편하게 로그인이 가능합니다.</p>
        </div>
      )}
      {user && !user.isAdmin && (
        <div className='fixed right-52 top-20 z-20  p-5 rounded-2xl text-red-500'>
          <ImArrowUpLeft className='absolute left-10 -top-2' />
          <p>버튼을 눌러 관리자 권한을 받으시면</p>
          <p>새 제품 등록, 제품 정보 변경이 가능합니다.</p>
        </div>
      )}
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
                  {!cartProducts && "0"}
                  {dibbsProducts && dibbsProducts.length}
                </div>
              </Link>
              <Link to='/cart' className='flex items-center gap-2'>
                <FaShoppingBag />
                <div className='bg-black h-6 w-6 text-white text-sm text-center rounded-full'>
                  {!cartProducts && "0"}
                  {cartProducts && cartProducts.length}
                </div>
              </Link>
            </div>
            {user && user.isAdmin && (
              <Link to='/shop/add'>
                <button className='text-sm mx-5 bg-gray-700 text-white px-3 h-7 rounded-lg hover:brightness-200 w-36'>
                  새 제품 등록하기
                </button>
              </Link>
            )}
            {user && !user.isAdmin && (
              <button
                className='text-sm mx-5 bg-red-700 text-white px-3 h-7 rounded-lg hover:brightness-200 w-36'
                onClick={getAuthority}
              >
                관리자 권한 받기
              </button>
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
    </div>
  );
}
