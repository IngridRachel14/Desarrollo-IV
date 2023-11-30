package com.parcial3.demo.Controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.parcial3.demo.Entities.Usuarios;
import com.parcial3.demo.Services.UsuariosDB;

@RestController
public class UsuarioControllers {

    @GetMapping("/usuarios/all")
    public List<Usuarios> TodosLosUsuarios(){
        return new UsuariosDB().ObtenerUsuarios();
    }

    @PostMapping("/usuarios")
  public int InsertarUsuario(@RequestBody Usuarios usuario) {
    return new UsuariosDB().GuardarUsuarios(usuario);
  }
}
