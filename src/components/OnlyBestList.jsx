import { useQuery } from "@tanstack/react-query";
import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { FiSettings } from "react-icons/fi";
import { getOnlyBest, logout } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";
import ProductList from "./ProductList";

export default function OnlyBestList() {
  const { uid } = useAuthContext();
  // console.log(uid);

  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products", uid || ""], () => getOnlyBest(uid), {
    enabled: !!uid,
    // staleTime: 1000 * 60,
  });

  let test = [];

  products &&
    products.map((item) => {
      // console.log(item);
      test.push(
        Object.values(item).filter(
          (thing) =>
            //console.log(thing)
            thing.tags && thing.tags.best && thing.tags.best === true
        )
      );
    });

  // console.log(test.flat());

  // products.map;

  return (
    <div className=' mt-32'>
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
