'use strict';

class NoteListView {
  constructor(noteList = new NoteList()) {
    this.noteList = noteList;
  }

  getNoteList() {
    return this.noteList;
  }

  getHTML() {
    let before = '<ul><li><div>';
    let after = '</div></li></ul>';
    let middle = this.noteList.list.join('</div></li><li><div>');
    return `${before}${middle}${after}`;
  }

}
