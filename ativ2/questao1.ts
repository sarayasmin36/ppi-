function calcularMedias(rendas: number[], filhos: number[]) {
  let totalRenda = 0;
  let totalFilhos = 0;

  for (let i = 0; i < rendas.length; i++) {
    totalRenda += rendas[i];
    totalFilhos += filhos[i];
  }

  const mediaRenda = totalRenda / rendas.length;
  const mediaFilhos = totalFilhos / filhos.length;

  return { mediaRenda, mediaFilhos };
}

let rendas = [1500, 2000, 3000];
let filhos = [2, 1, 3];

const resultado = calcularMedias(rendas, filhos);

console.log("Média da renda:", resultado.mediaRenda.toFixed(2));
console.log("Média de filhos:", resultado.mediaFilhos.toFixed(2));