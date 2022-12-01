function list(array) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in array) {
        let verificador = array[index];
        for (let index2 in array) {
            if (verificador === array[index2]) {
                contNumero += 1;
            }
        }
        if (contNumero > contRepetido) {
            contRepetido = contNumero;
            indexNumeroRepetido = index;
        }
        contNumero = 0;
    }
    return array[indexNumeroRepetido];
}

console.log(list([2, 3, 2, 5, 8, 2, 3]));