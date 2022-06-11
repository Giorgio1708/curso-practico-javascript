function calcularPrecioConDescuento(precio, descuento){
const porcentajePrecioDescuento = 100 - descuento;
const precioDescuento =
(precio * porcentajePrecioDescuento) / 100;

return `El precio original es de $${precio}, su precio con el descuento aplicado es de $${precioDescuento}`
}

//de aqui para arriba no se toca nada------------
function calcularPrecioConDescuentoCupon(precio, cupon){
    const {valor} = almacenCupones.find(o => o.codigo == cupon);
    const cuponDescuento = valor ;
    const porcentajePrecioDescuento = 100 - cuponDescuento;
    const precioDescuento = (precio * porcentajePrecioDescuento) / 100;
    
    return `El precio original es de $${precio}, su precio con el cupón de descuento aplicado es de $${Number(precioDescuento)}`
    }
let almacenCupones = [{codigo:"ARROZ2022", valor:20},{codigo:"POLLO2022",valor:15},
{codigo: "ELMIGUEL690", valor: 50}];
//-------------------------------------------------------
//aqui se conecta con html
function buttonPriceDiscount (){
    const inputPrice = document.getElementById("inputPrice");
    const inputDiscount = document.getElementById("inputDiscount");

    const value1 = inputPrice.value;
    const value2 = inputDiscount.value;

    
    const precioConDescuento = calcularPrecioConDescuento(value1,value2)
    const resultP = document.getElementById("resultP");
    resultP.innerText = precioConDescuento ;
}

function buttonCupon(){
    const inputCupon = document.getElementById("inputCupon");
    const Cupon1 = inputCupon.value;
    const inputPrice = document.getElementById("inputPrice");
    const precio = inputPrice.value;

    const calculado = calcularPrecioConDescuentoCupon(precio,Cupon1);
    const discountP = document.getElementById("discountP");
    discountP.innerText =calculado;
}

