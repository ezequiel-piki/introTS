interface Reproductor{
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
    }
    
    interface Detalles {
        autor: string,
        año: number
    }
    
    
    
    
    const reproductor: Reproductor ={
        volumen:90,
        segundo:36,
        cancion:'yendo no, llegando',
        detalles: {
            autor: 'El Noba',
            año: 2021
        }
    }
    
    
    
    const {volumen,segundo,cancion,detalles}=reproductor;
    const {autor}=detalles;
    
    console.log('El volumen actual es de: ', volumen);
    console.log('El segundo actual es: ', segundo);
    console.log('La cancion que estas escuchando es de: ', cancion);
    console.log('El autor es: ', autor);