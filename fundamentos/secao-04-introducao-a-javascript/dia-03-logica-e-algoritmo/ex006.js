let number = 5;
let symb = '*'
let resultado = '';

for (let index = 1; index <= number; index += 1) {
    resultado = resultado + symb;
}

for (let indexLine = 1; indexLine <= 5; indexLine += 1){
    console.log(resultado)
}