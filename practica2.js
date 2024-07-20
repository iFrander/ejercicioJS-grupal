/* 4.) Calcula el costo de estacionamiento en función del numero de horas estacionado, considerando tarifas variables dependiendo del tiempo.

Requisitos:

Tarifas básicas:

- Las primeras 2 horas tienen un costo fijo por hora.
- De 3 a 5 horas, la tarifa es un 50% más alta que la tarifa básica por hora.
- Más de 5 horas, la tarifa es el doble de la tarifa básica por hora.

Tarifa por hora:

- La tarifa básica por hora es de $2.

Condicionales:

- Si el número de horas es menor o igual a 2, calcula el costo multiplicando el número de horas por la tarifa básica.
- Si el número de horas es mayor que 2 pero menor o igual a 5, calcula el costo sumando el costo de las primeras 2 horas a la tarifa aumentada (50% más) por cada hora adicional.
- Si el número de horas es mayor que 5, calcula el costo sumando el costo de las primeras 2 horas, más el costo de las siguientes 3 horas a la tarifa aumentada (50% más), y finalmente el costo del tiempo adicional a la tarifa doblada. */


/* let costoHoraEstacionamiento;
let horasEstacionado = parseInt(prompt("Cuantas hora se ha estacionado el usuario?"))
let tarifa = 2

if (horasEstacionado <= 2){
    costoHoraEstacionamiento = horasEstacionado * tarifa
}else if (horasEstacionado <= 5){
    costoHoraEstacionamiento = horasEstacionado * (tarifa + (tarifa * 0.5)) 
}else{
    costoHoraEstacionamiento = (tarifa * 2) + (3 * (tarifa * 1.5)) + ((horasEstacionado - 5) * (tarifa * 2))
}

alert("Costo total de estacionamineto es: " + costoHoraEstacionamiento + "$") */


/* 5.) Calcula el salario final de un empleado basado en su salario base, años de experiencia y calificacion de desempeño. El salario final se ajusta por bonificaciones y deducciones por impuestos. Además, verifica si el empleado califica para un bono adicional.

Requisitos:

- Un empleado tiene un nombre, salario base, años de experiencia y una calificación de desempeño (1 a 5).
- Si la calificación de desempeño es 4 o 5, recibe una bonificación del 10% de su salario base.
- Si la experiencia es mayor a 5 años, recibe una bonificación adicional de 5%.
- Aplica un impuesto del 20% al salario final si este supera los 3000.
- Si el salario final, después de impuestos, supera los 3500, el empleado califica para un bono adicional de 500. */

let empleado = {
    nombre : prompt("Ingrese el nombre del empleado"),
    salarioBase : parseInt(prompt("Ingrese el salario base del empleado")),
    añosExperiencia : parseInt(prompt("Ingrese los años de experiencia del empleado")),
    calificacion : parseInt(prompt("Ingrese la calificacion del empleado"))
}

let salarioFinal = empleado.salarioBase;
let impuesto = 0.20;
let bonoAdicional= 500;

if (empleado.calificacion >= 4){
    salarioFinal += (empleado.salarioBase * 0.10);
}
if (empleado.añosExperiencia > 5){
    salarioFinal += (salarioFinal * 0.05);
}
if (salarioFinal >= 3000){
    salarioFinal -= (salarioFinal * impuesto);
}
if (salarioFinal >= 3500){
    salarioFinal += bonoAdicional;
}

alert("El salario final de " + empleado.nombre + " es de $ " + salarioFinal)

// :)