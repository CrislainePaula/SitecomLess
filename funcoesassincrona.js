// Função que retorna uma promise que resolve depois de 1 segundo
function esperaUmSegundo() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Passou 1 segundo");
    }, 1000);
  });
}

// Usando async/await para esperar o resultado da promise
async function mostrarMensagem() {
  const mensagem = await esperaUmSegundo();
  console.log(mensagem);
}

mostrarMensagem();  // Imprime "Passou 1 segundo" após 1 segundo
