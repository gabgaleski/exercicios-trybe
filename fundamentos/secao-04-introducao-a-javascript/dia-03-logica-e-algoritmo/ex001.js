let fruits = [3, 4, 10, 1, 12];
let resultado = 0;

for (let index of fruits) {
    resultado = resultado + index;
}
if (resultado > 15) {
    console.log(`A soma da array é: ${resultado}`)
} else {
    console.log('Resultado maior que 16')
}