function porciento(){
    var ValorCompra = parseFloat(document.getElementById("ValorCompra").value);
    if(isNaN(ValorCompra) || ValorCompra=="" || ValorCompra <=0){
        alert("Por favor ingrese un valor valido para el valor de la compra")
        return;
    }
    var ValorCompra2 =ValorCompra * 0.15;
    var ValorFinal = ValorCompra - ValorCompra2
    alert("El valor de su compra con el descuento de 15% es: " + ValorFinal.toFixed(2));

}