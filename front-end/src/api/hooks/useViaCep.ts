import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCep = async (cep: string) => {
  if (cep.length !== 8 || !/^\d+$/.test(cep)) {
    throw new Error("CEP inválido");
  }

  const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  if (data.erro) {
    throw new Error("CEP não encontrado");
  }

  return data;
};

const useViaCep = (cep: string) => {
  return useQuery({
    queryKey: ["viacep", cep],
    queryFn: () => fetchCep(cep),
    enabled: !!cep && cep.length === 8, // Ativa apenas se o CEP for válido
    retry: false, // Evita re-tentar em caso de erro
  });
};

export default useViaCep;
