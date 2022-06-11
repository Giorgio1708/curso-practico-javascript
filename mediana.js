// arrayOrdena() remplaza a la funcion lista1
function arrayOrdena(valor){
    //recibe todos los valores en un solo array para introducirlos uno por uno en el array
    //para luego ordenarlos de menor a mayor 
    for(let i = 0; i < valor.length; i++){
        lista.push(valor[i])
    }

    lista.sort(function(a, b){
        return a - b;
    });
    return lista;
}
let lista = [];

function calcularPromedio(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    }

function esPar(){
    if (lista.length % 2 === 0){
        return true;
    }else {
        return false;
    }
}

function calcularMediana(){

if (esPar(lista.length) === true){
    const elemento1 = lista[calcularMitad(lista) - 1];
    const elemento2 = lista[calcularMitad(lista)];

    const promedioElemento1y2 = calcularPromedio([elemento1, elemento2]);

    let mediana = promedioElemento1y2;
    return mediana;
    }else {
    mediana = lista[calcularMitad(lista)];
    return mediana;
}
}
function calcularMitad(lista){
    let mitad = parseInt(lista.length / 2);
    return mitad;

}