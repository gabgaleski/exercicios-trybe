function maiorNumero(num1, num2){
    if (num1 > num2) {
        return 'O maior numero é ' + num1;
    } else if (num1 === num2) {
        return 'Eles sao iguais!';
    } else {
        return 'O maior numero é ' + num2;
    }
}

console.log(maiorNumero(10, 100))