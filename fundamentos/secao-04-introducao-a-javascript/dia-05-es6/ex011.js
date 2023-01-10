const longestWord = (word) => {
  word = word.split(' ');
  let maiorPalavra = '';
  for (let index = 0; index < word.length; index += 1){
    if (word[index].length > maiorPalavra.length) {
        maiorPalavra = word[index];
    }
  }
    return maiorPalavra;
}



console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))