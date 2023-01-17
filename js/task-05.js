// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const refs = {
  inputName: document.getElementById("name-input"),
  spanName: document.getElementById("name-output")
}

refs.inputName.addEventListener("input", onFormName);

function onFormName(event) {
  if (event.currentTarget.value.trim() !== "") {
    refs.spanName.textContent = event.currentTarget.value.trim();
    console.log(event.currentTarget.value.trim());
} else {refs.spanName.textContent = 'Anonymous'}
}

// ====================2====================
// function onFormName(event) {
//     refs.spanName.textContent = event.currentTarget.value || 'Anonymous';

// };
