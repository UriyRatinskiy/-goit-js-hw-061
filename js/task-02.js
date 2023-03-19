
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulList = document.querySelector("#ingredients");
 const list = document.createElement("li");
//  console.log(list);
const markup = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");
  // console.log(markup);

ulList.innerHTML = markup;

console.log(ulList);


