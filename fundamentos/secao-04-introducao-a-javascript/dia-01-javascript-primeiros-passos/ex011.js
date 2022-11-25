let nota = 125;
let notaMaxima = 200;
let porcentagem = (nota * 100) / notaMaxima;

if (porcentagem >= 90 && porcentagem <= 100) {
    console.log(`Voce acertou ${porcentagem}%, tirando um A`)
} else if (porcentagem >= 80 && porcentagem < 90) {
    console.log(`Voce acertou ${porcentagem}%, tirando um B`)
} else if (porcentagem >= 70 && porcentagem < 80) {
    console.log(`Voce acertou ${porcentagem}%, tirando um C`)
} else if (porcentagem >= 60 && porcentagem < 70) {
    console.log(`Voce acertou ${porcentagem}%, tirando um D`)
} else if (porcentagem >= 50 && porcentagem < 60) {
    console.log(`Voce acertou ${porcentagem}%, tirando um E`)
}  else if (porcentagem < 50 && porcentagem >= 0) {
    console.log(`Voce acertou ${porcentagem}%, tirando um F`)
} else {
    console.log("[ERRO]")
}