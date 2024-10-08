document.getElementById('nuevaVentana').addEventListener('click', function(event) {
    event.preventDefault();
    crearVentanaNueva('../html/Index2.html');
});

function crearVentanaNueva (url){
    window.open(url, "Nueva Ventana", "width=700, height=600");
}