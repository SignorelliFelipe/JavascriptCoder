
/* export const MostrarArray =(array)=>{
    array.forEach((el)=>{
        console.log(el);
    });
}
 */
 export const MostrarTotal =(Array,container)=>{
    console.log("");
            let total=0;
            Array.forEach((el)=>{
                total+=el.precio;
            });

            container.innerHTML="";

            if(total !=""){
              container.innerHTML=`
              El precio total por ahora es: `+"$ "+total+`
             `;
                   //Este console es de refenrencia para ver lo que pasa
            console.log((`
                    El precio total por ahora es: `+"$ "+total+`
                    `
            ))
        }
        else{
            container.innerHTML=`
              Actualmente no tiene productos!
             `;
                   //Este console es de refenrencia para ver lo que pasa
            console.log((`
                    El carrito esta vacio ya que no tiene productos!
                    
                    `
            ))
            Toastify({
                text: `No tiene productos agregados, entonces no tiene total!`,
                duration: 3000,
                style: {
                    background: "linear-gradient(to right, #123650, #1fa6ce)",
                },
            }).showToast();

        }
            
} 
