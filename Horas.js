function horas() {
    var SalarioHora = parseFloat(document.getElementById("SalarioHora").value);
    if (isNaN(SalarioHora) || SalarioHora === "" || SalarioHora <= 0) {
        alert("Por favor ingrese un valor válido para la primer casilla");
        return;
    }

    var HorasExtras = parseFloat(document.getElementById("HorasExtras").value); // Corregido aquí
    if (isNaN(HorasExtras) || HorasExtras === "" || HorasExtras < 0) {
        alert("Por favor ingrese un valor válido para la segunda casilla");
        return;
    }
    var SalarioHora2=SalarioHora*40;
    var SalarioExtra=HorasExtras*SalarioHora;
    var Salariofinal=SalarioHora2 + SalarioExtra;
    alert("Su salario de la semana es: "+ Salariofinal);

}
