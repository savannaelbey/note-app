/*
'use strict';

(function(exports) {
  function createNewNote() {
    var note = new Note('note one');

    if (note.text !== 'note one') {
      throw new Error("note not created");
    } else {
      console.log('Create new note test passed')
    }
  }
  exports.createNewNote = createNewNote;
  createNewNote();
})(this);

(function(exports) {
  function returnNoteText() {
    var note = new Note('note two')

    if(note.returnText() !== 'note two') {
      throw new Error("note not returned");
    } else {
      console.log('Return note test passed')
    }
  }
  exports.returnNoteText = returnNoteText;
  returnNoteText();
})(this);
*/
