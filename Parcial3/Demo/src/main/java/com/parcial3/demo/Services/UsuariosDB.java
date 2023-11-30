package com.parcial3.demo.Services;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.parcial3.demo.Entities.Usuarios;
import com.parcial3.demo.Helpers.Conexion;

public class UsuariosDB {

    private Connection _cn;

    public UsuariosDB() {
        this._cn = new Conexion().openDb();
    }

    public List<Usuarios> ObtenerUsuarios() {
        try {
            Statement stmt = _cn.createStatement();
            String query = "SELECT * FROM Usuario";

            List<Usuarios> usuarios = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                Usuarios usuario = new Usuarios(
                    result.getString("ID"),
                    result.getString("telefono"),
                    result.getString("correo"));

                usuarios.add(usuario);

            }

            result.close();
            stmt.close();
            return usuarios;
        } catch (Exception e) {
            int x = 1;
        }
        return null;
    }

    public int GuardarUsuarios(Usuarios usuario){
        int resultado = 0;
        try {
            Statement stmt = _cn.createStatement();
            String query = "Exec InsertarUsuario'"
                + usuario.getID() + "',"
                + usuario.getTelefono() + "',"
                + usuario.getCorreo() + "'";

            resultado = stmt.executeUpdate(query);

            return resultado;
        } catch (Exception e) {
            int x = 1;
        }
        return resultado;
    }
}
