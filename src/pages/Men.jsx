import React from "react";
import Banner from "../components/Banner";
import ShopForm from "../components/ShopForm";

export default function Men() {
  return (
    <div>
      <Banner
        title={"Newest Men Clothing"}
        subTitle={
          "Casual linen. Shirt design. 100% suede leather. Backstitch elbow patch"
        }
      />
      <ShopForm category={"Men"} />;
    </div>
  );
}
