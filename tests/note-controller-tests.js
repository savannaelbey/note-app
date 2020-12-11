'use strict';
it('can be instantiated', function() {
  class NoteListDouble {
    addNote() {

    }
  }
  let noteListDouble = new NoteListDouble();
  let noteController = new NoteController(noteListDouble);
  expect(noteController instanceof NoteController).toEqual(true);
});

it('updates the innerHTML of the element with the app tag', function() {
  class NoteListDouble {
    constructor() {
      this.list = ['Favourite drink: Apple juice']
    }
    addNote(text) {
      return ['Favourite drink: Apple juice'];
    }
  }
  let noteListDouble = new NoteListDouble();
  let noteController = new NoteController(noteListDouble);
  noteController.display();
  expect(document.getElementById('app').innerHTML).toEqual('<ul><li><div>Favourite drink: Apple juice</div></li></ul>')
});
