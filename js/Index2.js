function actualizarDimensiones() {
    const anchura = window.outerWidth;
    const altura = window.outerHeight;
    document.getElementById('Altura').textContent = altura;
    document.getElementById('Anchura').textContent = anchura;
    const div = document.getElementById('pagina');
    div.classList.remove('verde', 'azul', 'amarillo');
    if (anchura > 800 && altura > 600) {
        div.classList.add('verde');
    } else if (anchura > 400 && altura > 220) {
        div.classList.add('azul');
    } else {
        div.classList.add('amarillo');
    }
}

window.addEventListener('resize', actualizarDimensiones);

actualizarDimensiones();


// Función para cambiar el tamaño de la ventana
function cambiarTamaño() {
    const nuevoAncho = document.getElementById('Ancho').value;
    const nuevoAlto = document.getElementById('Alto').value;
    if (isNaN(nuevoAncho) || isNaN(nuevoAlto) || nuevoAncho === '' || nuevoAlto === '') {
        alert("Por favor, introduzca un número válido para el ancho y el alto.");
        return;
    }
    window.resizeTo(parseInt(nuevoAncho), parseInt(nuevoAlto));
    actualizarDimensiones();
}

document.getElementById("cambiarParametros").addEventListener("click", cambiarTamaño);

function cambiarColorHexadecimal() {
    const input = document.getElementById('color');
    const color = input.value;
    const validacion = /^#([0-9A-Fa-f]{3}){1,2}$/;
    if (validacion.test(color)) {
        document.getElementById('pagina').style.backgroundColor = color;
        input.classList.remove('error');
    } else {
        input.classList.add('error');
        alert("Por favor, introduce un color en formato hexadecimal válido.");
        input.focus();
    }
}

document.getElementById('cambiarColor').addEventListener('click', cambiarColorHexadecimal);
