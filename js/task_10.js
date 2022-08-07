// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и нажимает кнопку Создать,
    // после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

    // Создай функцию createBoxes(amount), которая принимает один параметр - число. 
    // Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector("#controls>input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  const elementsToAdd = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    elementsToAdd.push(div);
  }
  return elementsToAdd;
};

const destroyBoxes = () => {
    boxes.innerHTML = "";
    inputNum.value = "";
};

btnCreate.addEventListener("click", () => {
  const boxesToAdd = createBoxes(inputNum.value);
  boxes.append(...boxesToAdd);
});

console.log(inputNum.value);

btnDestroy.addEventListener("click", () => {
  destroyBoxes.call();
});

