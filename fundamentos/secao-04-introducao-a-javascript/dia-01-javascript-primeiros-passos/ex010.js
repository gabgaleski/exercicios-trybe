let peca = "BIshop"
peca = peca.toLowerCase()

switch (peca) {
    case "king":
        console.log("Uma casa para qualquer direção")
    break

    case "queen":
        console.log("Qualquer numero de casa em todas as linhas")
    break

    case "bishop":
        console.log("Diagonal")
    break

    case "rook":
        console.log("Em linha ou para os lados")
    break

    case "knight":
        console.log("Pulando em L")
    break

    case "pawn":
        console.log("Uma casa a frente")
    break

    default:
        console.log("[Erro]")
    break
}