interface Pasajero {
    nombre: string,
    hijos ? : string[]
}

const pasajero1: Pasajero = {
nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Laura',
    hijos: ['El Noba','L-Gante']
}

function imprimeHijos (pasajero:Pasajero):void{
const cuantosHjos = pasajero.hijos?.length||0;
console.log(cuantosHjos);
}

imprimeHijos(pasajero2)