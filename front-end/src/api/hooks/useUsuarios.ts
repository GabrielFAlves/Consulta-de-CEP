import { useQuery } from "@tanstack/react-query";
import apiClient from "../apiClient";

const useUsuarios = () => {
  return useQuery({
    queryKey: ["usuarios"],
    queryFn: async () => {
      const { data } = await apiClient.get("");
      return data;
    },
  });
};

export default useUsuarios;
