const fs = require('fs')
// const book = {
//     title: 'booktitle',
//     author: 'bookauthor',
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON)
// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const buff = fs.readFileSync('1-json.json');
const JSONDATA = buff.toString();
const gotdata = JSON.parse(JSONDATA);

gotdata.name = 'Max';
gotdata.age = '18';

const bookJSON = JSON.stringify(gotdata);
fs.writeFileSync('1-json.json', bookJSON)