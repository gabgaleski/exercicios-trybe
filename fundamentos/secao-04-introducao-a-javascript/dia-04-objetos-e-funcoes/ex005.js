let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

let tio = {
    personagem: 'Tio patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
};


info.recorrente = 'sim';

//console.log(info.recorrente);
//console.log('Bem-vinda, ' + info.personagem);

//for (let key in info) {
//    console.log(key)
//}
  
for (let key in info) {
    if (key === 'recorrente' && info[key] === 'sim' && tio[key] === 'sim') {
        console.log('Ambos Recorrentes')
    } else {
        console.log(info[key] + ' e ' + tio[key]);
    }
}