let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
let outputLine = '';
for (let line = 0; line <= middle; line += 1) {
    for (let col = 0; col <= n; col += 1) {
        if (col == controlLeft || col == controlRight || line == middle) {
            outputLine += symbol;
        } else {
            outputLine += ' ';
        }
    }
    controlLeft -= 1;
    controlRight += 1;
    console.log(outputLine)
    outputLine = '';
}