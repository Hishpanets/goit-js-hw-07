let counterValue = document.querySelector('span#value');
console.log(counterValue)

const btn = document.querySelectorAll('button');

const increment = function () {
    counterValue.textContent = parseInt(counterValue.textContent) + 1;
}
const decrement = function () {
    counterValue.textContent = parseInt(counterValue.textContent) - 1;
}

btn[1].addEventListener('click', increment);
btn[0].addEventListener('click', decrement);