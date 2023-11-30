package com.parcial3.demo.Entities;

public class Usuarios {
    private String ID;
    private String telefono;
    private String correo;

    public Usuarios() {
    }

    public Usuarios(String iD, String telefono, String correo) {
        ID = iD;
        this.telefono = telefono;
        this.correo = correo;
    }

    public String getID() {
        return ID;
    }

    public void setID(String iD) {
        ID = iD;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }
}
