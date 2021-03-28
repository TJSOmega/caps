'use strict';

const events = require("./events");

events.on('pickup', orderPickup)


function orderPickup(payload) {
  console.log(payload)
  setTimeout(() => {
    console.log(`Driver: picked up order ${payload.id}`)
  }, 1000);
}