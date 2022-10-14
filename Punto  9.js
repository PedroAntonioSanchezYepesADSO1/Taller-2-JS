let obj = {}, edad;
do{
    edad = Number(prompt("Ingrese su año de nacimiento"));
    obj[prompt("Ingrese su nombre")] = 2022 - edad;
}
while (confirm("Desea insertar a otra persona?"))
console.log(obj);
