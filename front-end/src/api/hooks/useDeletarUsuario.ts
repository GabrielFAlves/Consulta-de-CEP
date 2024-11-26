import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../apiClient";

const useDeletarUsuario = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userId: number) => {
      await apiClient.delete(`/${userId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["usuarios"] });
    },
  });
};

export default useDeletarUsuario;
