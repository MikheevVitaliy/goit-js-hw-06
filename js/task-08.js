// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

// ======================1==========================

// const refs = {
//   form: document.querySelector(".login-form")  
// }

// refs.form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();
//   // console.dir(event.currentTarget.elements.email.value);

//   const formData = new FormData(event.currentTarget);
//   formData.forEach((value, name) => {
//     // console.log(name, value);
//     if (value === "") {
//         alert("Всі поля повинні бути заповнені!");
//     } else {
//         console.log({name, value});
//         refs.form.reset();
//     }    
//   })
// }

// ======================2==========================

const refs = {
  form: document.querySelector(".login-form")  
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        alert("Всі поля повинні бути заповнені!");
    } else {
        console.log({ "email": email.value, "password": password.value });
        refs.form.reset();
    } 
}

