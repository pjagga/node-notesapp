// var obj = {
//   name: "Pinks"
// };
//
// var strObj = JSON.stringify(obj);
//
// console.log(typeof  strObj);
// console.log(strObj);


// var personString = '{"name":"Pingu","age":25}';
//
// var person = JSON.parse(personString);
//
// console.log(person);
// console.log(typeof person);

const fs = require('fs');

var origionalNote = {
  title: 'Some Title',
  body: 'Some Body'
};

var originalNoteString = JSON.stringify(origionalNote);
console.log(`originalNoteString ${originalNoteString}`);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
