import React from "react";

export default function NotFound() {
  return (
    <div className='pt-14 flex flex-col items-center justify-center h-screen'>
      <img src='../image/main/error_1.jpg' alt='' className='w-96 h-96' />
      <p>페이지를 불러올 수 없습니다. 관리자에게 문의 바랍니다.</p>
      <p>이용에 불편을 드려 대단히 죄송합니다.</p>
    </div>
  );
}
