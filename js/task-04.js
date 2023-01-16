// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const counter = {
  counterValue: 0,
  decrement() {
    this.counterValue -= 1;
  },
  increment() {
    this.counterValue += 1;
  }
}

const actionDecrement = document.getElementById("counter").firstElementChild;
const valueEl = document.getElementById("value");
const actionIncrement = document.getElementById("counter").lastElementChild;

actionDecrement.addEventListener("click", onDecrementButtonClick);

actionIncrement.addEventListener("click", onIncrementButtonClick);

function onDecrementButtonClick() {
  counter.decrement();
  valueEl.textContent = counter.counterValue;
  console.log(counter.counterValue);
}

function onIncrementButtonClick() {
  counter.increment();
  valueEl.textContent = counter.counterValue;
  console.log(counter.counterValue);
}