//1. calcular el precio final de una compra despues de aplicar un descuento

let precio = 19;
let descuento = 0.2;
let precioFinal = precio - (precio * descuento);

console.log("El precio final de la compra es:" + precioFinal)

//2. Calcula el total de una factura de un restaurante y despues aplicar propina y verificar si se puede aplicar un descuento.

let precioFactura = 100; 
let propina = 20;
let totalFactura = precioFactura + propina;
// Si el numero es par se le hace un descuento y si no es par no se le hace descuento :( )
if (totalFactura % 2 == 0){
    console.log("Se puede aplicar un descuento del 10%")
    let descuento = 0.1;
    let totalFacturaFinal= totalFactura - (totalFactura - descuento)
    console.log("El precio final con descuento aplicado es: " + totalFacturaFinal);
    } else {
        console.log("No se puede aplicar descuento")
    }

// 3. Calcula la cantidad de dias que una persona ha vivido basandote en su edad.
let edad = parseInt(prompt ("Diga su edad"))
let dias = edad * 365;
console.log("Usted ha vivido " + dias + " dias");



