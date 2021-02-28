// Напиши скрипт, который для каждого элемента массива ingredients создаст
// отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = 'ul#ingredients';
const item = 'li';
const listIngredientsRef = document.querySelector(list);

const makeItemIngredient = elem => {
  const itemIngredientRef = document.createElement(item);
  itemIngredientRef.textContent = elem;
  return itemIngredientRef;
};

const renderListIngredients = arr => {
  const listIngredients = [...arr].map(elem => makeItemIngredient(elem));
  listIngredientsRef.append(...listIngredients);
};

renderListIngredients(ingredients);
