let number = 5;
let symb = '*'
let resultado = '';
let inputPosition = number -1;

for (let lineIndex = 0; lineIndex < number; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex < number; columnIndex += 1) {
        if (columnIndex < inputPosition) {
            resultado = resultado +  " ";
        } else {
            resultado = resultado + symb;
        }
    }
    console.log(resultado);
    resultado = '';
    inputPosition -= 1;
}