
function vefifyEnablement(){

let SelectedValue = document.querySelector("select").value;
if(SelectedValue =="disabled"){
document.querySelector("input[name='some-text']").disabled = true;
let pElement = document.getElementById("message");
pElement.innerText = "O campo de texto está desabilitado.";
pElement.style.color = "red";
pElement.style.backgroundColor = "lightgray";

}else if(SelectedValue == "enabled"){
    document.querySelector("input[name='some-text']").disabled = false;
let pElement = document.getElementById("message");
pElement.innerText = "O campo de texto está habilitado.";
pElement.style.color = "black";
pElement.style.backgroundColor = "transparent";

}

}