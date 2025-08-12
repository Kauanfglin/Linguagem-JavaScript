import "core-js";
import { from } from "core-js/core/array";
import "regenerator-runtime/runtime";

import SentryObject from './sentry_object';
import { getSentry_object } from './sentry_service';

async function loadSentryObjects() {
  let sentryObjects = [];
  let sentryObjectsJson = await getSentry_object();

  sentryObjectsJson.forEach(sentry => {
    const newSentry = new SentryObject(
      sentry.id,
      sentry.name,
      sentry.year_min,
      sentry.year_max
    );
    sentryObjects.push(newSentry);
  });

  // Chamar a renderização após carregar os dados
  render(sentryObjects);
}

function render(sentryObjects) {
  const olElement = document.getElementById("sentry-objects");
  sentryObjects.forEach(sentry => {
    const liElement = document.createElement("li");
    liElement.textContent =
      sentry.name + " (" + sentry.yearMin + "-" + sentry.yearMax + ")";
    olElement.appendChild(liElement);
  });
}

loadSentryObjects();
