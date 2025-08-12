function AddNewPhone() {
    const form = document.querySelector("form#Phones");
const NewPhone = form.children[0].cloneNode(true);
const phoneposition = form.children.length+ 1;
newPhone.querySelector("label").innerText = `Telefone ${phoneposition}`;
 form.appendChild(NewPhone);
 console.log(form.children);
}
function PrintPhone() {
    let message = "";
    const phones = document.querySelectorAll("input[name='phone']");
    phones.forEach((phone, index) => {
        message += `Telefone ${index + 1}: ${phone.value}\n`;
    });
    alert(message);
}