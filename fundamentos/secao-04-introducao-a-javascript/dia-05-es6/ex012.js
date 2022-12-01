const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    let resultado = frase.split('');
    for (let index = 0; index < resultado.length; index += 1){
        if (resultado[index] === 'x') {
            resultado[index] = nome;
        }
    }
    resultado = resultado.join('');
    return resultado
}

console.log(substituaX('Gabriel'));