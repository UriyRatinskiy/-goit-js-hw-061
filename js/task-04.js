const counterValue = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    },
};


const counterValueEl = document.querySelector('#counter');
const valueEl = document.querySelector('#value');
console.log(counterValue);
const increaseValue = document.querySelector('#counter button[data-action="decrement"]');
const reductionValue = document.querySelector('#counter button[data-action="increment"]');

console.log(increaseValue.dataset.action); 
console.log(reductionValue.dataset.action);


increaseValue.addEventListener('click', function () {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
});
reductionValue.addEventListener('click', function () {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
});




