// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listEl = document.querySelector(".gallery");

const addMarkup = images
  .map(
    (image) =>
      `<li><img class="picture" src=${image.url} width = '500' alt='${image.alt}'></img></li>`
  )
  .join("");

  listEl.insertAdjacentHTML("beforeend", addMarkup);

listEl.style.display = "flex";
listEl.style.padding = "0";
listEl.style.justifyContent = "space-around";
listEl.style.listStyle = "none";
listEl.style.gap = "25px";
