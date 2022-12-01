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

//substituaX('Gabriel');

const minhasSkills = (func) => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    let res = `
    ${func}
    Minhas tres principais habilidades sao:
    ${skills[0]}
    ${skills[1]}
    ${skills[2]}`
return res
}

console.log(minhasSkills(substituaX('Gabriel')));