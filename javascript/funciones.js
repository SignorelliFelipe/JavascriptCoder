
export const MostrarArray =(array)=>{
    array.forEach((el)=>{
        console.log(el);
    });
}

export const MostrarTotal =(Array,container)=>{
    console.log("");
            let total=0;
            Array.forEach((el)=>{
                total+=el.precio;
            });
            container.innerHTML="";
        container.innerHTML=`
        El precio total por ahora es: `+"$ "+total+`
        `;
           //Este console es de refenrencia para ver lo que pasa
            console.log((`
                    El precio total por ahora es: `+"$ "+total+`
                    `
            ));;
}
