// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.


const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrayOfNewItem = [];

const toCreateNewEl = ingredients.map(element => {
  const newItem = document.createElement('li');
  newItem.textContent = element;
  newItem.classList = ('item');
  const newCreatedItems = arrayOfNewItem.push(newItem);
})
const listEl = document.querySelector('#ingredients').append(...arrayOfNewItem);