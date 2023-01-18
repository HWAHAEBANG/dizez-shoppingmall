import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addOrUpdateToDibbs, getDibbs, removeFromDibbs } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function useDibbs() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();
  const dibbsQuery = useQuery(["dibbs", uid || ""], () => getDibbs(uid), {
    enabled: !!uid,
  });

  const addOrUpdateDibbsItem = useMutation(
    (product) => addOrUpdateToDibbs(uid, product),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["dibbs", uid]);
      },
    }
  );

  const removeDibbsItem = useMutation((id) => removeFromDibbs(uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["dibbs", uid]);
    },
  });

  return { dibbsQuery, addOrUpdateDibbsItem, removeDibbsItem };
}
