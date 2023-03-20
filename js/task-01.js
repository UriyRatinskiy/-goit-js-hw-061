
const ulCategories = document.querySelector('#categories');
const items = ulCategories.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(element => {
  const titleElement = element.querySelector('h2');
  const numberElements = element.querySelectorAll('li');
  console.log(`Category: ${titleElement.textContent}`);
  console.log(`Elements: ${numberElements.length}`);

 });





