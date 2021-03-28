const events = require("./events");

const storename = process.env.STORENAME



setInterval(() => {
  let order = {name:'Fake Order Placeholder', id: '001'}
  events.emit('pickup', order)
}, 5000);