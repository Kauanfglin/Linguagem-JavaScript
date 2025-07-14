function speedup(velocity,aceleration){
    let newvelocity = velocity + aceleration 
    console.log("a nova velocidade e " + newvelocity)
    return newvelocity
  }
  let velocity = 80
  let aceleration = 1
  console.log(velocity)
  velocity = speedup(velocity,aceleration)
  console.log(velocity)
  