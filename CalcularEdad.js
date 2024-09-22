function CalcularEdad() {
    var fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);
    var fechaActual = new Date();
    var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    var mes = fechaActual.getMonth() - fechaNacimiento.getMonth();  
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    alert("Su edad es: ${edad} años.");
}
