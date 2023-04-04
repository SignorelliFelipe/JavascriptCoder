export class Producto{
    constructor(id,nombre,color,precio,imgSRC){
        this.id = id;
        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
        this.imgSRC = imgSRC;
       
    }
};
export class Cliente{
    constructor(id,nombre,apellido){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
    }
};