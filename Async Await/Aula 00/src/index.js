import "core-js";
import { reject } from "core-js/fn/promise";
import "regenerator-runtime/runtime";

let laserGun = {
  shotsPerSecond: 10,
  currentPosition: [20, 45, 60],
  firing: false,
};

function adjustePosition(x, y, z) {
  return new Promise((resolve) => {
    laserGun.currentPosition = [x, y, z];
    resolve([x, y, z]);
  });
}

function fire(x, y, z) {
  return new Promise((resolve) => {
    laserGun.firing = true;
    laserGun.currentPosition = [x, y, z];
    resolve([x, y, z]); 
  });
}

async function moveAndFire(x, y, z) {
  const coord = await adjustePosition(x, y, z);
  console.log(coord);

  const fired = await fire(coord[0], coord[1], coord[2]);
  console.log(fired);
}

moveAndFire(20, 45, 60);
