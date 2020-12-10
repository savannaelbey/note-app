'use strict';


it('singleNoteView is an instance of SingleNoteView', function() {
  let singleNoteView = new SingleNoteView();
  expect(singleNoteView instanceof SingleNoteView).toEqual(true);
})

it('takes a note as a parameter', function() {
  let singleNoteView = new SingleNoteView();
  expect(singleNoteView.note instanceof Note).toEqual(true);
})

it('can display the note with correct HTML element', function() {
  let note = new Note('Favourite drink: Apple juice');
  let singleNoteView = new SingleNoteView(note);
  expect(singleNoteView.noteHTML()).toEqual('<div>Favourite drink: Apple juice</div>');
})
// it('Can show the text stored inside the note', function() {
//   let newNote = new Note('this is the note text');
//   expect(newNote.returnText()).toEqual('this is the note text');
// });
