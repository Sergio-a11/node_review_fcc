setInterval(() => {
  console.log('text inside interval');
});
console.log('text outside interval');

//first the code outside the interval is executed and then the interval is executed
//and remains in a loop until the program is finished.
