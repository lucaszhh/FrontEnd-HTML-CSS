window.addEventListener("load", function () {

    const nombre = document.querySelector("input.name");
    const email = document.querySelector("input.email");
    const celular = document.querySelector("input.cel");
    const formulario = document.querySelector(".form")

    //sobre un campo
    //evento se ejecuta cuando se empieza a modificar el campo
    nombre.addEventListener("focus", function () {
        console.log("presionaste el formulario")
    });
    //evento se ejecuta cuando saco el foco
    nombre.addEventListener("blur", function () {
        console.log("saliste del formulario")
    });
    //evento se ejecuta cuando se cambia el campo
    nombre.addEventListener("change", function () {
        console.log("presionaste el formulario")
    });

    //sobre el formulario
    //evento se ejecuta cuando se envia el form
    formulario.addEventListener("submit", function (e) {
        let errores = [];

        // campo nombre
        if (nombre.value == "") {
            errores.push("El campo Nombre debe estar completo");
        } else if (nombre.value.length < 3) {
            errores.push("El campo de Nombre debe contener almenos tres caracteres");
        }

        // campo email
        if (email.value == "") {
            errores.push("El campo E-mail debe estar completo");
        }

        // campo celular
        lucas
        if (celular.value == "") {
            errores.push("El campo Teléfono debe estar completo");
        }

        if (errores.length > 0) {
            e.preventDefault();

            let ulErrores = document.querySelector(".formulario ul");

            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + ulErrores[i] + "</li>";
            }

        }
    })
})
