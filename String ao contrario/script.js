let nave = prompt("Digite o nome da espaçonave:");
let subnave = prompt("Digite o caractere que deseja substituir:");
let replacenave = prompt("Digite o caractere por qual deseja substituir:");
let newnome = "";

// Inverter e substituir os caracteres
for (let i = nave.length - 1; i >= 0; i--) {
  if (nave[i] === subnave) {
    newnome += replacenave;  // Adiciona o caractere substituto
  } else {
    newnome += nave[i];      // Adiciona o caractere original
  }
}

// Mostrar os resultados
console.log("Nome da espaçonave ao contrário com substituição: " + newnome);
console.log("Nome da espaçonave original: " + nave);
