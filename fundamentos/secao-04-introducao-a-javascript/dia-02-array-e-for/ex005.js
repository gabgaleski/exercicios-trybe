let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index of numbers) {
    soma = soma + index;
}
let mediaAr = soma / numbers.length
console.log(`A media Aritmética é de: ${mediaAr}`)
if (mediaAr > 20) {
    console.log('Valor maior que 20!')
} else {
    console.log('Valor menor que 20')
}
let valor = 1;
for (let maiorValor of numbers) {
    if (maiorValor > valor) {
        valor = maiorValor;
    }
}
 console.log(`Maior valor da Array: ${valor}`)
let valoresImpares = 0;
 for (let impar of numbers) {
    if (impar % 2 === 1) {
        valoresImpares += 1;
    }
 }
 console.log(`Quantidade de valores impares na array: ${valoresImpares}`)