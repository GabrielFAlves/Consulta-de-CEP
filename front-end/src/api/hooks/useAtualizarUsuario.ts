import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../apiClient";

const useAtualizarUsuario = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (user: any) => {
      const { data } = await apiClient.put(`/${user.id}`, user);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["usuarios"] });
    },
  });
};

export default useAtualizarUsuario;
