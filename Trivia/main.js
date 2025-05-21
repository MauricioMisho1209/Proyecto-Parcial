preguntas = [];
indice = 0;
puntuacion = 0;
datos();

async function datos() {
    try {
        preguntasjson = await fetch("preguntas.json");
        preguntas = await preguntasjson.json();
        mostrarPregunta();
    } catch (error) {
        console.log(error);
    }
}

function mostrarPregunta() {
    if (indice < preguntas.length) {
        document.getElementById("pregunta").textContent = preguntas[indice].pregunta;
        
        let cajaop = document.getElementById("opciones");
        cajaop.innerHTML = "";

        preguntas[indice].opciones.forEach(op => {
            let boton = document.createElement("button");
            boton.textContent = op;
            boton.classList.add("boton-opcion"); //Se hace para poder agregar estilos a los botones 
            boton.onclick = function() { seleccionarRespuesta(boton, op); };
            cajaop.appendChild(boton);
        });
    } else {
        document.getElementById("pregunta").textContent = "Fin del juego";
        document.getElementById("opciones").innerHTML = "";
        document.getElementById("resultado").textContent = "Tu puntuación final es: " + puntuacion + "/100";
        document.getElementById("siguiente").style.display = "none";
    }
}

function seleccionarRespuesta(boton, respuestaSeleccionada) {
    let botones = document.querySelectorAll(".boton-opcion");
    botones.forEach(b => b.classList.remove("seleccionado")); 
    boton.classList.add("seleccionado");
    verificarRespuesta(respuestaSeleccionada);
}

function verificarRespuesta(respuestaSeleccionada) {
    if (respuestaSeleccionada === preguntas[indice].respuesta) {
        puntuacion += 5;
    }
}

document.getElementById("siguiente").onclick = function() {
    indice++;
    mostrarPregunta();
};