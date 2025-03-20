cajaPrincipal = document.getElementById("rating");

for (let i = 1; i <= 10; i++) {
    let imagen = document.createElement("img");
    imagen.src = "img/Estrella.png";
    cajaPrincipal.appendChild(imagen);
    imagen.classList.add("item");
    imagen.setAttribute("pos", i);
    imagen.id = "item-" + i;

    imagen.addEventListener("mouseover", function () {
        let posicion = parseInt(this.getAttribute("pos"));
        
        for (let j = 1; j <= 10; j++) {
            let estrella = document.getElementById("item-" + j);
            estrella.src = "img/Estrella.png";
        }

        for (let j = 1; j <= posicion; j++) {
            let estrella = document.getElementById("item-" + j);
            estrella.src = "img/Estrella-Amarilla.png";
        }
    });

  
}
