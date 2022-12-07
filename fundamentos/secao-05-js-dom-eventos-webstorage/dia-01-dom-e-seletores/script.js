document.querySelector('#header-container').style.backgroundColor = 'green';
document.querySelector('.emergency-tasks').style.backgroundColor = 'pink';
document.querySelector('.no-emergency-tasks').style.backgroundColor = 'yellow';
document.querySelector('#footer-container').style.backgroundColor = 'green';

const tasks1 = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < tasks1.length; index += 1) {
    tasks1[index].style.backgroundColor = 'purple'
}
const tasks2 = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < tasks2.length; index += 1) {
    tasks2[index].style.backgroundColor = 'black'
}