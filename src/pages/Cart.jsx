import React from "react";
import { useAuthContext } from "../context/AuthContext";

export default function Cart() {
  const { user } = useAuthContext();
  // console.log(user);
  return <div className='pt-14'>cart</div>;
}
