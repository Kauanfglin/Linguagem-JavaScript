let nomenave = prompt("Qual é o nome da nave?");
let velocidadenave = Number(prompt("Qual é a velocidade da nave?"));

function menu() {//menu
  return prompt(
    "O que deseja fazer?\n" +
    "1 - Acelerar\n" +
    "2 - Desacelerar\n" +
    "3 - Imprimir dados\n" +
    "4 - Sair"
  );
}

function acelerar() { // funcao acelerar
  velocidadenave += 5;
  alert("A velocidade da nave está em " + velocidadenave + " km/s");
}

function desacelerar(){ //funcao desacelerar
  velocidadenave -= 5;// velocidade perde 1
  if (velocidadenave < 0) { // se menor que zero ela recebe 0 por padrao
    velocidadenave = 0;
    alert("A velocidade não pode ser negativa. Está em 0 km/s.");
  } else {
    alert("A velocidade da nave está em " + velocidadenave + " km/s");
  }
}

function imprimirdados(){ //imprimi dados
  alert("O nome da nave é: " + nomenave);
  alert("A velocidade atual da nave é: " + velocidadenave + " km/s");
}

function sair() {
  alert("Saindo...");
}

function executar() { //execurtar menu
  let opcao; //defindindo nova variavel
  do {
    opcao = menu();
    switch (opcao) {
      case "1":
        acelerar();
        break;
      case "2":
        desacelerar();
        break;
      case "3":
        imprimirdados();
        break;
      case "4":
        sair();
        break;
      default:
        alert("Opção inválida!");
    }
  } while (opcao !== "4");
}

executar();
