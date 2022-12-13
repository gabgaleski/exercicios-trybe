const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  
    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    const days = document.getElementById("days");

 
      for (let index = 0; index < decemberDaysList.length; index += 1) {
        const numberDay = document.createElement("li");
        numberDay.className = "day";
        numberDay.innerHTML = decemberDaysList[index];
        days.appendChild(numberDay)
        const dayIndex = decemberDaysList[index];

        if (dayIndex === 24 || dayIndex === 25 || dayIndex === 31 ) {
          numberDay.className = "day holiday";
        } 
        if (dayIndex === 4 || dayIndex === 11 || dayIndex === 18 || dayIndex === 25) {
            numberDay.className = "day friday";

        }
      }
  
      const createHolidayButton = (buttonName) => {
        let buttonContainer = document.querySelector('.buttons-container');
        let newButton = document.createElement('button');
        let newButtonID = 'btn-holiday';
      
        newButton.innerHTML = buttonName;
        newButton.id = newButtonID;
        
        buttonContainer.appendChild(newButton);
      }
      
      createHolidayButton('Feriados');
