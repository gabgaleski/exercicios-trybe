const custo = 300;
const valorVenda = 500;
let custoTotal = custo + custo * 0.20;
let resultado;
if (custo > 0 && valorVenda > 0) {
    resultado = ((valorVenda - custoTotal) * 1000)
    console.log(`O lucro da venda de 1000 unidades é de ${resultado}`)
} else {
    console.log("ERRO")
}