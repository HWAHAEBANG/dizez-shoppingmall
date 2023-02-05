import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getOnlyBest } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";
import ProductList from "./ProductList";

export default function OnlyBestList() {
  const { uid } = useAuthContext();

  const { data: products } = useQuery(
    ["products", uid || ""],
    () => getOnlyBest(uid),
    {
      enabled: !!uid,
      // staleTime: 1000 * 60,
    }
  );

  let test = [];

  products &&
    products.map((item) => {
      test.push(
        Object.values(item).filter(
          (thing) => thing.tags && thing.tags.best && thing.tags.best === true
        )
      );
      return test; // 오류 안 생기는지 잘 확인
    });

  return (
    <div className=' hidden xl:block mt-32'>
      <div className='flex flex-col items-center justify-center h-56 font-["Raleway"]'>
        <p className='text-xl mb-7'>
          <span className='font-bold'>T O P &nbsp; </span> P R O D U C T S
        </p>
        <p className='text-5xl'>Best Sellers At DI:ZEZ</p>
        <p className='text-center mt-6'>
          Cillum eu id enim aliquop aute ullamco anim Culpa deserunt <br />
          nostrud excepteur voluptate velit ipsum sess enim
        </p>
      </div>
      <ProductList products={test.flat()} comeFromMain='true' />
    </div>
  );
}
