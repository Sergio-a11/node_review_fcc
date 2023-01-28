//event loop
const { readFile } = require('fs');
console.log('Startted a first task');
//check file path
readFile('./content/first.txt', 'utf8', (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(res);
  console.log('completed fisrt task');
});
console.log('starting next task');

//output
// Startted a first task
// starting next task
// Hello this is the first text file
// completed fisrt task
// async flow of work
