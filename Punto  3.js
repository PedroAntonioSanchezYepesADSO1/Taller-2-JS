let radio = Number(prompt(`Ingrese el valor del radio`));
let altura = Number(prompt(`Ingrese el valor de la altura`))
let tiempo = Number(prompt(`Ingrese el valor del tiempo`))
let volumen = (Math.PI)*(radio**2)*altura
let caudal = volumen*tiempo
console.log(`El valor del caudal  ${caudal}`);