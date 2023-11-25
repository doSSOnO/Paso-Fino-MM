document.addEventListener("DOMContentLoaded", function () {
    // Fecha de nacimiento (formato: YYYY-MM-DD)
    var fechaNacimiento = new Date("1990-01-01");

    // Función para calcular la edad en meses
    function calcularEdadEnMeses(fechaNacimiento) {
        var hoy = new Date();
        var edadEnMeses = (hoy.getFullYear() - fechaNacimiento.getFullYear()) * 12;
        edadEnMeses += hoy.getMonth() - fechaNacimiento.getMonth();
        return edadEnMeses;
    }

    // Obtén el elemento donde mostrar la edad
    var elementoEdad = document.getElementById("edad");

    // Actualiza la edad al cargar la página
    elementoEdad.textContent = "Tiene " + calcularEdadEnMeses(fechaNacimiento) + " meses.";
});

