// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const counterValue = {
    value: 0,
    
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

const decrementBtn = document.querySelector("#counter").firstElementChild;
const incrementBtn = document.querySelector("#counter").lastElementChild;
const valueEl = document.querySelector("#value");

decrementBtn.addEventListener("click", function () {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
});
incrementBtn.addEventListener("click", function () {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
});
