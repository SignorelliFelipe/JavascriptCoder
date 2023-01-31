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


/* let entrada = prompt("Ingresar un nombre");
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
} */

/* function solicitarNombre(){
    let nombreIngresado   = prompt("Ingresar nombre")
    alert("El nombre ingresado es " + nombreIngresado)
} 
solicitarNombre();
solicitarNombre();
solicitarNombre();

 */
/* function sumarDosNumeros(){
    let var1 = parseInt(prompt("Ingresa un numero flaco: "));
    let var2 = parseInt(prompt("Ingresa un numero flaco: "));
    let resutlado = var1 + var2;

    return resutlado;
}

console.log("El resultado es: "+ sumarDosNumeros()); */

/* let var1 = parseInt(prompt("Ingresa un numero flaco: "));
let var2 = parseInt(prompt("Ingresa un numero flaco: "));
sumarDosNumeros(var1,var2); */

/* const suma  = (a, b) => { return a + b };
console.log("El RESULTADO DE SUMAR 15Y20 ES: " + suma(15,20)); */


/* const primerNumero =parseInt(prompt("Escribir un numero: "));
const segundorNumero =parseInt(prompt("Escribir un numero: "));
const operacion = prompt("Opereacion: ");

switch (operacion) {
    case "suma":
        console.log(primerNumero + segundorNumero);
        break;
    case "resta":
        console.log(primerNumero - segundorNumero);
        break;
    case "dividir":
        console.log(primerNumero / segundorNumero);
        break;
    case "multiplicar":
        console.log(primerNumero * segundorNumero);
        break;
    default:
        console.log("Ingreso algo mal.");
        break;
} */

/* let nombreAsignado = prompt("Hola, ingrese su Nombre por favor"); */
//PRE ENTREGA 1 
/* 
function PedirNombre_Saludar(){

    let nombreAsignado = prompt("Hola, ingrese su Nombre por favor");

    let nombreAsignadoNormalizado = nombreAsignado.toUpperCase();
    
    console.log("Hola! "+nombreAsignado);
     //No uso un case par 3 casos locos
    if(nombreAsignadoNormalizado == "DIANA"){
        alert("Bienvenida a mi primera entrega Diana! ");
    }else if(nombreAsignadoNormalizado == "CESAR"){
        alert("Bienvenido a mi primera entrega Cesar! ");
    }else{
        alert("Disculpa creo que todavia no nos conocemos! ");
        alert("Un gusto verte por aca.")
    }   
}

for (let i = 0; i < 3; i++) {
    PedirNombre_Saludar();
    
}  

alert("Ahora vamos a calcular lo gastado.");



function SumarCompra(){
    let total =0;
    let CantitadaCompra = parseInt(prompt("Ingrese la cantidad de itemns comprados: "));
    let i =0;
    while(CantitadaCompra > i){
        let PrecioArrticulo = parseFloat(prompt("Ingrese el valor del producto: "));

        total += PrecioArrticulo;
        i++;

    }
    return total;
}

alert("El total a pagar es de: $"+SumarCompra()+" Pesos"); */

//CLASE 5 OBJETOS


/* const persona = {
    edad: 23,
    genero:"hombre",
    nombre:"Felipe",
};

console.log(persona.edad);

persona.domicilio = "Nueva pompeya";

console.log(persona.domicilio);


const Auto ={
    marca:"Peugeot",
    modelo:"208 active",
    caja:"automatica",
    color:"rojo",
    stock:{
        almacen:20,
        deposito:150,
        estado:{
            descriptcion:"buen estado",
            tipo:2,
        },
    },
};

console.log(Auto.stock.almacen)
console.log(Auto.stock.estado.tipo) */


/* function Persona(nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.vistaPrevia = function(){
        console.log(this);
    };
    this.MediaEdad = function(){
        console.log("la mitad de la edad es "+ this.edad *0.5 );
    };
};

const persona1 = new Persona("Felipe",45,"arquimedes 2145");
const persona2 = new Persona("Marta",422,"jose 2345");

persona2.calle = "ciudad del lago 123"; */
/* console.log(persona2); */

/* persona2.MediaEdad();
persona1.MediaEdad();

 */
/* const computadora ={
    sistema: "Window",
    color: "gris",
    marca: "dell",
};

console.log("sistema" in computadora);
console.log("papa" in computadora);

for(const maquina in computadora){
    console.log(computadora[maquina]);
}; */

/* let ids= 0;
class Celular{
    constructor(id,marca,modelo,empresa,so,camara){
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.empresa = empresa;
        this.so = so;
        this.camara = camara;
    }
    describir(){
        console.log("Mis especificaciones son: "+ this.camara);
    }
}

const g51 = new Celular(ids++,"morotorola","g51","tuenti","android","11px");
const g52 = new Celular(ids++,"aasdasd","g51","223as","android","23px");

console.log(g51);
g52.describir();
 */

/* class Anillo{
    constructor(modelo,precio,tamaño,color){
        this.modelo = modelo;
        this.precio = precio;
        this.tamaño = tamaño;
        this.color = color;
    }
    describir(){
        console.log("El modelo es: "+this.modelo+" Y el precio es: "+this.precio);
    }
}


const Anillo1 =new Anillo("dragon",745,"chico","azul fuego");
const Anillo2 =new Anillo("lagarto",123,"grande","amarillo patito"); */


// CLASE 6 ARRAY

/* const listaBool = [true,false,true];
const listaChart = ["hola","chau","pepega"];
const listaCosas = [123,"palabras",true,13.4,[]];

console.log(listaBool);
 console.log(listaChart.join(" chau "));
console.log(listaChart); 
console.log(listaCosas);
console.log("Ahora muestro el tercer lugar " + listaCosas[2]);

console.log("Separo las weas.");
listaChart.push(213);

for(let i=0;i<listaChart.length;i++){
    console.log(listaChart[i]);
}
//ver mi carpeta para los splice y esas cosas.

const A3 = listaChart.concat(listaCosas);
const A4 = A3.slice(2,5);

console.log(A3);
console.log(A4); */

/* const A1 =[];
let CantidadArray = prompt("Ingresar cantidad de nombres a ingresar");

for (let i = 0; i < CantidadArray; i++) {
    A1[i] = prompt("Nombre: ");
    
}
console.log(A1);

function eliminarNombre(nombre){
    const indice =A1.indexOf(nombre);
    if(indice != -1){
    A1.splice(indice,1);
    console.log("Se elimino "+nombre+" del array");
    }
    else{
        console.log("No puedo eliminar nada si no esta el nombre ");
    }
}
eliminarNombre("FELIPE");
console.log(A1);
 */
/* const objeto1 = { id: 1, producto: "Arroz" };
const array   = [objeto1, { id: 2, producto: "Fideo" }];
array.push({ id: 3, producto: "Pan" ,estado:{descripcion: "En stock"}});
 console.log(array); 

for(const elemento of array){
    console.log(elemento);
} */


class Producto{
    constructor(nombre,stock,precio){
        this.nombre=nombre;
        this.stock =stock;
        this.precio=precio;
    }
}

const ListaDeProductos=[];

let opcion =prompt("desea ingresar un producto? Si para continuar ESC para salir: ");

while(opcion != "ESC"){
    const nombre = prompt("Ingrese nombre: ");
    const stock = parseFloat(prompt("Ingrse stock: "));
    const precio = parseInt(prompt("Ingrese precio"));

    const producto = new Producto(nombre, stock, precio);
    ListaDeProductos.push(producto);

    opcion = prompt(" ESC para salir ");
}

console.log(ListaDeProductos);