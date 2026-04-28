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
let numero = 7;
if (ehPrimo(numero)) {
    console.log("O número", numero, "é primo");
}
else {
    console.log("O número", numero, "não é primo");
}
