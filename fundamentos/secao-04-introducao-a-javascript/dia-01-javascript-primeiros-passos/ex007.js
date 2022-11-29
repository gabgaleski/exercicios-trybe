const numero1 = 67;
const numero2 = 60;
const numero3 = 99;
if (numero1 > numero2 && numero1 > numero3) {
    console.log(`O numero ${numero1} é o maior!`)
} else if (numero1 === numero2 && numero1 === numero3) {
    console.log("Os numeros sao iguais!")
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log(`O numero ${numero2} é o maior!`)
} else {
    console.log(`O numero ${numero3} é o maior!`)
}