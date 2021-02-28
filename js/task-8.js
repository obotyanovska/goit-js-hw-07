// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает
// кнопку Создать, после чего рендерится коллекция.При нажатии на
// кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр
// amount - число.Функция создает столько div, сколько указано в amount
// и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const divBoxesRef = document.querySelector('#boxes');

const btnRenderRef = document.querySelector('[data-action="render"]');
const btnDestroyRef = document.querySelector('[data-action="destroy"]');
const inputRef = document.querySelector('[type="number"]');
let amount = inputRef.value;

inputRef.addEventListener('change', onInputChange);
btnRenderRef.addEventListener('click', createBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);

function onInputChange(event) {
  amount = Number(event.target.value);
  return amount;
}

function createBoxes(amount) {
  const divArray = [];
  for (let i = 1; i <= amount; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.style.backgroundColor =
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
    newDiv.style.width = '30px';
    newDiv.style.height = '30px';
    divArray.push(newDiv);
  }
  divBoxesRef.append(...divArray);
}

function destroyBoxes() {
  divBoxesRef.innerHTML = '';
}
