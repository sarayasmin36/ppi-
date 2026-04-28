"use strict";
function ehPrimo(num) {
    if (num <= 1)
        return false;
    for (let divisor = num - 1; divisor > 1; divisor--) {
        if (num % divisor === 0) {
            return false;
        }
    }
    return true;
}
function contarPrimos(inicio, fim) {
    let contador = 0;
    for (let i = inicio; i <= fim; i++) {
        if (ehPrimo(i)) {
            contador++;
        }
    }
    return contador;
}
let inicio = 2;
let fim = 10;
console.log("Quantidade de primos:", contarPrimos(inicio, fim));
