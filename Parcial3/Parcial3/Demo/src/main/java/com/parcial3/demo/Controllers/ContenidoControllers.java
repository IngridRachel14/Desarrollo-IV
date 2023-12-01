package com.parcial3.demo.Controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.parcial3.demo.Entities.Contenido;
import com.parcial3.demo.Services.WarGameZoneDB;

@RestController
public class ContenidoControllers {
    @GetMapping("/contenidos")
    public List<Contenido> TodosLosContenidos(@RequestParam String  id){
        return new WarGameZoneDB().ObtenerContenido(id);
    }
}
