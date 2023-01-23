//mpn init -y
//mpn i lodash

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDepth(items);
console.log('🚀 ~ file: app.js:8 ~ items', newItems);
