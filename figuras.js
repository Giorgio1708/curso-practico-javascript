//codigo cuadrado
function perimetroCuadrado(lado){ 
    return lado * 4;
}
function areaCuadrado(lado){ 
    return lado * lado;
}
//codigo triangulo
function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
    
}

function isosceles (lado1,lado2,base) {
    if (lado1 === lado2){
        return "Si es isosceles";
    }else if (lado1 === base){
        return "Si es isosceles";
    }else if (lado2 === base){
        return "Si es isosceles";
    }else {
        return "No es isosceles, recuerda que almenos 2 de sus lados deben ser de igual valor";
    }
}
function alturaIsosceles (lado1,lado2, base){
    let valor1 =lado1;
    let valor2 = lado2;
    let valor3 = base;
    let valDef1 = []
    let valDef2 = [];

    if(valor1 === valor2){
        valDef1.push(valor1);
        valDef2.push(valor3);
    }else if(valor1 ===valor3){
        valDef1.push(valor1);
        valDef2.push(valor2);
    }else if(valor2 === valor3) {
        valDef1.push(valor2);
        valDef2.push(valor1);
    }

    const operacion = (valDef1[0] ** 2) - ((valDef2[0] ** 2)/4);
    const valorElevado = Math.sqrt(operacion);
    return valorElevado.toFixed(2);
}
//codigo circulo

function diametroCirculo (radio) {
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    const calculo = diametro * PI;
    return calculo.toFixed(2);
}
function areaCirculo (radio){
    const calculo = (radio * radio) *PI;
    return calculo.toFixed(2);
}
//Aqui empiezan las funciones que interactuan con HTML
//funciones cuadrado
function calcularPerimetroCuadrado(){
    const input =document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

function calcularAreaCuadrado() {
    const input =document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}
//funciones triangulo
function calcularPerimetroTriangulo(){
    const input1 =document.getElementById("inputTriangulo1");
    const input2=document.getElementById("inputTriangulo2");
    const input3 =document.getElementById("inputTrianguloBase");
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;

    const perimetro = perimetroTriangulo(Number(value1), Number(value2), Number(value3));
    alert(perimetro)
}

function calcularAreaTriangulo() {
    const input1 =document.getElementById("inputTrianguloBase");
    const input2 =document.getElementById("inputTrianguloAltura");

    const value1 = input1.value;
    const value2 = input2.value;
    const area = areaTriangulo(Number(value1),Number(value2));
    alert(area);
}

function calcularIsosceles(){
    const input1 =document.getElementById("inputTriangulo1");
    const input2=document.getElementById("inputTriangulo2");
    const input3 =document.getElementById("inputTrianguloBase");
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;

    const calcularIsos = isosceles(Number(value1), Number(value2), Number(value3));
    alert(calcularIsos)
}

function calcularAltura(){
    const input1=document.getElementById("inputTriangulo1");
    const input2=document.getElementById("inputTriangulo2");
    const input3 =document.getElementById("inputTrianguloBase");

    const value1 = input1.value;
    const value2 = input2.value
    const value3 = input3.value;
    
    const isoAltura = alturaIsosceles(value1,value2,value3);
    alert(isoAltura);
}
//funciones circulo
function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculoRadio");
    
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}

function calcularDiametroCirculo() {
    const input = document.getElementById("inputCirculoRadio");
    
    const value = input.value;
    const area = diametroCirculo(value);
    alert(area);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculoRadio");
    
    const value = input.value;
    const area = perimetroCirculo(value);
    alert(area);
}