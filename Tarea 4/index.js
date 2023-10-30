document.addEventListener("DOMContentLoaded", function() {
    var contra = document.getElementById('Contra');
    var ojo = document.getElementById('Ojo');
    var mailInput = document.querySelector('.Mail');
    var contraInput = document.getElementById('Contra');
    var enviarBtn = document.querySelector('.Enviar');

    ojo.addEventListener("click", function() {
        if (contra.type === "password") {
            contra.type = "text";
            ojo.style.opacity = 0.9;
        } else {
            contra.type = "password";
            ojo.style.opacity = 0.3;
        }
    });

    enviarBtn.addEventListener('click', function(event) {
        if (mailInput.value === '') {
            mailInput.style.backgroundColor = 'red';
            event.preventDefault();
        } else {
            mailInput.style.backgroundColor = '';
        }

        if (contraInput.value === '') {
            contraInput.style.backgroundColor = 'red';
            event.preventDefault();
        } else {
            contraInput.style.backgroundColor = '';
        }

        if (mailInput.value === '' && contraInput.value === '') {
            window.alert('Completa los campos de correo y contraseña');
            event.preventDefault();
        } else if (mailInput.value === '') {
            window.alert('Ingresa tu correo electrónico.');
            event.preventDefault();
        } else if (contraInput.value === '') {
            window.alert('Ingresa tu contraseña.');
            event.preventDefault();
        }

        else{
            Window.alert('BIENVENIDO A WARFARE')
            event.preventDefault();
        }
    });
});