function strings(word, ending) {
    word = word.split('');
    ending = ending.split('');
    let control = true;
    for (let index = 0; index < ending.length; index += 1) {
        if (word[word.length - ending.length + index] != ending[index]) {
            control = false;
        } 
    }
    return control;
}

console.log(strings('trybe', 'be'))