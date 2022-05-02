interface domicilio {
    calle: string,
    pais:string,
    ciudad:string
}

interface avenger{
    nombre : String,
    edad : number,
    direccion: domicilio,
    mostarDireccion: () =>string;  
}

const superHeroe: avenger = {
    nombre: 'Spiderman',
    edad:30,
    direccion : {
        calle:'Main st',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostarDireccion(){
        return this.nombre + ', '+ this.direccion.ciudad + ', '+ this.direccion.pais
    }
}
    const direccion = superHeroe.mostarDireccion();
    console.log(direccion);