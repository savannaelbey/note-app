'use strict';

it('Returns a string of HTML that represents the list of notes', function() {
  let noteList = new NoteList();
  noteList.addNote('Buy milk');
  noteList.addNote('Buy bread');
  let noteListView = new NoteListView(noteList);
  expect(noteListView.getHTML()).toEqual('<ul><li><div>Buy milk</div></li><li><div>Buy bread</div></li></ul>');
});
