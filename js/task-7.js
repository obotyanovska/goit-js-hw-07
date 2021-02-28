// Напиши скрипт, который реагирует на изменение значения input#font - size - control
// (событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputRef = document.querySelector('#font-size-control');
inputRef.min = 0;
inputRef.max = 100;
inputRef.step = 1;
inputRef.value = 16;

const outputRef = document.querySelector('span#text');

outputRef.style.fontSize = inputRef.value + 'px';

inputRef.addEventListener('input', onInputInput);

function onInputInput(event) {
  outputRef.style.fontSize = event.currentTarget.value + 'px';
}
