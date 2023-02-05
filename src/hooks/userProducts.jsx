import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewProduct } from "../api/firebase";

export default function useProducts() {
  const queryClient = useQueryClient();

  // const productsQuery = useQuery(["products"], fetchProducts, {
  //   staleTime: 1000 * 60,
  // }); 하 이거 있으면 에러남.

  const addProduct = useMutation(
    ({ product, url, timeStamp }) => addNewProduct(product, url, timeStamp),
    {
      onSuccess: () => queryClient.invalidateQueries(["products"]),
    }
  );

  return { addProduct };
}
