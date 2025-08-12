function doChange(){
    alert(event.target.value);
}
let input = document.querySelector('input[name="sample-text"]');
input.addEventListener('change', doChange);
let changeEvent = new Event('change');
input.dispatchEvent(changeEvent);
input.removeEventListener('change', doChange);