function natural(n) {
    let som = 0;
    for (let index = 1; index <= n; index += 1) {
        som = som + index;
    }
    return som;
}

console.log(natural(5))