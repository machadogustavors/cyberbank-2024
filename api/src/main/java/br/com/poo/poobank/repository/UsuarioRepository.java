package br.com.poo.poobank.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.poo.poobank.domain.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    

    @Query("select u from Usuario u where u.senha is null")
    List<Usuario> buscarSemSenha();
}
