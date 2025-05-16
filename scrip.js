function guardar() {
    // Obtener los valores de los campos de texto
    debugger
    var titulo = document.getElementById("TITULO").value;
    var descripcion = document.getElementById("DESCRPCION").value;
    var fecha = document.getElementById("FECHA").value;

    // Crear un objeto con los datos
    var noticia = {
        titulo: titulo,
        descripcion: descripcion,
        fecha: fecha
    };

    // Guardar el objeto en el almacenamiento local
    localStorage.setItem("noticia", JSON.stringify(noticia));

    // Limpiar los campos de texto
    alert("Noticia guardada exitosamente");
}
