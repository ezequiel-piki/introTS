function queTipoSoy<T> (argumento:T){
    return argumento;
    }
    
    let soyString = queTipoSoy('Soy String');
    let soyNumero = queTipoSoy(200);
    let soyArreglo = queTipoSoy([1,2,3,4,5]);
    let soyExplicito = queTipoSoy<number>(100);