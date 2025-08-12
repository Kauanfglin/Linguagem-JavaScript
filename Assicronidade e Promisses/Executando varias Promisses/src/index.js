const increasevelocity = function(velocitytoincrease){
    return new Promise((resolve, reject) => {
        if(velocitytoincrease<0){
            reject("velocity cannot be negative")
        }else{
            resolve(velocitytoincrease/10)
        }
    })
}
const newbatteryconsumo = function(currentvelocity,velocitytoincrease){
    return new Promise((resolve, reject) => {
        let newbatteryconsumo = (currentvelocity + velocitytoincrease)/1000
        if(newbatteryconsumo > 0){
            resolve(newbatteryconsumo)
            
        }
        else{
            reject("velocity cannot be negative")
        }
    })
}

let velocity = 20
let velocityincrease =  increasevelocity(velocity)
let batteryconsumo = newbatteryconsumo(20,velocity)
Promise.all([velocityincrease,batteryconsumo]).then((values) => {
    console.log(values)
}).catch((error) => {
    console.log(error)
})