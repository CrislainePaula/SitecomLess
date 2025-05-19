// Destructuring: pegar propriedades do objeto
const { nome, idade } = pessoa;
console.log(nome, idade); // João 30

// Spread operator: copiar array e adicionar elemento
const maisNumeros = [...numeros, 5];
console.log(maisNumeros); // [1, 2, 3, 4, 5]

// Template literals: string com variáveis dentro
console.log(`O nome é ${nome} e a idade é ${idade}`);
// O nome é João e a idade é 30
