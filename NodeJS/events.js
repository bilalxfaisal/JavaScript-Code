const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Run', () => {
  console.log('Stop running!');
});

myEmitter.emit('Run'); 

// Syntax: myEmitter.on('The name of event', () => {'What do do when event starts'})