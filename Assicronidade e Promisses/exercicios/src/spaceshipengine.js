import { reject, resolve } from "core-js/fn/promise";

export default class{
    constructor(spaceship){
      
    }

    turnon(){
this.checkcurrentcharge().then(currentcharge=>{
    console.log("engine is on")
}).catch(currentcharge=>{
    console.log("engine is off")
})
    }
    checkcurrentload(){
      return  new Promise((resolve,reject)=>{
        let currentcharge = this.spaceship.currentpercentcharge();
        if(currentcharge>=30){
            resolve(currentcharge)
        }else{
            reject(currentcharge)
        }
            
        })
        }
    }
