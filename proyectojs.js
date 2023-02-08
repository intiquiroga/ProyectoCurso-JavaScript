

/* LLAMADO A LA API */


  fetch("https://api.exchangerate.host/latest")
    .then(response => response.json())
    .then((data) =>  {
      let peso = document.getElementById ("peso")    
      peso.onclick = () => console.log(data.rates.ARS);
    
  })
    //console.log (data.rates.ARS)



  const displayCountDocsDB = (len) => {
    dom = document.getElementById('countdb')
    dom.innerHTML = len
  }
  
 


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
 
    this.ahorro_mes = ahorro_mes.value;     
    this.nombre = nombre.value ;
    this.horas_de_trabajo = horas_de_trabajo.value ; 
  }
 }
 
//db= [] ;
const createLocalStorage = () => {

    if(localStorage.getItem('db')) {
        return JSON.parse(localStorage.getItem('db'))
        displayCountDocsDB(data.length)
        return data
    }  else {
        var lista_ahorradores = []
        localStorage.setItem('db',JSON.stringify(db))
        return []
    } 
 }
 
const syncLocalStorage = (lista_ahorradores) => { 
   localStorage.setItem('db',JSON.stringify(lista_ahorradores))
   return true
}
 
var lista_ahorradores = createLocalStorage()



 
 
 
 
 
 
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
  //  let lista_ahorradores = [];
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

      syncLocalStorage(lista_ahorradores) //guardamos los cambios

      lista_ahorradores = createLocalStorage() //traemos actualizada la db
 
 
      console.log(lista_ahorradores);
      formulario.reset ();

      alert ('Documento guardado en la base de datos');

  })
  
  /* JSON Y LOCAL STORAGE */
  
  //let ahorrador_JSON = JSON.stringify(Ahorrador)
 
  //console.log (Ahorrador);
  // REVISAR //console.log(ahorrador_JSON)
  //localStorage.setItem(Ahorrador,ahorrador_JSON);
  //localStorage.getItem(Ahorrador);
 
 //let db_ahorradores = localStorage.setItem( 'lista_ahorradores',true)
 //let recupero_ahorrador = localStorage.getItem(Ahorrador);
 //console.log (recupero_ahorrador);

 //let resultado_Find = lista_ahorradores.find((  Ahorrador) => Ahorrador.nombre);
     
 document.getElementById ("buscar_ahorrador").addEventListener ("submit",function (e){

  e.preventDefault ()
  lista_ahorradores = createLocalStorage ()
  console.log (lista_ahorradores)

  target =document.getElementById("search-form-value").value

 //ahorrador_solicitado.addEventListener ("submit" , function (e){
  
  //let resultado_Find = lista_ahorradores.find( buscar_ahorradores , Ahorrador);
  lista_ahorradores.forEach(element => {
    console.log('search', element.nombre, target)

    if (element.nombre == target ) {
      console.warn (element)
      return
     }
    
  });
  

  })

  

 //for (let i=0 ; i < localStorage.length ; i = i + 1){
     //let db_ahorradores = localStorage.key(i)
     //console.log ("el ahorador",db_ahorradores.nombre)
     //console.log (localStorage.getItem(db_ahorradores))
      
   //}
/* FUNCION DE BUSQUEDA DE AHORRADORES */
    //function buscar_ahorradores(ahorrador) {
    //  return Ahorrador.nombre = ahorrador_solicitado
   // }







 
