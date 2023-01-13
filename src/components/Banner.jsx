import React from "react";

export default function Banner({ title, subTitle }) {
  return (
    <div className='flex flex-col items-center justify-center h-56 border-b-2 font-["Raleway"]'>
      <p className='text-3xl mb-4'>{title}</p>
      <p className=''>{subTitle}</p>
    </div>
  );
}
