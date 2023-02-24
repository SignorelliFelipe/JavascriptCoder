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
