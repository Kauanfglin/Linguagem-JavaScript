const path = require('path');
module.exports ={
    entry :{
        index: './src/index.js',
        galax : './src/galax.js'
    }
    ,
      output : {
        filename : '[name].bundle.js',
        path : path.resolve(__dirname, 'dist'),
    }
  
}