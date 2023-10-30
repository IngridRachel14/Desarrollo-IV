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
            mailInput.style.backgroundColor = '';
        }

        if (contraInput.value === '') {
            contraInput.style.backgroundColor = 'red';
            event.preventDefault();
        } else {
            contraInput.style.backgroundColor = '';
        }
    });
});

enviarBtn.addEventListener('click', function (event) {
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
});



function showLoader() {
    var loader = document.getElementById("loader");
    loader.classList.remove("hidden");

    var enviarButton = document.querySelector(".Enviar");
    enviarButton.disabled = true;

    setTimeout(function () {
        
        loader.classList.add("hidden");
        enviarButton.disabled = false;
    }, 3000);
}