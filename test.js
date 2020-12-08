'use strict';

// Tests wrapped in a module pattern
(function() {
  // The 'it' label function:
  function it(desc, callback) {
    try {
      callback();
      console.log(`Test: ${desc}...`)
      console.log('Passed!')
    } catch(error) {
      console.log('\n')
      console.log(`Test: ${desc}...`)
      console.log('Failed!')
      console.error(error);
    }
  }
  // The 'expect' label function:
  function expect(a) {
    return {
      toEqual: function(b) {
        if (a !== b) {
          throw `${a} - DOES NOT EQUAL: ${b}`
        }
      },

      toBeAnArray: function() {
        if (!(a.list instanceof Array)) {
          throw `${a} is not an array`
        }
      }
    }
  }

  // note-model unit tests:
  it('Creates a new note and stores text inside the note', function() {
    let newNote = new Note('this is the note text');
    expect(newNote.text).toEqual('this is the note text');
  });

  it('Can show the text stored inside the note', function() {
    let newNote = new Note('this is the note text');
    expect(newNote.returnText()).toEqual('this is the note text');
  });
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
    expect(myArray.list.length).toEqual(2)
  });


})();
