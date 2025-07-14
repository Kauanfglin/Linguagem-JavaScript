let name = prompt("Qual seu nome?");
let velocity = 0;
let newvelocity = Number(prompt("Qual velocidade você gostaria de acelerar?"));
let quest = prompt("Atualmente você está indo a " + newvelocity + "km/h. Deseja atualizar? 1(sim) 2(não)");

let uptvelocity = 0; 

if (quest === "1") {
  uptvelocity = Number(prompt("Qual a velocidade que deseja ir?"));
  alert(name + ", sua nova velocidade é " + uptvelocity + "km/h.");
} else {
  uptvelocity = newvelocity; 
  alert(name + ", sua velocidade permanece em " + uptvelocity + "km/h.");
}

if (velocity > 10) {
  alert("A velocidade anterior era maior que 10km/h");
} else {
  alert("A velocidade anterior era menor ou igual a 10km/h");
}

if (uptvelocity > 10) {
  alert("A nova velocidade é maior que 10km/h");
} else {
  alert("A nova velocidade é menor ou igual a 10km/h");
}

if (uptvelocity > velocity) {
  alert("Você acelerou a nave!");
} else if (uptvelocity < velocity) {
  alert("Você reduziu a velocidade.");
} else {
  alert("A velocidade permaneceu igual.");
}
