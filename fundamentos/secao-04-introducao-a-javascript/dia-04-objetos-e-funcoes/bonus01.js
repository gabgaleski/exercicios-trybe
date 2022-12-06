let romanNumbers = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
}

function romanoDecimal(number) {
    number = number.toLowerCase();
    const len = number.length;
    let soma = romanNumbers[number[len - 1]];
    let atual = romanNumbers[number[len - 1]];

    for (let index = 2; index <=len; index += 1){
        const prox = romanNumbers[number[len - index]];

        if (atual <= prox) {
            soma += prox;
        } else {
            soma -= prox;
        }

        atual = prox;
    }
    return soma;
}

console.log(romanoDecimal('VI'));