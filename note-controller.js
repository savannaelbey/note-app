'use strict';

class NoteController {

  constructor(noteList = new NoteList()) {
    this.noteList = noteList
    noteList.addNote('Favourite drink: Apple juice')
    this.noteListView = new NoteListView(this.noteList);
  }

  display() {
    document.getElementById('app').innerHTML = this.noteListView.getHTML()
  }
}

let noteController = new NoteController();
noteController.display();
