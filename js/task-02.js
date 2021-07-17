const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingred = document.querySelector('ul#ingredients');

let elements = ingredients.map(ingredient => {
    let li = document.createElement("li");
    li.textContent = ingredient;
    return li;
});
console.log(elements)
ingred.append(...elements)