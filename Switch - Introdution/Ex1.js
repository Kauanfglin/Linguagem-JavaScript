let distancia =prompt("digite uma distancia  em ano luz")
let optiondistancia =  prompt("selecione uma distancia abaixo\n 1)- Parsec\n 2)-Unidade Astronomica\n - 3) - Quilometro")
switch(optiondistancia){
   case "1":
    alert(distancia + " anos-luz equivalem a " + (distancia * 0.306601) + " parsecs.");
    break;
  case "2":
    alert(distancia + " anos-luz equivalem a " + (distancia * 63241.1) + " unidades astronômicas.");
    break;
  case "3":
    alert(distancia + " anos-luz equivalem a " +  distancia * math.pow(9.461, 12) + " quilômetros.");
    break;
  default:
    alert("Opção inválida.");
}