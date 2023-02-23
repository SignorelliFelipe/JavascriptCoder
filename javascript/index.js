//Otro acumulador
let total=0;
//Dos contadores para cada ID por separado
let idsProducos= 0;
let idsPerersonas =0;
//Importo las clases
import { Producto, Cliente } from "./Clases.js";

//Importo funciones
import { MostrarArray, MostrarTotal } from "./funciones.js";


//tres arrays donde voy a juntar todo
const Productos = [];
const Clientes = [];
//checkeo si tengo algo  esto lo vuelvo a utilizar mas abajo tambien
const CarritoCompras=JSON.parse(localStorage.getItem("carritoStorage"))  || [];


//Productos randoms para tener algo que vender
Productos.push(new Producto(idsProducos++,"Anillo A","Azul",5400));
Productos.push(new Producto(idsProducos++,"Anillo R","Rojo",4500));
Productos.push(new Producto(idsProducos++,"Collar B","Blanco",7600));
Productos.push(new Producto(idsProducos++,"Collar N","Negro",8600));
Productos.push(new Producto(idsProducos++,"Buzo","Negro",3500));
Productos.push(new Producto(idsProducos++,"Remera","Blanca",1245));

//Un  nombres de Clientes random para que supuestamnete ya exista mas gente
Clientes.push(new Cliente(idsPerersonas++,"Pepe","Argento"));



//Botones a usar
const botonProductos = document.querySelector("#botonProductos");
const botonCarrito =document.querySelector("#botonCarrito");
const botonClientes =document.querySelector("#botonClientes");
const botonTotal =document.querySelector("#botonTotal");
const botonReinicio =document.querySelector("#botonReinicio");
const botonbotonBuscar=document.querySelector("#botonBuscar");




const container = document.querySelector(".container");


// EVENTOS



botonProductos.addEventListener("click",()=>{
    container.innerHTML="";
    Productos.forEach((e,index)=>{
        container.innerHTML+=`
                <div>
                    <p>Producto: ${e.nombre}.</p>
                    <p>Precio: $${e.precio}.</p>
                    <button class="AgregarCarrito">Agregar al changuito </button>
                </div>
                <hr>
        `;
    
        
    });
        const botonesCarrito = document.querySelectorAll(".AgregarCarrito");
        botonesCarrito.forEach((boton, index) => {
                boton.addEventListener("click", () => {
                    CarritoCompras.push(Productos[index]);
                    //para derme idea si funciona dsp borrar
                    console.log("Producto agregado!");
                    //Guardo en local storage
                    localStorage.setItem("carritoStorage", JSON.stringify(CarritoCompras));
        });
        

  });
  
})

botonbotonBuscar.addEventListener("click",()=>{
    container.innerHTML="";
    container.innerHTML=`<form id="myForm">
    <label for="name">Producto:</label>
    <input type="text" id="name" name="name"><br><br>
    <button type="submit">Buscar </button>
  </form>` ;

  const form = document.getElementById('myForm');

    form.addEventListener('submit', (event) => {
    event.preventDefault(); // Previene que el formulario se envíe
    
    const name = document.getElementById('name').value;
 

    const buscarProducto = Productos.filter((el) => el.nombre.includes(name));
  
    buscarProducto.forEach((e)=>{
        container.innerHTML+=`
                <div>
                    <p>Producto: ${e.nombre}.</p>
                    <p>Precio: $${e.precio}.</p>
                </div>
                <hr>
        `;
    
        
    });

})});

botonCarrito.addEventListener("click",()=>{
    container.innerHTML="";
    const CarritoCompras=JSON.parse(localStorage.getItem("carritoStorage"))  || [];
    CarritoCompras.forEach((e)=>{
        container.innerHTML+=`
                <div>
                    <p>Producto: ${e.nombre}.</p>
                    <p>Precio: $${e.precio}.</p>
                 </div>
    <hr>
`;
        
    })
    
});

