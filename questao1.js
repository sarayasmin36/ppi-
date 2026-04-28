"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcularVolumeCilindro(r, h) {
    const pi = Math.PI;
    const volume = pi * Math.pow(r, 2) * h;
    return volume;
}
let raio = 3;
let altura = 5;
console.log("Volume do cilindro:", calcularVolumeCilindro(raio, altura).toFixed(2));
//# sourceMappingURL=questao1.js.map