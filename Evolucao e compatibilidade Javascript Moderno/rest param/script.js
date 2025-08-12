function Comprimentar(message, names) {
    names.forEach(name => {
        console.log(`${message}, ${name}!`);
    });
}

let nomes = ["Arthur", "Jão", "Maria", "Ana", "Pedro", "Lucas", "Julia", "Fernanda", "Roberto", "Carla", "Paulo"];
let mensagem = "Olá";

Comprimentar(mensagem, nomes);
