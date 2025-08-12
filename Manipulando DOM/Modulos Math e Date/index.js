console.log("Math e Date");
console.log(Math.pow(2, 3)); // 2^3 = 8
console.log(Math.sqrt(16)); // Raiz quadrada de 16 = 4
console.log(Math.random()); // Número aleatório entre 0 e 1 
console.log(Math.ceil(4.2)); // Arredonda para cima = 5
console.log(Math.floor(4.8)); // Arredonda para baixo = 4
console.log(Math.round(4.8)); // Arredonda para o número mais próximo = 5
console.log(Math.max(1, 2, 3, 4, 5)); // Retorna o maior número = 5
console.log(Math.min(1, 2, 3, 4, 5)); // Retorna o menor número = 1
console.log(Math.PI); // Valor de PI = 3.141592653589793
console.log(Math.E); // Valor de E = 2.718281828459045

//modulo date
console.log(new Date()); // Data e hora atuais
console.log(new Date(2023, 0, 1)); // Data específica: 1 de janeiro de 2023
console.log(new Date("2023-01-01")); // Data a partir de string no formato ISO 8601


let today = new Date();
console.log(today.getFullYear()); // Ano atual
console.log(today.getMonth()); // Mês atual (0-11)
console.log(today.getDate()); // Dia atual
console.log(today.getHours()); // Hora atual
console.log(today.getMinutes()); // Minuto atual
console.log(today.getSeconds()); // Segundo atual

let Aniversario = new Date("2023-01-01");
let MinhaIdade = today.getFullYear() - Aniversario.getFullYear();
console.log(MinhaIdade);