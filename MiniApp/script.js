
let data = prompt("digite a data de partida (dd/mm/yyyy)")
//armazezar a conversao do usaurio em modo texto usando o moment para transformar a data em um dado do momoment
let dateMoment = moment(data,"dd/mm/yyyy")
let today = moment()
let datadiff = today - data
let option = prompt("QUAL OPCAO VOCE GOSTARIA DE VER? \n 1 - SEGUNDOS \n 2 - MINUTOS \n 3 - HORAS \n 4 - DIAS")
if(option == 1){
let secondsdata = Math.round(datadiff / 1000)
alert("o tempo de partida foi " + secondsdata + " segundos")
}
else if (option == 2){
    let minoff =  Math.round(datadiff / 1000 / 60)
}
else if(option == 3){
    let hours = Math.round(datadiff / 1000 / 60 / 60)
    alert("o tempo de partida foi " + hours + " horas")
}
else if(option == 4){
    let days = Math.round(datadiff / 1000 / 60 / 60 / 24)
    alert("o tempo de partida foi " + days + " dias")
}
else{
    alert("opcao invalida")
}
