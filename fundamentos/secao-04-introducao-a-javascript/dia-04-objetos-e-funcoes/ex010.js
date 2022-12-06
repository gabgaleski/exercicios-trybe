function array(arr) {
let resultado = '';
    for (let index in arr) {
        if (arr[index].length > resultado.length) {
            resultado = arr[index];
        }
    }
    return console.log(resultado)
}

array(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);