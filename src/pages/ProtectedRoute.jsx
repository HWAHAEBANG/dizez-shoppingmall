import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useAuthContext();

  // console.log(user);

  // 로그인 정보를 받아오는 것이 느려서, 조건문이 먼저 실행되어 페이지
  // 이동이 튕기는 현상아 발생했음.

  // if (!user || (requireAdmin && !user.isAdmin)) {
  //   return <Navigate to='/' replace />;
  // }

  return children;
}
