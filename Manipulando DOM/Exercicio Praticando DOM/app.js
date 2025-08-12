class App {
  addProperty(event) {
    event.preventDefault();
    let kind = document.querySelector('select[name="kind"]').value;
    let area = document.querySelector('input[name="area"]').value;
    let rented = document.querySelector('input[name="Rented"]').checked;

    let property = new Property(kind, area, rented);
    this.addOnPropertyList(property);
    this.clearFields();
  }

  addOnPropertyList(property) {
    let liElement = document.createElement("li");
    let text = `Tipo: ${property.kind}, Área: ${property.area} m², Alugado: ${property.rented ? 'Sim' : 'Não'}`;
    if (property.rented) {
      let rentedMark = this.createRentedMark();
      liElement.appendChild(rentedMark);
    }
    liElement.innerHTML += text;

    let buttonToRemove = this.createButtonRemove(liElement);
    liElement.appendChild(buttonToRemove);

    document.getElementById('properties').appendChild(liElement);
  }

  createRentedMark() {
    let rentedMark = document.createElement("span");
    rentedMark.style.color = "red";
    rentedMark.style.backgroundColor = "yellow";
    rentedMark.innerText = "Alugado ";
    return rentedMark;
  }

  createButtonRemove(liElement) {
 let buttonRemove = document.createElement("button");
    buttonRemove.onclick = () => liElement.remove(); // função que remove o <li> ao clicar
    buttonRemove.innerText = "Remover";

    return buttonRemove;
  }

  clearFields() {
    document.querySelector('input[name="area"]').value = "";
    document.querySelector('input[name="Rented"]').checked = false;
  }
}