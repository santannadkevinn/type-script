"use strict";
const input = document.querySelector("input");
const total = localStorage.getItem('total');
if (input && total) {
    input.value = total;
    calculandoGanho(Number(input.value));
}
function calculandoGanho(value) {
    const p = document.querySelector('p');
    if (p) {
        p.innerText = `ganho total ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if (input) {
        localStorage.setItem('total', input.value);
        calculandoGanho(Number(input.value));
    }
}
if (input) {
    input.addEventListener('keyup', totalMudou);
}
