function desacelerar(velocity,printer){//funncao com parametros
    let reducao = 10;//variavel local
     while(velocity > 0 ){//condicao
       velocity -= reducao;//atualização
       printer(velocity);//impressão
     }
    printer("parou");//impressão
  } 
  let velocidade = 150;//variavel global
  desacelerar(velocidade,console.log)