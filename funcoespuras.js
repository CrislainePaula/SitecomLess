// Função pura: sempre retorna o mesmo resultado e não altera o parâmetro
function multiplicaPorDois(array) {
  return array.map(num => num * 2); // cria novo array
}

const numeros2 = [1, 2, 3];
const resultado = multiplicaPorDois(numeros2);

console.log(resultado);  // [2, 4, 6]
console.log(numeros2);   // [1, 2, 3] - array original não foi alterado
