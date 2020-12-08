'use strict';
// note-list-model unit tests:
it('creates and stores an array of notes', function() {
  let myArray = new NoteList();
  myArray.addNote('test note');
  expect(myArray).toBeAnArray();
  expect(myArray.list[0]).toEqual('test note');
});

it('Displays all the notes stored in the array', function() {
  let myArray = new NoteList();
  myArray.addNote('Test note');
  myArray.addNote('Another test note');
  expect(myArray.list.length).toEqual(2);
});
