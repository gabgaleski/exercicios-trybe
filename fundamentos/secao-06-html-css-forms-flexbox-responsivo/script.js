const getBtn = document.querySelector('#submit-button');
const termos = document.querySelector('#termos');
const divTermos = document.querySelector('#div-termos')

getBtn.addEventListener('click', (event) => {
  event.preventDefault();
});

termos.addEventListener('click', () => {
  if (termos.className == 'on') {
    termos.classList = 'off';
  } else {
    termos.classList = 'on';
  }
  createFile();
});

const createFile = () => {
    if (termos.classList == 'on') {
        const generateFile = document.createElement('input');
        generateFile.type = 'file';
        generateFile.id = 'file'
        divTermos.appendChild(generateFile);
    } else {
      const deletFile = document.querySelector('#file');
      deletFile.remove();
    }
};