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