package com.solutionti.back_end.service;

import com.solutionti.back_end.entity.Usuario;
import com.solutionti.back_end.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    // Listar todos os usuários
    public List<Usuario> listarTodos() {
        return usuarioRepository.findAll();
    }

    // Buscar usuário por ID
    public Optional<Usuario> buscarPorId(Long id) {
        return usuarioRepository.findById(id);
    }

    // Salvar um novo usuário
    public Usuario salvar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    // Atualizar um usuário existente
    public Optional<Usuario> atualizar(Long id, Usuario usuarioAtualizado) {
        return usuarioRepository.findById(id).map(usuario -> {
            usuario.setNome(usuarioAtualizado.getNome());
            usuario.setCpf(usuarioAtualizado.getCpf());
            usuario.setCep(usuarioAtualizado.getCep());
            usuario.setLogradouro(usuarioAtualizado.getLogradouro());
            usuario.setBairro(usuarioAtualizado.getBairro());
            usuario.setCidade(usuarioAtualizado.getCidade());
            usuario.setEstado(usuarioAtualizado.getEstado());
            return usuarioRepository.save(usuario);
        });
    }

    // Deletar usuário por ID
    public void deletar(Long id) {
        usuarioRepository.deleteById(id);
    }

}
