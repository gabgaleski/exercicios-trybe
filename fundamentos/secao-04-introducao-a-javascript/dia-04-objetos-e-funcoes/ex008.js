function array(test) {
    let indexMaior = 0;
    for (let index in test) {
        if (test[index] > indexMaior) {
            indexMaior = index;
        }
    }
    return console.log(indexMaior)
}
array([2, 3, 6, 7, 10, 1]);