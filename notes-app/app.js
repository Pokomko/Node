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

//List command

yargs.command({
    command: 'list',
    describe: 'list of notes',
    handler() {
        notes.listNotes();
    },
})

//Read command

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
        notes.readNote(argv.title);
    },
})

// add, remove, read e.t.c

yargs.parse();

//console.log(yargs.argv);