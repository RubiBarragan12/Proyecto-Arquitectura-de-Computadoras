const contenido = document.getElementById("contenido");


    fetch(pagina)
        .then(response => response.text())
        .then(data => 
            {
            contenido.innerHTML = data;
        });
}


document.querySelectorAll("ul li a").forEach(enlace =>
     {
    enlace.addEventListener("click", function (event) {
        event.preventDefault();
        cargarPagina(this.getAttribute("href"));
    });
});