function saveHouver() {
    let area = document.querySelector('input[name="area"]').value;
    let number = document.querySelector('input[name="number"]').value;
    let neighborhood = document.querySelector('input[name="neighborhood"]').value;
    let city = document.querySelector('input[name="city"]').value;

    let newListValue = document.createElement("li");
    newListValue.innerHTML = `Area: ${area} - Numero: ${number} - Bairro: ${neighborhood} - Cidade: ${city} `;

    let removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.innerHTML = "Remover";
        removeButton.setAttribute("onclick", "removeHouver(this)");


    newListValue.appendChild(removeButton);
    document.getElementById("house-list").appendChild(newListValue);

    // Limpa os campos após salvar
    document.querySelector('input[name="area"]').value = "";
    document.querySelector('input[name="number"]').value = "";
    document.querySelector('input[name="neighborhood"]').value = "";
    document.querySelector('input[name="city"]').value = "";
}
function removeHouver(button) {
let LiToRemove = button.parentNode;
document.getElementById("house-list").removeChild(LiToRemove);
}