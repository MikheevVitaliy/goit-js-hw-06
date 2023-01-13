const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

// const listContent = ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("");;
// console.log(listContent);

const list = document.getElementById("ingredients");

for (const ingredient of ingredients) {
  const liEtem = document.createElement('li');
  liEtem.textContent = ingredient;
  liEtem.classList.add('item');
  list.appendChild(liEtem);
  console.log(liEtem);
}



