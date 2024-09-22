function calcular() {
    var valor = document.getElementById("valor").value;
    if (isNaN(valor) || valor === "" || valor <= 0) {
        alert("Por favor ingresa un valor numérico valido");
        return;
    }   
    var despues = valor * 0.02;   
    alert("El resultado que ganara despues de un mes sera: "+despues);
}
