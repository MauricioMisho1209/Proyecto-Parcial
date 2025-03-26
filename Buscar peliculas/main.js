document.addEventListener("DOMContentLoaded", mostrarPeliculas);

let boton = document.getElementById("boton");
boton.addEventListener("click", function() {
    let title = document.getElementById("movieTitle").value;
    let genre = document.getElementById("movieGenre").value;
    let year = document.getElementById("movieYear").value;
    let rating = document.getElementById("movieRating").value;

    if (title === "" || genre === "" || year === "" || rating === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    let movies = localStorage.getItem("movies");
    let moviesArray = movies ? JSON.parse(movies) : [];
    
    moviesArray.push({ title, genre, year, rating });
    localStorage.setItem("movies", JSON.stringify(moviesArray));

    // Limpiar los campos después de agregar la película
    document.getElementById("movieTitle").value = "";
    document.getElementById("movieGenre").value = "";
    document.getElementById("movieYear").value = "";
    document.getElementById("movieRating").value = "";

    alert("Película agregada correctamente");
    mostrarPeliculas();
});

function mostrarPeliculas() {
    let movies = localStorage.getItem("movies");
    let moviesArray = movies ? JSON.parse(movies) : [];

    let tableBody = document.querySelector("#moviesTable tbody");
    tableBody.innerHTML = "";

    if (moviesArray.length === 0) {
        tableBody.innerHTML = "<tr><td colspan='5'>No hay películas registradas.</td></tr>";
        return;
    }

    moviesArray.forEach((movie, index) => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${movie.title}</td>
            <td>${movie.genre}</td>
            <td>${movie.year}</td>
            <td>${movie.rating}</td>
            <td><button class="delete-btn" onclick="eliminarPelicula(${index})">Eliminar</button></td>
        `;

        tableBody.appendChild(row);
    });
}

function eliminarPelicula(index) {
    let movies = JSON.parse(localStorage.getItem("movies"));
    movies.splice(index, 1);
    localStorage.setItem("movies", JSON.stringify(movies));
    mostrarPeliculas();
}


