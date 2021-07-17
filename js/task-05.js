const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');
input.addEventListener('input', translate);

function translate() {

    //   output.textContent = input.value;
    if (input.value === '') {
        output.textContent = "незнакомец";
    } else {
        output.textContent = input.value;
    }

}