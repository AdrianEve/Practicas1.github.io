function Algoritmos(){
    var promedio = parseFloat(document.getElementById("promedio").value);
    if (isNaN(promedio) || promedio =="" || promedio <= 0) {
        alert("Por favor ingrese un valor válido para la casilla del promedio");
        return;
    }
    var examen = parseFloat(document.getElementById("examen").value);
    if (isNaN(examen) || examen =="" || examen <= 0) {
        alert("Por favor ingrese un valor válido para la casilla del examen");
        return;
    }
    var trabajo = parseFloat(document.getElementById("trabajo").value);
    if (isNaN(trabajo) || trabajo =="" || trabajo <= 0) {
        alert("Por favor ingrese un valor válido para la casilla de trabajo");
        return;
    }
    var promedio2 = promedio * 0.55;
    var examen2 = examen * 0.30;
    var trabajo2 = trabajo * 0.15;
    var calificacionfinal = promedio2 + examen2 + trabajo2;
    alert(calificacionfinal);
}