botonClientes.addEventListener("click",()=>{
    container.innerHTML="";
    Clientes.forEach((e)=>{
        container.innerHTML=`
                <div>
                    <p>Nombre: ${e.nombre}.</p>
                    <p>Apellido: ${e.apellido}.</p>
                 </div>
    <hr>
`;
        
    })
});

botonTotal.addEventListener("click",()=>{
    const CarritoCompras=JSON.parse(localStorage.getItem("carritoStorage"))  || [];
    container.innerHTML="";
  
    
        MostrarTotal(CarritoCompras,container);
        localStorage.setItem("carritoStorage", JSON.stringify(CarritoCompras));

})

botonReinicio.addEventListener("click",()=>{
    localStorage.clear();
    localStorage.getItem("carritoStorage");
})
//me presento y doy contexto
// console.log("Buenos dias, esta es la segunda entrega :D Ahora van a poder ver un pequeño menu en pantalla y en la consola.");

// alert("Buenos dias, esta es la segunda entrega :D Ahora van a poder ver un pequeño menu en pantalla y en la consola.");

// let opcion = parseInt(
//     prompt(`Buenas ¿Cual opcion va a elegir?
//                               1- Ver Productos 
//                               2- Agregar producto a la compra
//                               3- Ver Total 
//                               4- Buscar producto
//                               5- Agregar Nuevo cliente
//                               6- Ver clientes 
//                               7- Salir  
//   `)
//   );

// while(opcion !== 7){
//     switch (opcion) {
//         case 1:
//             //Aca muestro el array con el forEach, casi uso un for con el largo del array pero esto hacer el codigo mas limpio
//         /*     console.log("");
//             console.log("Mostrando Productos: "); */
//             MostrarArray(Productos);
//             break;
//         case 2:
//             //El case 2 esta separado del 1 solamente xq hay gente que quiere ve los productos sin mas y no queria mostrar el mensaje de agregar al carrito. 
//       /*       console.log("");
//             console.log("Mostrando Productos para agregar al carro: "); */
//             MostrarArray(Productos);
//             let OpcionAarray = prompt("Ingrese la ID del Producto para agregarlo: ");
//             CarritoCompras.push(Productos[OpcionAarray]);
//             break; 
//         case 3:
      
//             MostrarTotal(CarritoCompras);
            
//             break;
//         case 4:
//             //Un pequeño Buscador que devuelve Arrays con los datos de los Productos
//            /*  console.log(""); */
//             let Buscador=prompt("Ingrese nombre para ser buscado: ")
//             const buscarProducto = Productos.filter((el) => el.nombre.includes(Buscador));
//             MostrarArray(buscarProducto);
//             break;
//         case 5:
//             //Esto es para que se puedan crear nuevas IDs y nuevos clientes
//             console.log("");
//             let opcion1 =prompt("Si ya es cliente escriba ESC, sino escriba cualquier para continuar");

//             while(opcion1 != "ESC"){
//                 const nombre = prompt("Ingrse nombre: ");
//                 const apellido = prompt("Ingrese apellido: ");

//                 const AuxClientes = new Cliente(idsPerersonas++,nombre, apellido);
//                 Clientes.push(AuxClientes);

//                 opcion1 = prompt(" ESC para salir o cualquier otra cosa para seguir: ");
//             }

//             break;
//         case 6:
//             // Mostrar que el cliente fue ingresado correctamente
//             console.log("");
//             MostrarArray(Clientes);
//             break;
//         default:
//             break;
//     }
//     opcion = parseInt(
//         prompt(`¿Cual opcion va a elegir?
//                                   1- Ver Productos 
//                                   2- Agregar producto a la compra
//                                   3- Ver Total 
//                                   4- Buscar producto
//                                   5- Agregar Nuevo cliente
//                                   6- Ver clientes 
//                                   7- Salir  
//       `)
//       );
      
//     if (opcion == 7) {
//         alert("Muchas gracias por su tiempo. Vuelva pronto!");
//         console.log("Muchas gracias por su tiempo. Vuelva pronto!");
//     }
// };