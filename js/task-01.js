// Выводит количество категорий ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const navEl = document.querySelectorAll('li.item');
const el = navEl.length;
console.log(`Number of categories: ${el}`);

// ======================1==========================

// const items = document.querySelectorAll('.item');
// Array.prototype.forEach.call(items, (element) => {
//     const title = element.querySelector('h2').innerHTML;
//     const itemsLength = element.querySelectorAll('li').length;
//   console.log(`Category: ${title}`);
//   console.log(`Elements: ${itemsLength}`);
// });

// ======================2==========================

// for (let i = 0; i < items.length; i += 1) {
//   const element = items[i];
//   const title = element.querySelector('h2').innerHTML;
//   const itemsLength = element.querySelectorAll('li').length;
// console.log(`Category: ${title}`);
// console.log(`Elements: ${itemsLength}`);
// }

// ======================3==========================

const ul = Array.from(document.querySelector('#categories').children);
for (const elem of ul) {
    const category = elem.firstElementChild.textContent;   
    const itemsLength = elem.lastElementChild.children.length;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${itemsLength}`);  
  };