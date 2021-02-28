// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterSpanRef = document.querySelector('#value');
let counterValue = Number(counterSpanRef.textContent);
const btnIncreaseRef = document.querySelector(
  'button[data-action="increment"]',
);
const btnDecreaseRef = document.querySelector(
  'button[data-action="decrement"]',
);

btnIncreaseRef.addEventListener('click', onBtnIncreaseClick);
btnDecreaseRef.addEventListener('click', onBtnDecreaseClick);

function onBtnIncreaseClick() {
  counterValue += 1;
  document.querySelector('#value').textContent = counterValue;
}

function onBtnDecreaseClick() {
  counterValue -= 1;
  document.querySelector('#value').textContent = counterValue;
}
