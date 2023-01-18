/* CLASE 1

let nombreAsignado = prompt("Hola, ingrese su Nombre por favor");

console.log("Ahora aparece cosas en la consola");

console.log(nombreAsignado);

alert("Ahora te muestro tu nombre mira: "+nombreAsignado);

let x1 =24, x2=55;

let resultado1 = x1+x2;

console.log(resultado1); */
//clase 2

/* let nombreUsuario1 = prompt("Ingrese su nombre por favor: ");

if(nombreUsuario1 == ""){
    alert("No escribiste nada pepega.");
}
else{
    alert("Usted ingreso este nombre: "+nombreUsuario1);
} */

/* let precio1=39;

if (precio1 < 12){
    alert("Precio es menor a 12");
}
else if(precio1<40){
    alert("Precio menos a 50");
}
else{
    alert("El precio es re alto no jodas flaco.");
} */
/* let x1 = prompt("Ingrese un numero: ");

let color1 = prompt("Ingrese un color: ");

if (x1>50 &&  color1=="Rojo") {
    alert("Todo coincide, es rojo y es major a 50");
}
else{
    alert("Algo no coincide.");
}
 */

//CLASE 3 ITERADORES
/* let NumeroUsuraio1 = parseInt(prompt("Ingresa un numero flaco: "));

for(let i =0;i<=10;i++){
    let resultado1 =i *NumeroUsuraio1;
    console.log(NumeroUsuraio1 + " X "+ i +" = " +resultado1);
} */
/* for (let i = 1; i <= 4; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    console.log(" Turno  N° "+i+" Nombre: "+ingresarNombre);
}
 */

/* for (let i = 1; i <= 5; i++) {

    let nombre = prompt("Ingresar un nombre: ");
    //pisa al siguiente
    if(i==3){
        continue;
    }

    if(i == 3){
        console.log(nombre + " Es el tercero y se detiene ")
        break;
    }
    console.log(nombre +" Es el jugador numero: "+i);
} */

/* let entrada = prompt("ingresa un dato: "); */

/* while (entrada != "ESC") {
    console.log(" Usted ingreso: "+entrada);
    
    entrada = prompt("ingresa un dato: ");
} */

/* do{
    console.log(" Usted ingreso: "+entrada);
    
    entrada = prompt("ingresa un dato: ");
}while(entrada != "ESC") */


let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
while(entrada != "ESC" ){
   switch (entrada) {
       case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
       default:
           alert("¿QUIÉN SOS?")
           break;
   }
   entrada = prompt("Ingresar un nombre");
}
