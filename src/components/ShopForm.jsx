import React, { useEffect, useState } from "react";
import { getProducts } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import ProductList from "../components/ProductList";
import SortBar from "../components/SortBar";

export default function ShopForm({ category }) {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products", { category }], () => getProducts(category));

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
  console.log(order);

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

  return (
    <div className='pt-14 font-["Raleway"]'>
      <Banner
        title={"Newest Men Clothing"}
        subTitle={
          "Casual linen. Shirt design. 100% suede leather. Backstitch elbow patch"
        }
      />
      <SortBar products={products} onSelected={handleSelected} />
      {isLoading && <p>로딩중인데여..</p>}
      {error && <p>{error}</p>}
      <ProductList products={sortedProducts} />
    </div>
  );
}
