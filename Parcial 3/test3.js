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