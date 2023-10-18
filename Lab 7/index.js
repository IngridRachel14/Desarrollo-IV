function cambiarColor() {
    var parrafo = document.getElementById("mi_parrafo");

    parrafo.style.color = "blue";
}

function crearTexto() {
    var texto = document.getElementById("mi_new_texto");

    var texto_nuevo = " Agregaste este texto ;) ";

    texto.innerHTML = texto_nuevo;
}

function addTexto() {
    var texto = document.getElementById("mi_texto");

    texto_adicional = " no gana ";

    texto.innerHTML += texto_adicional;
}

function eliminarPelicula() {
    var lista = document.getElementById("peliculas");

    lista.remove(lista.selectedIndex)
}

function verVideo() {
    var link = document.getElementById("mi_link");
    window.location.href = link;
}
function mensaje() {
    texto_adicional = "no gana";
    window.alert('Le has enviado un mensaje a: ' + texto_adicional);
}
function imprimirConsola() {
    texto_adicional = "no gana";
    console.log(texto_adicional); 
}
function estado() {
    var casilla = document.getElementById("miCheck");
    var estado = document.getElementById("estadocheck");

    estado.textContent = "El check está: ";
    if (casilla.checked) {
        const mensaje = document.createTextNode("Marcado");
        estado.textContent += mensaje.textContent;
    } else {
        const mensaje = document.createTextNode("No marcado");
        estado.textContent += mensaje.textContent;
    }
}
function estadoRadio() {
    var rad = document.getElementsByName("miRadio");
    var estadoRadio = document.getElementById("estadoRadio");
    
    var radioSel = Array.from(rad).find(radio => radio.checked);

    if (radioSel) {
        estadoRadio.textContent = "El radio seleccionado es: " + radioSel.value;
    } else {
        estadoRadio.textContent = "Ningún radio está seleccionado.";
    }
}
function validaTexto(event) {
    let texto = document.getElementById("texto");
    let mensaje = document.getElementById("mensaje");
    let charCode = event.which ? event.which : event.keyCode;

    if ((charCode >= 48 && charCode <= 57)) {
        mensaje.textContent = "Solo se permiten letras, no números.";
        event.preventDefault(); // Evita la entrada del número.
    } else {
        mensaje.textContent = ""; // Borra el mensaje de error.
    }
}

/*-------------------------------------JS-John---------------------------*/

function ObtenerDatos(){
    fetch("https://www.superheroapi.com/api.php/3526470407630620/1").then(res=>{
        if(res.ok){
            res.json().then(personajes=>{
                MapearDatos(personajes);
            })
        }else{
            alert("No se encuentran los datos")
        }
    })
}

function MapearDatos(personajes){
    let cont = document.getElementById("cont")

    cont.innerHTML = '';
    cont.innerHTML += MapearPlantilla(personajes);
}

function MapearPlantilla(p){
    return `<tr>
    <td><img src="${p.image.url}"></td>
    <td>${p.name}</td>
    <td>${p.biography.publisher}
  </tr>`
}

function RecargarDatos(){
    let supId = document.getElementById("supId").value
    fetch("https://www.superheroapi.com/api.php/3526470407630620/"+supId).then(res=>{
        if(res.ok){
            res.json().then(personajes=>{
                MapearDatos(personajes);
            })
        }else{
            alert("No se encuentran los datos")
        }
    })
}