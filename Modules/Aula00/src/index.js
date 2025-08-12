const Planet = require("./planet");
const solar_system = require("./solar_system");
const SolarSystem = require("./solar_system");
const Earth = new Planet("Earth", 510100000); // Surface area in square kilometers
Earth.rotate();
solar_system.planet.push(Earth);
solar_system.planet.push(new Planet("Mars", 144800000)); // Mars surface area
solar_system.planet.push(new Planet("Venus", 460200000)); // Venus surface