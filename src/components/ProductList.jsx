import React, { useState } from "react";
import ProductCard from "./ProductCard";
import MainButton from "./ui/MainButton";

export default function ProductList({ products }) {
  const [more, setMore] = useState(1);

  const countUp = () => {
    setMore((prev) => prev + 1);
  };

  return (
    <div className='text-center pb-20'>
      <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pb-16 '>
        {products &&
          products
            .slice(0, 8 * more)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </ul>
      <MainButton
        action={countUp}
        text='LOAD MORE'
        bgcolor='black'
        color='white'
      />
    </div>
  );
}
