class personaNormal{

    constructor(
     public nombre:string,
     public direccion:string



    ){}
}



class Heroe extends personaNormal {
    /* alterEgo:string;
    edad:number;
    nombreReal:string; */
   constructor
   (
   
    alterEgo:string,
    edad:number,
    nombreReal:string

   )
   
   {

    super(nombreReal,'New York,USA');

   }
}

const hulk = new Heroe('Hulk',40,'Bruce Banner');

console.log(hulk);