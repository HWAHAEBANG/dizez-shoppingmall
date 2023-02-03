import React from "react";
import Banner from "../components/Banner";
import ShopForm from "../components/ShopForm";

export default function Acc() {
  return (
    <div className='mt-14'>
      <Banner
        title={"Newest Accessories & Bag"}
        subTitle={
          "Casual linen. Shirt design. 100% suede leather. Backstitch elbow patch"
        }
      />
      <ShopForm category={"Accessories"} />
    </div>
  );
}
