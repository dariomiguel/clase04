const fs = require('fs');

const array = ["asd", 123, true, "asdfasdfas"];
const arrayNew = array.map(item => item + item);

console.log(arrayNew);