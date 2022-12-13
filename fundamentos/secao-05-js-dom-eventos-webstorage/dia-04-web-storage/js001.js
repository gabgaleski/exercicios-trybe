const backGround = document.getElementById('background-color');
const colorBtn = document.getElementsByClassName('colorBtn');


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
