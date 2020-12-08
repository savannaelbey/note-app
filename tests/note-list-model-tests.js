/*
'use strict';

(function() {
  function anInstanceOfClass() {
    var myNoteList = new NoteList();

    if (myNoteList instanceof NoteList) {
      console.log('anInstanceOfClass test passed');
    } else {
      console.log('anInstanceOfClass test failed');
    }
  }
    anInstanceOfClass();
  })();


  (function() {
    function listContainsNotes() {
      var myNoteList = new NoteList();
      myNoteList.addNote('This is a test note');
      myNoteList.addNote('Another test note');

      if (myNoteList.getList().length == 2 && myNoteList.list[0] === 'This is a test note') {
        console.log('listContainsNotes test passed');
      } else {
        console.log('listContainsNotes test failed');
      }
    }

      listContainsNotes();
    })();

    */
