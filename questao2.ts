 function notaNecessariaFinal(mediaParcial) {
  const mediaMinima = 60;
  const notaFinal = (mediaMinima * 2) - mediaParcial;
  return notaFinal;
}

// Exemplo
let mediaParcial = 45;
console.log("Nota necessária na final:", notaNecessariaFinal(mediaParcial));