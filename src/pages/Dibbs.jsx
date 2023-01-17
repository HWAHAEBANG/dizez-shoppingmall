import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getDibbs } from "../api/firebase";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import { useAuthContext } from "../context/AuthContext";

export default function Dibbs() {
  const { uid } = useAuthContext();

  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["dibbs", uid || ""], () => getDibbs(uid), {
    enabled: !!uid,
  });

  return (
    <div className='pt-14'>
      <Banner title='Dibbs' subTitle='My Colletcion' />
      <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 '>
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              comeFromDibbs='true'
            />
          ))}
      </ul>
    </div>
  );
}
