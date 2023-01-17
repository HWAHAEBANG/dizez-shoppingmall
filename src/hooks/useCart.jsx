import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { addOrUpdateToCart, getCart, removeFromCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();
  const cartQuery = useQuery(["cart", uid || ""], () => getCart(uid), {
    enabled: !!uid,
  });

  const addOrUpdateCartItem = useMutation(
    (product) => addOrUpdateToCart(uid, product),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["cart", uid]);
      },
    }
  );

  const removeCartItem = useMutation((id) => removeFromCart(uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["cart", uid]);
    },
  });

  return { cartQuery, addOrUpdateCartItem, removeCartItem };
}
