window.addEventListener("load", cargar);

var boton = document.getElementById("boton");
var textArea = document.getElementById("texto");
var contador = document.getElementById("contador");
var caracteres = contador.innerHTML = 140;

function cargar() {
    boton.addEventListener("click", enviar);
    textArea.addEventListener("keyup", validar);
    textArea.addEventListener("keydown", growing);
}
    
function enviar(e) {
    e.preventDefault();
    var texto = textArea.value;
    mostrarHora();
    agregarMensaje(texto);
    textArea.value = "";
    contador.innerHTML = 140;
    contador.classList.remove("colorUno");
    contador.classList.remove("colorDos");
    resize();
    boton.disabled = true;
}

function validar(e) {
    boton.disabled = false;
    var longitud = textArea.value.trim().length;
    contarCaracteres(longitud);
    cambioColor(longitud);
}

function agregarMensaje(texto) {
    var publicacion = document.createElement("div");
    publicacion.innerText = texto;
    var contenedor = document.getElementById("contenedor");
    contenedor.insertBefore(publicacion, contenedor.childNodes[1]).classList.add("box");
}

function contarCaracteres(longitud) {
    if(longitud <= caracteres) {
        contador.innerHTML = caracteres - longitud;
    } else {
        contador.innerHTML = caracteres - longitud;
    }
    if(longitud == 0) {
        boton.disabled = true;
    }
    if(longitud > caracteres) {
        boton.disabled = true;
    }
}

function cambioColor(longitud) {
    if(longitud > 120) {
        contador.classList.add("colorUno");
    }

    if(longitud > 130) {
        contador.classList.add("colorDos");
        contador.classList.remove("colorUno");
    }

    if(longitud < 120) {
        contador.classList.remove("colorUno");
    }

    if(longitud < 130) {
        contador.classList.remove("colorDos");
    }
}

function growing() {
    textArea.style.cssText = "height: auto";
    textArea.style.cssText = "height: " + textArea.scrollHeight + "px";
}

function resize() {
    textArea.style.cssText = "height: auto";
}

function mostrarHora() {
    var fecha = new Date();
    var hora = fecha.getHours();
    var minuto = fecha.getMinutes();
        if(minuto < 10) {
            minuto = "0" + minuto;            
        }
    var horaImprimible = hora + " : " + minuto;

    var horario = document.createElement("div");
    horario.innerText = horaImprimible;
    var contenedor = document.getElementById("contenedor");
    contenedor.insertBefore(horario, contenedor.childNodes[0]).classList.add("horaBox");
}

