function add(num1,num2) {
    return num1 + num2;
}

function subtract(num1,num2) {
    return num1 - num2;
}

function multiply(num1,num2) {
    return num1 * num2;
}

function divide(num1,num2) {
    return num1 / num2;
}

let btns = document.querySelectorAll("button");

function hlo() {
    return alert("hlo")
}

btns.addEventListener("click", hlo);