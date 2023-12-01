package com.parcial3.demo.Helpers;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public Connection openDb() {
        try {
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            return DriverManager.getConnection(
                    "jdbc:sqlserver://localhost:1433;encrypt=true;trustServerCertificate=true;databaseName=WARGAMEZONE",
                    "test", "1234");
        } catch (SQLException e) {
            int x = 1;
        } catch (ClassNotFoundException cnfex) {
            int x = 1;
        }
        return null;
    }
}
