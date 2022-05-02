

function sumando (a:number,b:number):number{
    return a + b ;
    }
    
    const arrowFunction = (a:number,b:number) => {
        return a + b;
    }
    
    function multiplicacion ( numero:number,otroNumero?:number,base:number=2){
        return numero + base;
    }
    
    interface operadorCOD{
     nombre:string;
     blindaje:number;
     mostrarBlindaje: () => void;
    }

    


    function curar(personaje:operadorCOD,placas:number) {
     personaje.blindaje = personaje.blindaje + placas
     console.log(personaje)
    }
    

    const nuevoOperador:operadorCOD = {
        nombre : 'Ghost',
        blindaje: 1,
        mostrarBlindaje(){
            console.log('El blindaje de '+this.nombre+'es de'+this.blindaje)
        }
    }

    curar(nuevoOperador,2);