function extra() {
    var venta1 = parseFloat(document.getElementById("venta1").value);
    if (isNaN(venta1) || venta1 =="" || venta1 <= 0) {
        alert("Por favor ingrese un valor válido para la primera casilla");
        return;
    }
    var venta2 = parseFloat(document.getElementById("venta2").value);
    if (isNaN(venta2) || venta2 =="" || venta2 <= 0) {
        alert("Por favor ingrese un valor válido para la segunda casilla");
        return;
    }
    var venta3 = parseFloat(document.getElementById("venta3").value);
    if (isNaN(venta3) || venta2 =="" || venta3 <= 0) {
        alert("Por favor ingrese un valor válido para la tercera casilla");
        return;
    }
    var salario = parseFloat(document.getElementById("salario").value);
    if (isNaN(salario) || salario =="" || salario <= 0) {
        alert("Por favor ingrese un valor válido para el salario");
        return;
    }
    var comision1 = venta1 * 0.10;
    var comision2 = venta2 * 0.10;
    var comision3 = venta3 * 0.10;
    var sumacomision = comision1 + comision2 + comision3;
    var total = sumacomision + salario;
    alert("Su salario al mes más comisiones será de: " + total.toFixed(2));
}
