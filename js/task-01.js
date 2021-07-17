const categoriesList = document.querySelector('ul#categories');
let categoriesNumber = categoriesList.querySelectorAll("li.item").length;
console.log(`В списке ${categoriesNumber} категории.`)


let elementNumber = categoriesList.querySelectorAll('li.item ul');

let categoriesValue = categoriesList.querySelectorAll("li.item h2");

for (let i = 0; i < categoriesValue.length; i++) {
    console.log(`Категория: ${categoriesValue[i].textContent}`)
    let liElementNumber = elementNumber[i].querySelectorAll("li");
    console.log(`Количество элементов: ${liElementNumber.length}`)
}