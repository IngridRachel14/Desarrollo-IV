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
            event.preventDefault(); // Evita enviar el formulario si el campo está vacío
        } else {
            mailInput.style.backgroundColor = ''; // Restaura el color de fondo predeterminado
        }

        if (contraInput.value === '') {
            contraInput.style.backgroundColor = 'red';
            event.preventDefault(); // Evita enviar el formulario si el campo está vacío
        } else {
            contraInput.style.backgroundColor = ''; // Restaura el color de fondo predeterminado
        }
    });
});

enviarBtn.addEventListener('click', function (event) {
    if (mailInput.value === '' && contraInput.value === '') {
        alert('Por favor, completa los campos de correo electrónico y contraseña.');
        event.preventDefault(); // Evita enviar el formulario si los campos están vacíos
    } else if (mailInput.value === '') {
        alert('Por favor, ingresa tu correo electrónico.');
        event.preventDefault(); // Evita enviar el formulario si el campo de correo electrónico está vacío
    } else if (contraInput.value === '') {
        alert('Por favor, ingresa tu contraseña.');
        event.preventDefault(); // Evita enviar el formulario si el campo de contraseña está vacío
    }
});