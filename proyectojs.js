




//let terminar="";

// while ( terminar === "si"|| "Si" || "SI" ){

//    let ingresos = prompt ("Ingrese el total de sus ingresos Mensuales");
//    let gastos = prompt ("Ingrese el total de sus  gastos mensuales") ;

//    let ahorro_mes=  ingresos - gastos ;


//    console.log ("mi capacidad de ahorro es ",ahorro_mes);
 
//    terminar = prompt ("¿ Quiero terminar ?")
//    console.log (terminar)


// }

 

 class Ahorrador {

   constructor (ahorro_mes,nombre,horas_de_trabajo){

      this.ahorro_mes = ahorro_mes;
      this.nombre = nombre ;
      this.horas_de_trabajo = horas_de_trabajo ;
   }
   get_datos () {
      console.log ("ahorromensual: ",this.ahorro_mes);
      console.log ("nombre", this.nombre);
      console.log ("horasdetrabajo",this.horas_de_trabajo)
   }
 }

 let lista_ahorradores = [];
 for(let i = 0; i < 3 ; i= i + 1){
   
   let ahorro_mes = prompt ("mi capacidad de ahorro del mes es de :");
   let nombre = prompt ("mi nombre es");
   let horas_de_trabajo = prompt ("Ingrese la cantidad de horas que trabaja por semana");
   let ahorrador = new Ahorrador (ahorro_mes, nombre, horas_de_trabajo);

   lista_ahorradores.push (ahorrador)
 } 
 console.log (lista_ahorradores)

 for (let ahorrador of lista_ahorradores){
   ahorrador.get_datos ()
 }

 function buscar_ahorrador(ahorrador) {
   return ahorrador.nombre= ahorrador_solicitado   
 }

 let= ahorrador_solicitado =prompt ("ingrese el nombre del ahorrador");

 let resultado_Find = lista_ahorradores.find(buscar_ahorrador);

 if (resultado_Find != undefined ) {

   console.log (resultado_Find)

 }
 else {
   console.log("ahorrador no encontrado")
 }