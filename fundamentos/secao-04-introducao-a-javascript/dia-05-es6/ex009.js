
let motor = 'ligado';
const ligarDesligar = () => (motor === 'desligado' ? motor = 'ligado' : motor = 'desligado');

console.log(`O motor esta ${ligarDesligar(motor)}`)