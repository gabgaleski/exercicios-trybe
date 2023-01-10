function status(value) {
    if (value > 0) {
        return 'Valor Positivo'
    } else if (value < 0) {
        return 'Valor negativo'
    } else {
        return 'Zero'
    }
}

console.log(status(-1));