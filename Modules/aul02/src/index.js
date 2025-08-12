const Planet = require("./planet");
const planetCorporation = require("./planetcorporation");
let planets= [
new planetat("Mercury", 0.39),
new Planet("Venus", 0.72),
new Planet("Earth", 1)

]
planets.forEach(planet => {
distancefromSun = planetCorporation.ConverteAuToKm(planet.AuToSun).toFixed(2);
console.log(`The distance from ${planet.name} to the Sun is ${distancefromSun} km`);
}
);