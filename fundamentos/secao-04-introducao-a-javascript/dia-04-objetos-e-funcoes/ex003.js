function maiorNumero(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return 'O maior numero é o : ' + num1;
    } else if (num2 > num1 && num2 > num3) {
        return 'O maior numero é o : ' + num2;
    } else {
        return 'O maior numero é o : ' + num3;
    }
}

console.log(maiorNumero(1000, 150, 30))