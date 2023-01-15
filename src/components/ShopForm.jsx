import React from "react";
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

  const handleSort = () => {};

  return (
    <div className='pt-14 font-["Raleway"]'>
      <Banner
        title={"Newest Men Clothing"}
        subTitle={
          "Casual linen. Shirt design. 100% suede leather. Backstitch elbow patch"
        }
      />
      <SortBar products={products} onSort={handleSort} />
      {isLoading && <p>로딩중인데여..</p>}
      {error && <p>{error}</p>}
      <ProductList products={products} />
    </div>
  );
}
