const fs = require('fs');
const yargs = require('yargs');
const _ = require('lodash');

const notes = require('./notes.js');
const titleOptions = {
  describe: 'Title of Note',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe:'Body of note',
  demand:true,
  alias:'b'
};
const argv = yargs.command('add', 'Add a note', {
  title: titleOptions,
  body: bodyOptions
})
  .command('list','List all notes')
  .command('read','Read a note', {
    title: titleOptions
  })
  .command('remove','Delete a note', {
    title: titleOptions
  })
  .help()
  .argv;
var command = argv._[0];
console.log('Command:', command);
console.log('Process: ', process.argv);
console.log('Yargs: ', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    notes.logNote(note);
  } else {
    console.log("Note with title already Exists !!!");
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  if (allNotes) {
    console.log(`Printing ${allNotes.length} Note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
  } else {
    console.log("Notes empty");
  }
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log("Note found");
    notes.logNote(note);
  } else {
    console.log("Note not found");
  }
}
else if (command === 'remove') {
  var noteRemoved = notes.deleteNote(argv.title);
  var message = noteRemoved ? `Note with title ${argv.title} is removed !!!` : 'Note not found !!!';
  console.log(message);
} else {
  console.log("Command not recognised !!!");
}