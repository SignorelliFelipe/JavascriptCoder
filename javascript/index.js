
//Dos contadores para cada ID por separado
let idsProducos= 0;
let idsPerersonas =0;
//Importo las clases
import { Producto, Cliente } from "./clases.js";

//Importo funciones
import {MostrarTotal } from "./funciones.js";


//tres arrays donde voy a juntar todo
const Productos = [];
const Clientes = JSON.parse(localStorage.getItem("ClientesStorage")) || [];
//checkeo si tengo algo  esto lo vuelvo a utilizar mas abajo tambien
const CarritoCompras=JSON.parse(localStorage.getItem("carritoStorage"))  || [];



//Productos randoms para tener algo que vender
Productos.push(new Producto(idsProducos++,"Anillo A","Azul",5400,`https://http2.mlstatic.com/D_NQ_NP_611177-MLA47113566833_082021-W.jpg`));
Productos.push(new Producto(idsProducos++,"Anillo R","Rojo",4500,`https://http2.mlstatic.com/D_NQ_NP_925133-MLA46237763276_062021-W.jpg`));
Productos.push(new Producto(idsProducos++,"Collar B","Blanco",7600,`https://mononainsumos.com.ar/wp-content/webp-express/webp-images/uploads/2020/11/WhatsApp-Image-2021-09-22-at-11.31.10.jpeg.webp`));
Productos.push(new Producto(idsProducos++,"Collar N","Negro",8600,`https://d3ugyf2ht6aenh.cloudfront.net/stores/067/827/products/img-20220405-wa00131-43ce1f88c8b8d15e7e16491892093244-1024-1024.webp`));
Productos.push(new Producto(idsProducos++,"Buzo","Negro",3500,`https://d3ugyf2ht6aenh.cloudfront.net/stores/001/685/943/products/53bb097a-4654-4c0b-aa4a-e5608b8a5ff71-7526ec977181699f0016575912940176-1024-1024.jpeg`));
Productos.push(new Producto(idsProducos++,"Remera","Blanca",1245,`https://http2.mlstatic.com/D_NQ_NP_732343-MLA30343533391_052019-O.webp`));

//Boton en el nav

const ApiPrueba =document.querySelector("#ApiPrueba")

//Botones para usar
const botonProductos = document.querySelector("#botonProductos");
const botonbotonBuscar=document.querySelector("#botonBuscar");
const botonCarrito =document.querySelector("#botonCarrito");
const botonClientes =document.querySelector("#botonClientes");
const botonNuevoCliete =document.querySelector("#botonNuevoCliete");
const botonTotal =document.querySelector("#botonTotal");


const botonReinicio =document.querySelector("#botonReinicio");
const botonReinicioCliente =document.querySelector("#botonReinicioCliente");
const botonEnBlanco= document.querySelector("#botonEnBlanco");






 const container = document.querySelector(".container"); 


// EVENTOS


botonProductos.addEventListener("click",()=>{
    container.innerHTML="";
    Productos.forEach((e,index)=>{
        container.innerHTML+=`
                <div>
                    <p>Producto: ${e.nombre}.</p>
                    <p>Precio: $${e.precio}.</p>
                    <img src="${e.imgSRC}" class="ProductosIMG">
                    <button class="AgregarCarrito">Agregar al changuito </button>
                </div>
                <hr>
        `;
    
        
    });
        const botonesCarrito = document.querySelectorAll(".AgregarCarrito");
        const CarritoCompras=JSON.parse(localStorage.getItem("carritoStorage"))  || [];
        botonesCarrito.forEach((boton, index) => {
                boton.addEventListener("click", () => {
                    CarritoCompras.push(Productos[index]);
                    //para derme idea si funciona dsp borrar
                    console.log("Producto agregado!");
                    //Guardo en local storage
                    localStorage.setItem("carritoStorage", JSON.stringify(CarritoCompras));
                    Toastify({
                        text: `${Productos[index].nombre}. agregado!`,
                        duration: 2000,
                        style: {
                            background: "linear-gradient(to right, #123650, #1fa6ce)",
                          },
                    }).showToast();
        });
        

  });
  
})


