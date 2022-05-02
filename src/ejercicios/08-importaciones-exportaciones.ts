import { calculaIva, Producto } from "./07-desestructuracion-de-argumentos";



const carritoCompras:Producto[] = [
    
    {
    desc:'telefono 1',
    precio:100

    },
    {
        desc:'telefono 2',
        precio:150
    },

];

const [total,iva] = calculaIva(carritoCompras);

console.log('total:'+total);
console.log('iva:'+iva);