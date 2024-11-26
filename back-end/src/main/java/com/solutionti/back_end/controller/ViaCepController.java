package com.solutionti.back_end.controller;

import com.solutionti.back_end.service.ViaCepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/viacep")
@CrossOrigin(origins = "http://localhost:5173")
public class ViaCepController {

    @Autowired
    private ViaCepService viaCepService;

    @GetMapping("/{cep}")
    public ResponseEntity<Object> buscarCep(@PathVariable String cep) {
        Object response = viaCepService.buscarCep(cep);
        if (response == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(response);
    }
}
