import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { ImArrowUpRight, ImArrowUpLeft } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFolderPlus } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useAuthContext } from "../context/AuthContext";
import useCart from "../hooks/useCart";
import useDibbs from "../hooks/useDibbs";
import { getAdminAuth } from "../api/firebase";

export default function Navbar() {
  const { user, uid, login, logout } = useAuthContext();
  const [mouseOver, setMouseOver] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [closed, setClosed] = useState(false);
  const [touched, setTouched] = useState(false);

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

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  const handleClose = () => {
    setClosed((prev) => !prev);
  };

  return (
    <div className='fixed z-20'>
      {!user && !closed && (
        <div className='hidden lg:block fixed top-20 text-xs lg:text-0  lg:right-10 lg:top-20 2xl:right-52 2xl:top-24 z-20  px-5 py-2 rounded-sm text-zinc-800 text-center bg-black bg-opacity-10'>
          <ImArrowUpRight className='absolute right-28 lg:right-10 -top-7 text-xl' />
          <RxCross2
            className='absolute right-1 -top-5 text-lg'
            onClick={handleClose}
          />
          <p>로그인을 하시면 찜하기, 장바구니 기능을 이용하실 수 있습니다.</p>
          <p>Google 계정으로 간편하게 로그인이 가능합니다.</p>
        </div>
      )}
      {user && !user.isAdmin && !closed && (
        <div className='hidden lg:block fixed right-5 top-20 text-xs lg:text-0  lg:right-20 lg:top-20 2xl:right-52 2xl:top-24 z-20  px-5 py-2 rounded-sm text-zinc-800 text-center bg-black bg-opacity-10'>
          <ImArrowUpRight className='absolute left-32 -top-7 text-xl lg:hidden' />
          <ImArrowUpLeft className='absolute left-10 -top-7 text-xl hidden lg:block' />
          <RxCross2
            className='absolute right-1 -top-5 text-lg'
            onClick={handleClose}
          />
          <p>버튼을 눌러 관리자 권한을 받으시면</p>
          <p>새 상품 등록, 상품 정보 변경이 가능합니다.</p>
        </div>
      )}
      <div
        onMouseLeave={() => setMouseOver(false)}
        className={
          mouseOver
            ? "w-full h-24 bg-white duration-200 fixed left-0 2xl:px-36 z-10 font-['Raleway']"
            : "w-full h-14 bg-white duration-200 lg:overflow-hidden fixed left-0 2xl:px-36 z-10 font-['Raleway']"
        }
      >
        <section className='flex justify-between items-center h-14'>
          <Link to='/' className='text-2xl ml-5 mr-0 lg:mr-5 font-semibold '>
            DI:ZEZ
          </Link>
          <div className='hidden lg:flex flex-1 gap-6 ml-7 md:ml-28 text-lg duration-200'>
            <Link to='/'>Home</Link>
            <Link
              to='/shop/men'
              className='flex items-center'
              onMouseEnter={() => setMouseOver(true)}
            >
              Shop
              <IoIosArrowDown className='text-sm mt-2 ml-1' />
            </Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contact'>Contact</Link>
          </div>
          <div className='lg:mx-10 flex text-lg'>
            <div className='flex gap-3 lg:gap-7 mx-2 lg:mx-5'>
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
                <button className='hidden lg:block text-sm mx-5 bg-gray-700 text-white px-3 h-7 rounded-lg hover:brightness-200 w-36'>
                  새 상품 등록하기
                </button>
                <BsFolderPlus className='lg:hidden text-3xl mx-3' />
              </Link>
            )}
            {user && !user.isAdmin && (
              <div className='relative w-28 lg:w-36 h-7 lg:mx-5'>
                <button
                  className='w-28 lg:w-36 h-7 lg:mx-5 lg:px-3 z-30 absolute text-xs lg:text-sm  bg-red-700 text-white   rounded-lg hover:brightness-200 '
                  onClick={getAuthority}
                >
                  관리자 권한 받기
                </button>
                <div className='w-28 lg:w-36 h-7 lg:mx-5 lg:px-3 absolute bg-red-700 rounded-lg animate-ping-slow'></div>
              </div>
            )}
            {user && (
              <div className='hidden lg:block mx-5 shrink-0'>
                {user.displayName}
                <span className='text-xs'> 님</span>
              </div>
            )}
            {user && (
              <button className='hidden lg:block mx-5' onClick={handleLogout}>
                Logout
              </button>
            )}
            {!user && (
              <div className='relative'>
                <button
                  className='ml-5 animate-ping-slow absolute'
                  onClick={handleLogin}
                >
                  Login
                </button>
                <button className=' ml-5'>Login</button>
              </div>
            )}
          </div>
          <GiHamburgerMenu
            className='text-3xl mr-5 lg:hidden'
            onClick={handleClick}
          />
        </section>
        {clicked && (
          <div className='flex flex-col lg:flex-row items-center lg:ml-24 2xl:ml-44 gap-4 lg:gap-10 bg-white lg:bg-none w-screen py-4 lg:py-0'>
            <Link to='/' onClick={handleClick}>
              Home
            </Link>
            <Link
              className='flex items-center'
              onClick={() => setTouched((prev) => !prev)}
            >
              Shop
              <IoIosArrowDown className='text-sm mt-2 ml-1' />
            </Link>
            {touched && (
              <section className='flex flex-row justify-center items-center gap-8 bg-gray-100 w-full transition-height ease-in-out h-12 border-y'>
                <Link to='/shop/men' onClick={handleClick}>
                  Men
                </Link>
                <Link to='/shop/women' onClick={handleClick}>
                  Women
                </Link>
                <Link to='/shop/acc' onClick={handleClick}>
                  Accessories
                </Link>
                <Link to='/shop/shoes' onClick={handleClick}>
                  Shoes
                </Link>
              </section>
            )}
            <Link to='/blog' onClick={handleClick}>
              Blog
            </Link>
            <Link to='/contact' onClick={handleClick}>
              Contact
            </Link>
            {user && (
              <div className='mx-5 text-sm mt-12 mb-3 shrink-0 block lg:hidden'>
                {user.displayName}
                <span className='text-xs'> 님</span>
              </div>
            )}
            {user && (
              <button
                className='lg:hidden lg:mx-5'
                onClick={() => {
                  handleLogout();
                  handleClick();
                }}
              >
                Logout
              </button>
            )}
          </div>
        )}
        <section className='hidden lg:flex  items-center lg:ml-24 2xl:ml-44 gap-4 lg:gap-10 bg-white lg:bg-none w-screen py-4 lg:py-0'>
          <Link to='/shop/men'>Men</Link>
          <Link to='/shop/women'>Women</Link>
          <Link to='/shop/acc'>Accessories</Link>
          <Link to='/shop/shoes'>Shoes</Link>
        </section>
      </div>
    </div>
  );
}
