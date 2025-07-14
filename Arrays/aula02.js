//push add um elemento no final do array
//pop remove o ultimo elemento do array
//shift remove o primeiro elemento do array
//unshift add um elemento no inicio do array
//length retorna o tamanho do array
//concat junta dois arrays
//indexOf retorna a posicao do elemento no array
let nomefamilia = ['joao', 'maria', 'pedro', 'jose']


console.log(nomefamilia)  // ['joao', 'maria', 'pedro', 'jose']
let removefamilia = nomefamilia.shift()  // Remove 'joao'

console.log(nomefamilia.concat(removefamilia))  // ['maria', 'pedro', 'jose']
console.log(removefamilia)  // 'joao'