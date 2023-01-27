import React, { useEffect, useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    }; // 이게 왜 있어할까?
  }, []);

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className='fixed bottom-10 right-10 w-15 h-15  z-10 flex flex-col items-center justify-center duration-200'
      >
        <BsArrowUpCircle className='text-4xl mb-2' />
        <p>TOP</p>
      </button>
    )
  );
}
