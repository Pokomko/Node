const { default: chalk } = require('chalk');
const func = require('./note.js');

const getNotes = func();
console.log(getNotes);

const succ = chalk.blue.inverse.bold('Success!')
console.log(succ);

let a = 'dawd';