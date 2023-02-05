import { useQuery } from "@tanstack/react-query";

import React from "react";

import { getOnlyNew } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";
import ProductList from "./ProductList";

export default function OnlyNewList() {
  const { uid } = useAuthContext();
  // console.log(uid);

  const { data: products } = useQuery(
    ["products", uid || ""],
    () => getOnlyNew(uid),
    {
      enabled: !!uid,
      // staleTime: 1000 * 60,
    }
  );

  let test = [];

  products &&
    products.map((item) => {
      // console.log(item);
      test.push(
        Object.values(item).filter(
          (thing) =>
            //console.log(thing)
            thing.tags && thing.tags.new && thing.tags.new === true
        )
      );
      return test;
    });

  // console.log(test.flat());
  // products.map;

  return (
    <div className='hidden xl:block mt-32'>
      <div className='flex flex-col items-center justify-center h-56 font-["Raleway"]'>
        <p className='text-xl mb-7'>
          <span className='font-bold'>N E W &nbsp; </span> C O L L E C T I O N S
        </p>
        <p className='text-5xl'>Featured Products</p>
      </div>
      <ProductList products={test.flat()} comeFromMain='true' />
    </div>
  );
}
