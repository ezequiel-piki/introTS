export interface Producto {
    desc:string,
    precio:number
}

const telefono: Producto = {
    desc:'Motorola c115',
    precio:150
}

const tablet: Producto = {
    desc: 'Samsung tablet',
    precio:200
}




export function calculaIva(producto:Producto[]):[number,number]{
    let total = 0;
    producto.forEach(({precio}) => {
      total = total + precio;  
    });
    return [total,total*0.21];
}


const articulos =[telefono,tablet];

const [total,iva] = calculaIva(articulos)

console.log('El total es:'+total);
console.log('El iva es de: '+iva);