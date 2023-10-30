var contra = document.getElementById('Contra');
var ojo = document.getElementById('Ojo');

ojo.addEventListener("click", e => {
    if (contra.type === "password") {
        contra.type = "text";
        ojo.style.opacity = 0.9;
    }
    else {
        contra.type = "password"
        ojo.style.opacity = 0.3;
    }
})

document.addEventListener("DOMContentLoaded", function () {
    var mailInput = document.querySelector('.Mail');
    var contraInput = document.getElementById('Contra');
    var enviarBtn = document.querySelector('.Enviar');

    enviarBtn.addEventListener('click', function (event) {
        if (mailInput.value === '') {
            mailInput.style.backgroundColor = 'red';
            event.preventDefault();
        } else {
            mailInput.style.backgroundColor = 'green';
        }

        if (contraInput.value === '') {
            contraInput.style.backgroundColor = 'red';
            event.preventDefault();
        } else {
            contraInput.style.backgroundColor = 'green';
        }

            if (mailInput.value === '' && contraInput.value === '') {
                alert('Por favor, completa los campos de correo electrónico y contraseña.');
                event.preventDefault();
            } else if (mailInput.value === '') {
                alert('Por favor, ingresa tu correo electrónico.');
                event.preventDefault();
            } else if (contraInput.value === '') {
                alert('Por favor, ingresa tu contraseña.');
                event.preventDefault();
            }

            if (mailInput.value !== '' && contraInput.value !== '') {
                window.alert('BIENVENIDO A WARFARE')
                event.preventDefault();
            }
        });
    });

    document.querySelector('.Enviar').addEventListener('click', function(event) {
        event.preventDefault(); // Evita el envío del formulario
        mostrarLoader();
      });
    
      function mostrarLoader() {
        // Muestra el loader y oculta el botón
        document.getElementById('loader').style.display = 'block';
        document.querySelector('.Enviar').style.display = 'none';
    
        // Simulación de una tarea 
        setTimeout(function() {
          // Oculta el loader
          document.getElementById('loader').style.display = 'none';
        }, 5000); 
      }
