let p1 = Number(prompt(`Ingrese el valor del primer producto`));
let p2 = Number(prompt(`Ingrese el valor del segundo producto`))
let p3 = Number(prompt(`Ingrese el valor del tercer producto`))
let p4 = Number(prompt(`Ingrese el valor del cuarto producto`))
let p5 = Number(prompt(`Ingrese el valor del quinto producto`))
let totaP1 =  p1-(p1*0.05)
let totaP2 =  p2-(p2*0.05)
let totaP4 =  p4-(p4*0.02)
let totaP5 =  p5-(p5*0.02)
let total = (totaP1+totaP2+p3+totaP4+totaP5)
console.log(`El precio final del primer proucto es de:  ${totaP1}`);
console.log(`El precio final del segundo proucto es de:  ${totaP2}`);
console.log(`El precio final del tercer proucto es de:  ${p3}`);
console.log(`El precio final del cuarto proucto es de:  ${totaP4}`);
console.log(`El precio final del quinto proucto es de:  ${totaP5}`);
console.log(`El valor final de la compra es de:  ${total}`);
