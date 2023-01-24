
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

alert("El total a pagar es de: $"+SumarCompra());