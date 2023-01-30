import { useQuery } from "@tanstack/react-query";
import React, { useState, CSSProperties } from "react";
import { getDibbs } from "../api/firebase";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import { useAuthContext } from "../context/AuthContext";
import ClipLoader from "react-spinners/ClipLoader";

export default function Dibbs() {
  const { uid } = useAuthContext();

  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["dibbs", uid || ""], () => getDibbs(uid), {
    enabled: !!uid,
  });

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "gray",
  };
  let [color, setColor] = useState("#ffffff");

  return (
    <div className='pt-14'>
      <Banner title='Dibbs' subTitle='My Colletcion' />
      {isLoading && (
        <div className='h-screen pt-52'>
          <ClipLoader
            color={color}
            loading={isLoading}
            cssOverride={override}
            size={150}
            aria-label='Loading Spinner'
            data-testid='loader'
          />
        </div>
      )}
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
