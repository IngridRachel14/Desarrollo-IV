package com.example.ejemplo.Services;

import java.sql.Statement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.example.ejemplo.Models.Productos;

public class ProductosDb {
  Connection _cn;

  public ProductosDb() {
    _cn = new Conexion().openDb();
  }

  public List<Productos> ObtenerProductos() {
    try {
      Statement stmt = _cn.createStatement();
      String query = "SELECT * FROM productos";

      List<Productos> productos = new ArrayList<>();
      ResultSet result = stmt.executeQuery(query);
      while (result.next()) {
        Productos producto = new Productos(
            result.getInt("id"),
            result.getString("nombre"),
            result.getFloat("precio"),
            result.getInt("categoria_id"),
            result.getString("fotoUrl"),
            result.getString("fecha_expiracion"),
            result.getString("fecha_preparacion"));

        productos.add(producto);
      }

      result.close();
      stmt.close();
      return productos;

    } catch (Exception e) {
      int x = 1;
    }
    return null;
  }

  public int GuardarProductos(Productos producto) {
    int resultado = 0;
    try {
      Statement stm = _cn.createStatement();
      String query = "Exec InsertarProducto'"
          + producto.getNombre() + "',"
          + producto.getPrecio() + ","
          + producto.getCategoriaId() + ",'"
          + producto.getFoto() + "','"
          + producto.getFechaProduccion() + "','"
          + producto.getFechaCaducidad() + "'";

      resultado = stm.executeUpdate(query);

      return resultado;
    } catch (Exception e) {
      int x = 1;
    }
    return resultado;
  }

  public int ActualizarProductos(Productos producto) {
    int resultado = 0;
    try {
        String query = "EXEC ActualizarProducto ?, ?, ?, ?, ?, ?, ?";
        PreparedStatement stm = _cn.prepareStatement(query);
        stm.setInt(1, producto.getId());
        stm.setString(2, producto.getNombre());
        stm.setDouble(3, producto.getPrecio());
        stm.setInt(4, producto.getCategoriaId());
        stm.setString(5, producto.getFoto());
        stm.setString(6, producto.getFechaProduccion());
        stm.setString(7, producto.getFechaCaducidad());

        resultado = stm.executeUpdate();

        stm.close();
        return resultado;
    } catch (Exception e) {
      int x = 1;
    }
    return resultado;
  }

  public int EliminarProducto(int pid) {
    int resultado = 0;
    try {
      Statement stmt = _cn.createStatement();
      String query = "DELETE FROM productos WHERE id = " + pid;

      return stmt.executeUpdate(query);

    } catch (Exception e) {
      int x = 1;
    }
    return resultado;
  }

}
