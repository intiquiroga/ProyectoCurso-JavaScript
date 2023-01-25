

/* LLAMADO A LA API */
fetch("https://api.exchangerate.host/latest")
   .then(response =>response.json())

   let peso = document.getElementById ("peso")    
    console.log (data=>console.group(data.rates))




//let terminar="";

// while ( terminar === "si"|| "Si" || "SI" ){

//    let ingresos = prompt ("Ingrese el total de sus ingresos Mensuales");
//    let gastos = prompt ("Ingrese el total de sus  gastos mensuales") ;

//    let ahorro_mes=  ingresos - gastos ;


//    console.log ("mi capacidad de ahorro es ",ahorro_mes);
 
//    terminar = prompt ("¿ Quiero terminar ?")
//    console.log (terminar)


// }



  


 /* OBJETO CLASE */
 class Ahorrador {
  constructor (ahorro_mes,nombre,horas_de_trabajo){

    this.ahorro_mes = ahorro_mes;     
    this.nombre = nombre ;
    this.horas_de_trabajo = horas_de_trabajo ;
  }
 }
/* FIN OBJETO CLASE */

//   get_datos () {
//      console.log ("ahorromensual: ",this.ahorro_mes);
 //     console.log ("nombre", this.nombre);
 //     console.log ("horasdetrabajo",this.horas_de_trabajo)
 //  }
// }

 //let lista_ahorradores = [];
 //for(let value of lista_ahorradores){
   
 //  let ahorro_mes = document.getElementById("capacidad_de_ahorro");
 //  console.log (ahorro_mes.value);
 //  let nombre = document.getElementById ("nombre");
 //  console.log(nombre.value)
 //  let horas_de_trabajo = document.getElementById ("horas_de_trabajo").value;
 //  console.log(horas_de_trabajo.value)
 //  let ahorrador = new Ahorrador (ahorro_mes, nombre, horas_de_trabajo);

 //  lista_ahorradores.push (ahorrador)
 //} 
  //let ahorrador = new Ahorrador (ahorro_mes, nombre, horas_de_trabajo);

  /* ARRAY */
    let lista_ahorradores = [];
  /* DOOM  Y EVENTOS */
    let formulario = document.getElementById("formulario");
    /* FUNCION CREADORA DE AHORRADOR*/
    formulario.addEventListener("submit", function (e) {
      
      e.preventDefault();
      let ahorro_mes = document.getElementById("ahorro_mes");
      console.log ("Ahorro del mes",ahorro_mes.value );  

    
      let nombre = document.getElementById ("nombre");
      console.log("Nombre", nombre.value) ;
  
      let horas_de_trabajo = document.getElementById ("horas_de_trabajo");
      console.log("Horas De Trabajo",horas_de_trabajo.value) ;

      let ahorrador = new Ahorrador (ahorro_mes, nombre, horas_de_trabajo);

      //ahorrador = JSON.stringify(ahorrador)

      lista_ahorradores.push (ahorrador)

      let arreglo_JSON = JSON.stringify (lista_ahorradores);

      localStorage.setItem("lista_de_ahorradores", lista_ahorradores)

      let recupero_ahorrador= localStorage.getItem("lista_de_ahorradores");

      console.log(lista_ahorradores);


  })
  
  console.log (lista_ahorradores)
  /* JSON Y LOCAL STORAGE */
  let ahorrador_JSON = JSON.stringify(Ahorrador)
  console.log (Ahorrador);
  console.log(ahorrador_JSON);
   
  localStorage.setItem("Ahorrador",ahorrador_JSON);
 //let db_ahorradores = localStorage.setItem( 'lista_ahorradores',true)
 let recupero_ahorrador = localStorage.getItem(Ahorrador);
 console.log (recupero_ahorrador);

 for (let i=0 ; i < localStorage.length ; i = i + 1){
     let db_ahorradores = localStorage.key(i)
     console.log ("el ahorador",db_ahorradores)
     console.log (localStorage.getItem(db_ahorradores))
      
   }
/* FUNCION DE BUSQUEDA DE AHORRADORES */
  function buscar_ahorrador(ahorrador) {
     return ahorrador.nombre = ahorrador_solicitado
     }
     let ahorrador_solicitado =document.getElementById ("buscar_ahorrador");
     ahorrador_solicitado.addEventListener ("submit" , ahorrador_solicitado);
     let resultado_Find = lista_ahorradores.find(buscar_ahorrador);
        if (resultado_Find != undefined ) {
           console.log (resultado_Find)
          }
          else {
           console.log("ahorrador no encontrado")
          }
  



 
