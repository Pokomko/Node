const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./note.js');

//customize
yargs.version('1.1.0');

//Create add command
yargs.command({
    command: 'add',
    describe: 'add note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Body of arg',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    },
});

//Remove command

yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    },
});

yargs.command({
    command: 'list',
    describe: 'list of notes',
    handler() {
        notes.listNotes();
    },
})

yargs.command({
    command: 'read',
    describe: 'read note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        console.log('Reading');
        notes.readNote(argv.title);
    },
})

// add, remove, read e.t.c

yargs.parse();

//console.log(yargs.argv);




// // Requiring express in our server
// const express = require('express');
// const app = express();

// // Defining get request at '/' route
// app.get('/', function (req, res) {
//     res.json({
//         number: 1
//     });
// });

// // Defining get request at '/multiple' route
// app.get('/multiple', function (req, res) {
//     res.json({
//         number: 1,
//         name: 'John',
//         gender: 'male'
//     });
// });

// // Defining get request at '/array' route
// app.get('/array', function (req, res) {
//     res.json([{
//         number: 1,
//         name: 'John',
//         gender: 'male'
//     },
//     {
//         number: 2,
//         name: 'Ashley',
//         gender: 'female'
//     }
//     ]);
// });

// // Setting the server to listen at port 3000
// app.listen(3000, function (req, res) {
//     console.log("Server is running at port 3000");
// });
