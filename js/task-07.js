// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const refs = {
  inputFontSize: document.getElementById("font-size-control"),
  spanText: document.getElementById("text")
}

console.dir(refs.inputFontSize);

refs.inputFontSize.addEventListener("input", onFormSize);

function onFormSize(event) {
  refs.inputFontSize.range = event.currentTarget.value;
  refs.spanText.style.fontSize = `${event.currentTarget.value}px`;
  console.log(refs.spanText.textContent);
}