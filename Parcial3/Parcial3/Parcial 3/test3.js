let baseUrl = "http://localhost:8080";
let seccion = [];

function ObtenerSeccion() {
    let x
    let y
    let img
    let txt
    for (let i = 1; i <= 9; i++) {
        fetch(baseUrl + '/contenidos?id=seccion' + i)
            .then(res => res.json())
            .then(json => {
                if (i == 1) {
                    Object.keys(json).forEach(function (llave) {
                        x = document.getElementById('titulo'+ llave)
                        y = document.getElementById('img' + llave)
                        y.src = json[llave]['img']
                        txt = document.createTextNode(json[llave]['titulo'])
                        x.appendChild(txt)
                    })
                } else if (i == 2) {
                    x = document.getElementById('comunidadti');
                    y = document.getElementById('comunidadparra')
                    img = document.getElementById('comunidadimg')
                    img.src = json[0]['img']
                    txt = document.createTextNode(json[0]['titulo'])
                    x.appendChild(txt);
                    txt = document.createTextNode(json[0]['parrafo'])
                    y.appendChild(txt)
                } else if (i == 3) {
                    x = document.getElementById('quientitulo');
                    y = document.getElementById('quienparrafo')
                    img = document.getElementById('quienimg')
                    img.src = json[0]['img']
                    txt = document.createTextNode(json[0]['titulo'])
                    x.appendChild(txt);
                    txt = document.createTextNode(json[0]['parrafo'])
                    y.appendChild(txt)
                }else if (i == 4) {
                    Object.keys(json).forEach(function (llave) {
                        if (llave == 0) {
                            x = document.getElementById('equipoti')
                            txt = document.createTextNode(json[llave]['titulo'])
                        } else {
                            x = document.getElementById('equipo' + llave);
                            y = document.getElementById('equipoparra' + llave)
                            img = document.getElementById('equipoimg' + llave)
                            img.src = json[llave]['img']
                            txt = document.createTextNode(json[llave]['titulo'])
                            x.appendChild(txt);
                            txt = document.createTextNode(json[llave]['parrafo'])
                            y.appendChild(txt)
                        }
                    })
                }else if (i == 5) {
                    x = document.getElementById('titulo6');
                    y = document.getElementById('parrafo5')
                    img = document.getElementById('img7')
                    img.src = json[0]['img']
                    txt = document.createTextNode(json[0]['titulo'])
                    x.appendChild(txt);
                    txt = document.createTextNode(json[0]['parrafo'])
                    y.appendChild(txt)
                } else if (i == 6) {
                    x = document.getElementById('titulo7')
                    txt = document.createTextNode(json[0]['parrafo'])
                    x.appendChild(txt)
                } else if (i == 7 ) {
                    x = document.getElementById('bannerprincipal')
                    txt = document.createTextNode(json[0]['titulo'])
                    x.appendChild(txt)
                } else if(i == 8) {
                    y = document.getElementById('img8')
                    y.src = json[0]['img']
                } else {
                    y = document.getElementById('logo')
                    y.src = json[0]['img']
                } 
            });
    }
}





