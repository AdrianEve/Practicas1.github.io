function Tiempo(){
    var SalarioMes=parseFloat(document.getElementById("SalarioMes").value);
    if(isNaN(SalarioMes) || SalarioMes=="" ||SalarioMes<=0){
        alert("Por favor ingrese un valor valido");
        return;
    }
    var anos=parseFloat(document.getElementById("anos").value);
    if(isNaN(anos) || anos=="" ||anos<=0){
        alert("Por favor ingrese un valor valido");
        return;
    }
    if(anos===1){
        porcentaje=0.07;
    } else if (anos>=2 && anos<5) {
        porcentaje=0.10;   
    } else if (anos>=5 && anos<10) {
        porcentaje= 0.15;
    } else if (anos>=10) {
        porcentaje=0.20;        
    }
    var aumento=SalarioMes*porcentaje;
    var NuevoSalario= SalarioMes+aumento;
    alert("Su nuevo salario gracias al tiempo trabajando en la empresa sera de: "+NuevoSalario.toFixed(2));
}