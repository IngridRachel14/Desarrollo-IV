package com.parcial3.demo.Services;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import java.util.ArrayList;
import java.util.List;

import com.parcial3.demo.Helpers.Conexion;
import com.parcial3.demo.Entities.Contenido;

public class WarGameZoneDB {

    private Connection _cn;

    public WarGameZoneDB() {
        this._cn = new Conexion().openDb();
    }


        public List<Contenido> ObtenerContenido(String id) {
        try {
             PreparedStatement stmt = _cn.prepareStatement("select * from contenido where SecID = ?");
            stmt.setString(1, id);
            List<Contenido> contenidos = new ArrayList<>();
            ResultSet result = stmt.executeQuery();
            while (result.next()) {
                 Contenido contenido = new Contenido(
                    result.getString("img"),
                    result.getString("titulo"),

                    result.getString("parrafo"));

                contenidos.add(contenido);

            }

            result.close();
            stmt.close();
            return contenidos;
        } catch (Exception e) {
            int x = 1;
        }
        return null;
    }
}
