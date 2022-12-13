const backGround = document.getElementById('background-color');
const colorBtn = document.getElementsByClassName('colorBtn');
const fontColor = document.getElementsByClassName('fontColor');
const sizeF = document.getElementsByClassName('size-font');
const height = document.getElementsByClassName('height');



const setBackground = (color) => {
let content = document.getElementsByClassName("body")[0];
content.style.backgroundColor = color;
localStorage.setItem('backgroundcolor', color)
}

for (let index = 0; index < colorBtn.length; index += 1) {
    colorBtn[index].addEventListener('click', (event) => {
        setBackground(event.target.innerHTML)
    })
}

///////////////////////////////////////////////////////////////

const setFont = (color) => {
    const text = document.getElementsByClassName('paragraph');
    for (let index = 0; index < text.length; index += 1){
        text[index].style.color = color;
    }
    localStorage.setItem('fontColor', color);
}

for (let index1 = 0; index1 < fontColor.length; index1 += 1) {
    fontColor[index1].addEventListener('click', (event) => {
        setFont(event.target.innerHTML);
    })
}

///////////////////////////////////////////////////////////////

const fontSize = (size) => {
    const text = document.getElementsByClassName('paragraph');
    for (let index = 0; index < text.length; index += 1) {
        text[index].style.fontSize = size;
    }
    localStorage.setItem('fontSize', size);
}

for (let index = 0; index < sizeF.length; index += 1) {
    sizeF[index].addEventListener('click', (event) => {
        fontSize(event.target.innerHTML);
    })
}

//////////////////////////////////////////////////////////
// Espaçãmento entre as linhas do texto

const lineSpace = (space) => {
    const text = document.getElementsByClassName('paragraph');
    for (let index = 0; index < text.length; index += 1) {
        text[index].style.lineHeight = space;
    }
    localStorage.setItem('lineHeight', space);
}

for (let index = 0; index < height.length; index += 1) {
    height[index].addEventListener('click', (event) => {
        lineSpace(event.target.innerHTML);
    })
}

/////////////////////////////////////////////////////

