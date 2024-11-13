package br.com.poo.poobank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.poo.poobank.domain.Usuario;
import br.com.poo.poobank.repository.UsuarioRepository;
import jakarta.websocket.server.PathParam;

@RestController
@RequestMapping("/usuario")

public class UsuarioController {
    @Autowired
    private UsuarioRepository repository;

    @GetMapping
    public List<Usuario> buscarTodos(){
        //return repository.buscarSemSenha();
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Usuario carregarUser(@PathVariable Integer id){
        return repository.findById(id).get();
    }

    @PostMapping
    public String save(@RequestBody Usuario usuario){
        repository.save(usuario);

        return "OK";
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") Integer id){
        repository.deleteById(id);

        return "OK";
    }

}