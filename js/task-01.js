
const ulCategories = document.querySelector('#categories');
const items = ulCategories.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);
// console.log(ulCategories);
// console.log(items);

items.forEach(element => {
  const titleElement = element.querySelector('h2');
  const numberElements = element.querySelectorAll('li');
  console.log(`Category: ${titleElement.textContent}`);
  console.log(`Elements: ${numberElements.length}`);

//   // items.forEach(function(element){
// //  const titleElement = element.querySelector('h2');
// //  const numberElements = element.querySelectorAll('li');
// //  console.log(`Category: ${titleElement.textContent}`);
// //  console.log(`Elements: ${numberElements.length}`);
// // });
 });





