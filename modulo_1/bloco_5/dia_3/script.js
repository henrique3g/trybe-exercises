function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function createDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const holidays = [24, 25, 31]
  const fridays = [4, 11, 18, 25]

  const ulDays = document.getElementById('days')
  for (const day of dezDaysList) {
    const dayLi = document.createElement('li')
    dayLi.innerText = day
    dayLi.classList.add('day')
    if (holidays.includes(day)) {
      dayLi.classList.add('holiday')
    }
    if (fridays.includes(day)) {
      dayLi.classList.add('friday')
    }
    ulDays.appendChild(dayLi)
  }
}

createDays()

/**
 * @param {string} name 
 */
function createButton(name) {
  const button = document.createElement('button')
  button.innerText = name
  button.id = 'btn-holiday'
  const buttonsContainer = document.querySelector('.buttons-container')
  buttonsContainer.appendChild(button)
}

createButton('Feriados')