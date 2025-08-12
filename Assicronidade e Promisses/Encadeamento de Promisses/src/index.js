const spaceship = {
    name: "Voyager",
    currentBatteryCharge: 50,
    consumptionPerKm: 0.1     
};

const changeBattery = function(chargeConsumed) {
    return new Promise((resolve, reject) => {
        spaceship.currentBatteryCharge -= chargeConsumed;
        if (spaceship.currentBatteryCharge > 0) {
            resolve(spaceship.currentBatteryCharge);
        } else {
            reject("Bateria insuficiente");
        }
    });
};

const calculateBatteryConsumption = function(velocity, seconds) {
    return new Promise((resolve, reject) => {
        if (spaceship.consumptionPerKm <= 0 || velocity <= 0) {
            reject("A nave está parada");
        } else {
            let chargeConsumed = velocity * spaceship.consumptionPerKm * seconds;
            resolve(chargeConsumed);
        }
    });
};

calculateBatteryConsumption(300, 5)
    .then((chargeConsumed) => {
        return changeBattery(chargeConsumed);
    })
    .then((currentBatteryCharge) => {
        console.log(`Bateria atual: ${currentBatteryCharge}`);
    })
    .catch((error) => {
        console.log("Erro:", error);
    });
