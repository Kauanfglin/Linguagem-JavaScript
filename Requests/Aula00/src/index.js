import "core-js"
import "regenerator-runtime/runtime"

import Neo from "./neo"
import { getNeos } from "./neo_service"

async function loadNeos() {
  let neos = []
  let neosJSON = await getNeos()
  neosJSON.forEach(neo => {
    const minDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_min"]
    const maxDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_max"]
    const averageDiameter = (minDiameter + maxDiameter) / 2
    const newNeo = new Neo(neo["id"], neo["name"], averageDiameter, neo["is_sentry_object"])
    neos.push(newNeo)
  })
  renderNeos(neos)
}

loadNeos()
function renderNeos(neos) {
const UlElement = document.getElementById("neolist")
neos.forEach(neo =>{
const liElement = document.createElement("li")
const isSentry =  neo.isSentry ? "Sentry" : "Not Sentry"
const text = `${neo.id} - ${neo.name} - ${neo.AvaregeEstimetedDiameter} - ${isSentry}`
liElement.innerText = text
UlElement.appendChild(liElement)

})
}