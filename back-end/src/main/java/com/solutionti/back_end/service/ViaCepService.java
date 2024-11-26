package com.solutionti.back_end.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ViaCepService {

    private static final String VIA_CEP_URL = "https://viacep.com.br/ws/{cep}/json/";

    public Object buscarCep(String cep) {
        try {
            RestTemplate restTemplate = new RestTemplate();
            return restTemplate.getForObject(VIA_CEP_URL, Object.class, cep);
        } catch (Exception e) {
            System.err.println("Erro ao consumir a API ViaCEP: " + e.getMessage());
            return null;
        }
    }
}
