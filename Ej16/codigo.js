window.onload = function(){
    actulaizarFecha();
};

function actulaizarFecha()
{
    var fecha = new Date(Date.now());

    document.getElementById("horas").innerText = (fecha.getHours() < 10 ? "0" + fecha.getHours() : fecha.getHours());
    document.getElementById("minutos").innerText = (fecha.getMinutes() < 10 ? "0" + fecha.getMinutes() : fecha.getMinutes());
    document.getElementById("segundos").innerText = (fecha.getSeconds() < 10 ? "0" + fecha.getSeconds() : fecha.getSeconds());

    setTimeout(actulaizarFecha, 1000);
}