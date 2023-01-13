import React from "react";
import Advertise from "../components/Advertise";
import Event from "../components/Event";
import Main from "../components/Main";
import NewProduct from "../components/NewProduct";
import Promotion from "../components/Promotion";
import { useAuthContext } from "../context/AuthContext";

export default function Home() {
  const { user } = useAuthContext();
  // console.log(user);

  return (
    <div>
      <Main />
      <Promotion />
      <NewProduct />
      <Advertise />
      <Event />
    </div>
  );
}
