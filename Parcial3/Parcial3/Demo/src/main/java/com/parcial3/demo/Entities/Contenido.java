package com.parcial3.demo.Entities;

public class Contenido {
    private String img;
    private String titulo;
    private String parrafo;

    public Contenido() {
    }

    public Contenido(String img, String titulo, String parrafo) {
        this.img = img;
        this.titulo = titulo;
        this.parrafo = parrafo;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getParrafo() {
        return parrafo;
    }

    public void setParrafo(String parrafo) {
        this.parrafo = parrafo;
    }

}
