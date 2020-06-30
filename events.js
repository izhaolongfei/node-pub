const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', (start, end) => {
    console.log(`started from ${start} to ${end}`)
})

eventEmitter.emit('start', 1, 100)

// once
let m = 0;
eventEmitter.once('event', () => {
    console.log(++m);
});
eventEmitter.emit('event');
// 打印: 1
eventEmitter.emit('event');
// 不触发

console.log(eventEmitter.eventNames())
