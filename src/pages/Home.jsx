import React from "react";
import Advertise from "../components/Advertise";
import Event from "../components/Event";
import Main from "../components/Main";
import NewProduct from "../components/NewProduct";
import Promotion from "../components/Promotion";

export default function Home() {
  return (
    <div>
      <Main />
      <NewProduct />
      <Promotion />
      <Advertise />
      <Event />
    </div>
  );
}
