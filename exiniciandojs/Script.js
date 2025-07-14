let nome = prompt("digite o nome da nava");
let resposta = prompt("deseja entrar na dobra (sim/nao)");
let contador = 0;
while(resposta.toLowerCase() == "sim"){
  alert("voce entrou na dobra ");
  contador ++;
  resposta = prompt("deseja entrar na dobra ?")
}
if(resposta.toLowerCase() =="nao"){
alert("Finalizado");
  alert("voce entrou na dobra " + contador);
}