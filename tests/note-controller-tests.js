'use strict';
it('can be instantiated', function() {
  let noteList;
  let noteController = new NoteController(noteList);
  expect(noteController instanceof NoteController).toEqual(true);
});

it('updates the innerHTML of the element with the app tag', function() {
  let noteController = new NoteController();
  noteController.display();
  expect(document.getElementById('app').innerHTML).toEqual('<ul><li><div>Favourite drink: Apple juice</div></li></ul>')
});
