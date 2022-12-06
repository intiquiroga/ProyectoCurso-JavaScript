




let terminar="";

 while ( terminar != "si"|| "Si" || "SI" ){

    let ingresos = prompt ("Ingrese el total de sus ingresos Mensuales");
    let gastos = prompt ("Ingrese el total de sus  gastos mensuales") ;

    let ahorro_mes=  ingresos - gastos ;


    console.log ("mi capacidad de ahorro es ",ahorro_mes);
 
    terminar = prompt ("¿ Quiero terminar ?")
    console.log (terminar)


 }
