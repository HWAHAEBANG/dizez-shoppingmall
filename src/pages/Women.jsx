import React from "react";
import Banner from "../components/Banner";
import ShopForm from "../components/ShopForm";

export default function Women() {
  return (
    <div className='mt-14'>
      <Banner
        title={"Newest Women Clothing"}
        subTitle={
          "Casual linen. Shirt design. 100% suede leather. Backstitch elbow patch"
        }
      />
      <ShopForm category={"Women"} />;
    </div>
  );
}
