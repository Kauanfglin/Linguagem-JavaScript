let nave = prompt("Digite o nome da nave:");
let caracter = prompt("Qual caractere deseja substituir?");
let novocaracter = prompt("Por qual caractere deseja substituir?");
let newname = "";

for (let i = 0; i < nave.length; i++) {
  if (nave[i] === caracter) {
    newname += novocaracter;
  } else {
    newname += nave[i];
  }
}

console.log("Nave original:", nave);
console.log("Nova nave:", newname);
