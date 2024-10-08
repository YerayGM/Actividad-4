function actualizarDimensiones() {
    const anchura = window.innerWidth;
    const altura = window.innerHeight;
    document.getElementById('Altura').textContent = altura;
    document.getElementById('Anchura').textContent = anchura;
}

window.addEventListener('resize', actualizarDimensiones);

actualizarDimensiones();

function cambiarTamaño() {
    const nuevoAncho = document.getElementById('Ancho').value;
    const nuevoAlto = document.getElementById('Alto').value;
    if (nuevoAncho && nuevoAlto) {
        window.resizeTo(parseInt(nuevoAncho), parseInt(nuevoAlto));
        actualizarDimensiones();
    }
}

document.getElementById("cambiarParametros").addEventListener("click", cambiarTamaño);
