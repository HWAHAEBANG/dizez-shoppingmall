import React from "react";

export default function SortBar() {
  const test = () => {
    console.log("잘 작동됩니다 걱정하지 마세요 ㅎㅎ");
  };
  return (
    <div className='flex justify-between items-center h-16'>
      <div>
        <span className='font-bold'>{"5"}</span> Products Found
      </div>
      <div>
        <label htmlFor='sort'>sort by :</label>
        <select id='sort' className=' outline-none' onChange={test}>
          <option value=''>최신순</option>
          <option value=''>높은 가격순</option>
          <option value=''>낮은 가격순</option>
        </select>
      </div>
    </div>
  );
}
