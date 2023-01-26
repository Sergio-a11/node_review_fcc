//started operating system process
console.log('first');
setTimeout(() => {
  console.log(second);
}, 0);
console.log('third');
//completed and exited operating system process

// output
// first
// third
// second

//the timeout function even if its process time is one second is 'skipped' and returned
// when the third comment was printed
