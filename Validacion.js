function validacion(){
    var Nombre = document.getElementById("Nombre").value;
    if (Nombre === "") {
        alert("El nombre es obligatorio.");
        return false;
    }

    var gmail = document.getElementById("gmail").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (gmail === "") {
        alert("Por favor, llenar el campo gmail");
        return false;
    } else if (!emailPattern.test(email)) {
        alert("Por favor, ingrese un gmail válido");
        return false;
    }

    var texto = document.getElementById("texto").value;
    if (texto === "") {
        alert("Por favor, llenar el campo de texto");
        return false;
    } else if (texto.length > 50) {
        alert("El texto no debe superar los 50 caracteres");
        return false;
    }

    var contraseña = document.getElementById("contraseña").value;
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (contraseña === "") {
        alert("Por favor, llenar el campo de contraseña");
        return false;
    } else if (!passwordPattern.test(contraseña)) {
        alert("La contraseña debe tener al menos 6 caracteres, incluyendo una mayuscula, una minuscula y un número");
        return false;
    }
    return true;
}