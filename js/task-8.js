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
let amount;

inputRef.addEventListener('input', e => (amount = e.currentTarget.value));
btnRenderRef.addEventListener('click', () => createBoxes(amount));
btnDestroyRef.addEventListener('click', destroyBoxes);

function createBoxes() {
  const divArray = [];
  let size = 30;
  for (let i = 1; i <= amount; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.style.backgroundColor =
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
    newDiv.style.width += size + 'px';
    newDiv.style.height += size + 'px';
    divArray.push(newDiv);
    size += 10;
  }
  divBoxesRef.append(...divArray);
}

function destroyBoxes() {
  divBoxesRef.innerHTML = '';
}
