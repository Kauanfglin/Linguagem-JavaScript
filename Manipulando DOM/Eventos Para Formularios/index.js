function save(){
event.preventDefault(); // Prevent the default form submission behavior
    let name = document.querySelector('input[name="name"]').value;
    let programmingLang = document.querySelector('select[name="Progamming-lang"]').value;
    alert(`Nome: ${name} \nLinguagem de Programação: ${programmingLang}`);

}