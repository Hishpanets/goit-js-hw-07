const input = document.querySelector("input#validation-input");

input.onblur = function () {
    if (this.getAttribute('data-length') > this.value.length) {
        this.classList.remove('valid');
        this.classList.add('invalid');
    } else if (this.getAttribute('data-length') < this.value.length) {
        this.classList.remove('valid');
        this.classList.add('invalid');
    } else {
        this.classList.remove('invalid');
        this.classList.add('valid');
    }
};