// Напиши скрипт который, при наборе текста в инпуте input#name
// - input(событие input), подставляет его текущее значение
// в span#name - output.Если инпут пустой, в спане должна
// отображаться строка 'незнакомец'.

const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', onInputNameInput);

function onInputNameInput(event) {
  event.currentTarget.value === ''
    ? (outputNameRef.textContent = 'незнакомец')
    : (outputNameRef.textContent = event.currentTarget.value);
}

onInputNameInput();
