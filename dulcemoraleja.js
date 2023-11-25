document.addEventListener("DOMContentLoaded", function () {
    // Fecha de nacimiento (formato: YYYY-MM-DD)
    var fechaNacimiento = new Date("2016-09-15");

    // Función para calcular la edad en meses
    function calcularEdadEnMeses(fechaNacimiento) {
        var hoy = new Date();
        var edadEnMeses = (hoy.getFullYear() - fechaNacimiento.getFullYear()) * 12;
        edadEnMeses += hoy.getMonth() - fechaNacimiento.getMonth();
        return edadEnMeses;
    }

    // Obtén el elemento donde mostrar la edad
    var elementoEdad = document.getElementById("edad");

    // Crea un elemento <strong> para "Fecha de nacimiento:"
    var strongElement = document.createElement("strong");
    strongElement.textContent = "Fecha de nacimiento: ";

    // Agrega el texto en negrita al elementoEdad
    elementoEdad.appendChild(strongElement);

    // Agrega el resto de la información
    elementoEdad.innerHTML += "09/15/2016 (" + calcularEdadEnMeses(fechaNacimiento) + " meses)";
});
