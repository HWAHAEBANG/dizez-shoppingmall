import React from "react";

export default function SortBar({ products, onSelected }) {
  return (
    <div className='flex justify-between items-center h-16 px-4'>
      <div>
        <span className='font-bold'>{products && products.length}</span>
        Products Found
      </div>
      <div>
        <label htmlFor='sort'>sort by :</label>
        <select id='sort' className=' outline-none' onChange={onSelected}>
          <option value='createdAt'>최신순</option>
          <option value='descendingOrder'>높은 가격순</option>
          <option value='ascendingOrder'>낮은 가격순</option>
        </select>
      </div>
    </div>
  );
}
