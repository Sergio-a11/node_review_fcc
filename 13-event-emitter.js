const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id: ${id}`);
}); //label of the event

customEmitter.on('response', () => {
  console.log(`some other logic here`);
}); //many events with the same label

customEmitter.emit('response', 'john', 32);
