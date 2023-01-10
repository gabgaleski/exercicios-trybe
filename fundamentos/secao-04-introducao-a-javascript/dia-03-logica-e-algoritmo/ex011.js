let number = 7;
let divisor = 1;

for (let index = 2; index <= number; index += 1) {
    if (number % index === 0) {
        divisor += 1;
    }
}

if (divisor === 2) {
    console.log('O numero é primo')
} else {
    console.log('O numero nao é primo')
}