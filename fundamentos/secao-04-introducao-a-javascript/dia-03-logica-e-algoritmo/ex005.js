let numeroPrimo = 0;
let maiorPrimo = 0;
for (let index = 2; index <= 50; index += 1) {
    let prime = true;
    for (let indexDivisor = 2; indexDivisor < index; indexDivisor += 1) {
        if (index % indexDivisor === 0) {
            prime = false;
        }
    }
    if (prime) {
        maiorPrimo = index;
    }
}
console.log(maiorPrimo)