botonNuevoCliete.addEventListener("click",()=>{
    container.innerHTML=`<form id="myForm">
    <label for="name">Nombre:</label>
    <input type="text" id="nombre" name="nombre"><br><br>
    <label for="apellido">Apellido:</label>
    <input type="text" id="apellido" name="apellido"><br><br>
    <button type="submit">Enviar </button>
  </form>` ;

  const form = document.getElementById('myForm');

  form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  Clientes.push(new Cliente(idsPerersonas++,nombre,apellido));
  localStorage.setItem("ClientesStorage", JSON.stringify(Clientes));

  Toastify({
    text: `Nuevo cliente registrado !`,
    duration: 2000,
    style: {
        background: "linear-gradient(to right, #123650, #1fa6ce)",
      },
}).showToast();

 ;

})



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
                    <img src="${e.imgSRC}" class="ProductosIMG">
                    <button class="AgregarCarrito">Agregar al changuito </button>
                </div>
                <hr>
        `;
        const botonesCarrito = document.querySelectorAll(".AgregarCarrito");
        const CarritoCompras=JSON.parse(localStorage.getItem("carritoStorage"))  || [];
        botonesCarrito.forEach((boton, index) => {
                boton.addEventListener("click", () => {
                    CarritoCompras.push(Productos[index]);
                    //para derme idea si funciona dsp borrar
                    console.log("Producto agregado!");
                    //Guardo en local storage
                    localStorage.setItem("carritoStorage", JSON.stringify(CarritoCompras));
                    Toastify({
                        text: `${Productos[index].nombre}. agregado!`,
                        duration: 2000,
                        style: {
                            background: "linear-gradient(to right, #123650, #1fa6ce)",
                          },
                    }).showToast();
        })
        
    });


})})});


botonCarrito.addEventListener("click",()=>{
    container.innerHTML="";
    const CarritoCompras=JSON.parse(localStorage.getItem("carritoStorage"))  || [];
    
   if(CarritoCompras.length>0){
    CarritoCompras.forEach((e)=>{
      container.innerHTML+=`
              <div>
                  <p>Producto: ${e.nombre}.</p>
                  <p>Precio: $${e.precio}.</p>
               </div>
        <hr>
      `;})
   }
   else{
    container.innerHTML+=`El carrito esta vacio! `;
          Toastify({
            text: `Actualmente no tiene nada en el carrito! `,
            duration: 2000,
            style: {
                background: "linear-gradient(to right, #123650, #1fa6ce)",
              },
        }).showToast();
    
   }
    
});


botonClientes.addEventListener("click",()=>{
  const Clientes = JSON.parse(localStorage.getItem("ClientesStorage")) || [];
    container.innerHTML="";

   if(Clientes.length >0){
    Clientes.forEach((e)=>{
      container.innerHTML+=`
              <div>
                  <p>Nombre: ${e.nombre}.</p>
                  <p>Apellido: ${e.apellido}.</p>
               </div>
              <hr>
            `;})
   }
   else{
    container.innerHTML+=`No tenemos clientes para mostrar! `;
    Toastify({
      text: `Actualmente no tenemos clientes nuevos! `,
      duration: 2000,
      style: {
          background: "linear-gradient(to right, #123650, #1fa6ce)",
        },
  }).showToast();

   }

  
});

botonTotal.addEventListener("click",()=>{
    const CarritoCompras=JSON.parse(localStorage.getItem("carritoStorage"))  || [];
    container.innerHTML=""; 
        MostrarTotal(CarritoCompras,container);  
        localStorage.setItem("carritoStorage", JSON.stringify(CarritoCompras));
 
});

botonReinicio.addEventListener("click",()=>{
    swal({
        title: "Esta seguro?",
        text: "Una vez eliminado no podremos recuperar su carrito!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            localStorage.removeItem("carritoStorage");
            localStorage.getItem("carritoStorage");
          swal("Carrito vaciado correctamente!", {
            icon: "success",
          });
        } else {
          swal("Su carrito sigue igual!");
        }
      });



});


botonReinicioCliente.addEventListener("click",()=>{
    swal({
        title: "Esta seguro?",
        text: "Usted va a eliminar los clientes!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            localStorage.removeItem("ClientesStorage");
            localStorage.getItem("ClientesStorage");
          swal("Cliente vaciado correctamente!", {
            icon: "success",
          });
        } else {
          swal("Los clientes sigune igual!");
        }
      });



})


botonEnBlanco.addEventListener("click",()=>{
    container.innerHTML=""; 
    Toastify({
        text: "La pagina vuelve a ser limpia!",
        duration: 3000,
        style: {
            background: "linear-gradient(to right, #123650, #1fa6ce)",
          },
    }).showToast();
})

//nav bar para la Api

ApiPrueba.addEventListener("click",()=>{
        paraBorrar.innerHTML=`<h2> Futuros productos que vamos a incorporar dentro de poco! </h2>`

   Toastify({
    text: "Acabamos de limpiar todo para que se vea mejor",
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  }).showToast();

   fetch('https://fakestoreapi.com/products')
        .then((data)=>{
            return data.json();
        })
        .then((res)=>{
            res.forEach((el)=>{
                paraBorrar.innerHTML+=`  
                        <img class="ApiImagenes" src="${el.image}" >
                `;
            })
        })
        .catch((error)=>{
            console.log(error);
        })
 
})