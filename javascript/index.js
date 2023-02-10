//Otro acumulador
let total=0;
//Dos contadores para cada ID por separado
let idsProducos= 0;
let idsPerersonas =0;
//dos clases parecidad que me serviran para rellenar los arrays
class Producto{
    constructor(id,nombre,color,precio){
        this.id = id;
        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
       
    }
};
class Cliente{
    constructor(id,nombre,apellido){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
    }
};

//tres arrays donde voy a juntar todo
const Productos = [];
const Clientes = [];
const CarritoCompras=[];


//Productos randoms para tener algo que vender
Productos.push(new Producto(idsProducos++,"Anillo","Azul",5400));
Productos.push(new Producto(idsProducos++,"Anillo","Rojo",4500));
Productos.push(new Producto(idsProducos++,"Collar","Blanco",7600));
Productos.push(new Producto(idsProducos++,"Collar","Negro",8600));
Productos.push(new Producto(idsProducos++,"Buzo","Negro",3500));
Productos.push(new Producto(idsProducos++,"Remera","Blanca",1245));

//Un  nombres de Clientes random para que supuestamnete ya exista mas gente
Clientes.push(new Cliente(idsPerersonas++,"Pepe","Argento"));

//Funcion repetida basica
function mostrarArray(array){
    array.forEach((el)=>{
        console.log(el);
    });
};


//me presento y doy contexto
console.log("Buenos dias, esta es la segunda entrega :D Ahora van a poder ver un pequeño menu en pantalla y en la consola.");

alert("Buenos dias, esta es la segunda entrega :D Ahora van a poder ver un pequeño menu en pantalla y en la consola.");
alert("LEER EL SIGUIENTE MENSAJE");
//Pongo otra aclaracion por el VS. No se que pasa de verdad que le di vueltas pero no entiendo xq tengo que tocar la ultima opcion para luego darle F5 y recien ahi funciona.
alert("Si no puede ejercutar el codigo al tocar algun boton toque el numero 7 para SALIR y luego F5. Estuve hablando con tutores y CoderAsk pero sigo sin saber que es lo que ocasiona este inconveniente.");
 
let opcion = parseInt(
    prompt(`Buenas ¿Cual opcion va a elegir?
                              1- Ver Productos 
                              2- Agregar producto a la compra
                              3- Ver Total 
                              4- Buscar producto
                              5- Agregar Nuevo cliente
                              6- Ver clientes 
                              7- Salir  
  `)
  );

while(opcion !== 7){
    switch (opcion) {
        case 1:
            //Aca muestro el array con el forEach, casi uso un for con el largo del array pero esto hacer el codigo mas limpio
            console.log("");
            console.log("Mostrando Productos: ");
            mostrarArray(Productos);
            break;
        case 2:
            //El case 2 esta separado del 1 solamente xq hay gente que quiere ve los productos sin mas y no queria mostrar el mensaje de agregar al carrito. 
            console.log("");
            console.log("Mostrando Productos para agregar al carro: ");
            mostrarArray(Productos);
            let OpcionAarray = prompt("Ingrese la ID del Producto para agregarlo: ");
            CarritoCompras.push(Productos[OpcionAarray]);
            break; 
        case 3:
            // Ya con el Array de Carrito creado solo sumo los .precio y los muestro en pantalla
            console.log("");
            CarritoCompras.forEach((el)=>{
                total+=el.precio;
            });
            alert("El precio total por ahora es: "+"$"+ total);
           
            console.log((`
                    El precio total por ahora es: `+"$ "+total+`
                    `
            ));;
            
            break;
        case 4:
            //Un pequeño Buscador que devuelve Arrays con los datos de los Productos
            console.log("");
            let Buscador=prompt("Ingrese nombre para ser buscado: ")
            const buscarProducto = Productos.filter((el) => el.nombre.includes(Buscador));
            mostrarArray(buscarProducto);
            break;
        case 5:
            //Esto es para que se puedan crear nuevas IDs y nuevos clientes
            console.log("");
            let opcion1 =prompt("Si ya es cliente escriba ESC, sino escriba cualquier para continuar");

            while(opcion1 != "ESC"){
                const nombre = prompt("Ingrse nombre: ");
                const apellido = prompt("Ingrese apellido: ");

                const AuxClientes = new Cliente(idsPerersonas++,nombre, apellido);
                Clientes.push(AuxClientes);

                opcion1 = prompt(" ESC para salir o cualquier otra cosa para seguir: ");
            }

            break;
        case 6:
            // Mostrar que el cliente fue ingresado correctamente
            console.log("");
            mostrarArray(Clientes);
            break;
        default:
            break;
    }
    opcion = parseInt(
        prompt(`¿Cual opcion va a elegir?
                                  1- Ver Productos 
                                  2- Agregar producto a la compra
                                  3- Ver Total 
                                  4- Buscar producto
                                  5- Agregar Nuevo cliente
                                  6- Ver clientes 
                                  7- Salir  
      `)
      );
      
    if (opcion == 7) {
        alert("Muchas gracias por su tiempo. Vuelva pronto!");
        console.log("Muchas gracias por su tiempo. Vuelva pronto!");
    }
};
