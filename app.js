const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// console.log(notes());

// console.log(chalk.inverse.yellow("success!"));

//creating a note
yargs.command({
    command:'add',
    describe:'add a note',
    builder:{
        title:{
            describe:'note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'here is the body',
            demandOption: true,
            type:'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title,argv.body);
    }
})

//removing a note
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'note title',
            demandOption: true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.removeNote(argv.title)
    }
});

//listing all notes
yargs.command({
    command:'list',
    describe:'list all notes',
    handler:function(){
        console.log("list of notes!");
    }
});

//reading a note
yargs.command({
    command:'read',
    describe:'read a note',
    handler:function(){
        console.log("reading note!");
    }
});

yargs.parse();