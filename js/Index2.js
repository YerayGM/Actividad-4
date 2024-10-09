function actualizarDimensiones() {
    const anchura = window.outerWidth;
    const altura = window.outerHeight;
    document.getElementById('Altura').textContent = altura;
    document.getElementById('Anchura').textContent = anchura;

    // Cambiar el color de fondo usando las clases definidas en el CSS
    const div = document.getElementById('pagina');
    div.classList.remove('bg-green', 'bg-blue', 'bg-yellow'); // Elimina las clases anteriores

    if (anchura > 800 && altura > 600) {
        div.classList.add('bg-green'); // Aplica la clase verde
    } else if (anchura > 400 && altura > 220) {
        div.classList.add('bg-blue'); // Aplica la clase azul
    } else {
        div.classList.add('bg-yellow'); // Aplica la clase amarilla
    }
}

window.addEventListener('resize', actualizarDimensiones);
actualizarDimensiones(); // Ejecutar al cargar la página

function cambiarTamaño() {
    const nuevoAncho = document.getElementById('Ancho').value;
    const nuevoAlto = document.getElementById('Alto').value;
    if (nuevoAncho && nuevoAlto) {
        window.resizeTo(parseInt(nuevoAncho), parseInt(nuevoAlto));
        actualizarDimensiones();
    }
}

document.getElementById("cambiarParametros").addEventListener("click", cambiarTamaño);

// Validación de solo números en el input
function validarNumero() {
    const input = document.getElementById('numero');
    const valor = input.value;
    const regex = /^[0-9]+$/;

    if (!regex.test(valor)) {
        input.classList.add('error'); // Resalta en rojo
        alert("Por favor, introduce solo números.");
        input.focus(); // Reposiciona el cursor en el input
    } else {
        input.classList.remove('error'); // Quita el estilo rojo si es válido
    }
}

document.getElementById('validar').addEventListener('click', validarNumero);

// Cambiar color usando hexadecimal con validación
function cambiarColorHexadecimal() {
    const input = document.getElementById('color');
    const color = input.value;
    const regex = /^#([0-9A-Fa-f]{3}){1,2}$/;

    if (regex.test(color)) {
        document.getElementById('pagina').style.backgroundColor = color;
        input.classList.remove('error'); // Elimina el borde rojo si es válido
    } else {
        input.classList.add('error'); // Pone el borde rojo si es inválido
        alert("Por favor, introduce un color en formato hexadecimal válido.");
        input.focus(); // Reposiciona el cursor en el input
    }
}

document.getElementById('cambiarColor').addEventListener('click', cambiarColorHexadecimal);
