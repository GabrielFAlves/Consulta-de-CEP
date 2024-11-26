import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../apiClient";

const useCriarUsuario = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (novoUsuario: any) => {
      const { data } = await apiClient.post("", novoUsuario);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["usuarios"] });
    },
  });
};

export default useCriarUsuario;
