//mpn init -y
//mpn i lodash
//npm i nodemon --save-dev || -D -> dev dependecy to view live changes on my code
//npm uninstall package-name -> un installl a package form the project
// -> the package are remove from package.json but its folder continue in node_modules

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDepth(items);
console.log('🚀 ~ file: app.js:8 ~ items', newItems);
