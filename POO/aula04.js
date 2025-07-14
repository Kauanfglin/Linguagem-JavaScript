class espaconave{
  constructor(name){
    this.name = name
    this.velocidade = 0
  }
  speedUp(aceleracao){
    this.velocidade += aceleracao
  }
}
let nave = new espaconave('Falcon 9')
console.log(nave)
nave.speedUp(50)
console.log(nave)