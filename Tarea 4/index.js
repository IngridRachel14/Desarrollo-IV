var contra = document.getElementById('Contra');
var ojo = document.getElementById('Ojo');

    ojo.addEventListener("click", e => {
        if (contra.type === "password"){
            contra.type = "text";
            ojo.style.opacity = 0.9;
        }
        else{
            contra.type = "password"
            ojo.style.opacity = 0.3;
        }
    })