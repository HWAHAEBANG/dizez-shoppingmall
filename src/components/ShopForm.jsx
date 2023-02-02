import React, { useEffect, useState, CSSProperties } from "react";
import { getProducts } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import ProductList from "../components/ProductList";
import SortBar from "../components/SortBar";
import ClipLoader from "react-spinners/ClipLoader";

export default function ShopForm({ category }) {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products", category], () => getProducts(category), {
    staleTime: 1000 * 60,
  });

  const [order, setOrder] = useState(["timeStamp", "createdAt"]);

  // Sort 기능 바람직해보이지 않음. 그러나 작동은 잘 됨. 추후 리팩토리 요망
  // sort 시작점
  let sortedProducts = {};

  const handleSelected = (e) => {
    const sortOrder = e.target.value;
    if (sortOrder === "ascendingOrder") {
      setOrder(["price", "ascendingOrder"]);
    } else if (sortOrder === "descendingOrder") {
      setOrder(["price", "descendingOrder"]);
    } else {
      setOrder(["timeStamp", "createdApp"]);
    }
  };
  // console.log(order);

  if (order[1] === "ascendingOrder") {
    sortedProducts =
      products && products.sort((a, b) => a[order[0]] - b[order[0]]);
  } else if (order[1] === "descendingOrder") {
    sortedProducts =
      products && products.sort((a, b) => b[order[0]] - a[order[0]]);
  } else {
    sortedProducts =
      products && products.sort((a, b) => b[order[0]] - a[order[0]]);
  }
  // sort 끝점

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "gray",
  };
  let [color, setColor] = useState("#ffffff");
  return (
    <div className='font-["Raleway"]'>
      <SortBar products={products} onSelected={handleSelected} />
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
      {error && <p>{error}</p>}
      <ProductList products={sortedProducts} />
    </div>
  );
}
