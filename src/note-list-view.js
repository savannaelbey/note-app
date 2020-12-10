'use strict';

class NoteListView {
  constructor(noteList = new NoteList()) {
    this.noteList = noteList;
  }

  getNoteList() {
    return this.noteList;
  }

  getHTML() {
    return `<ul><li><div>${this.noteList.list.join('</div></li><li><div>')}</div></li></ul>`;
  }

}
