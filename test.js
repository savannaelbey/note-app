'use strict';

// Tests wrapped in a module pattern
(function(exports) {
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
  // The 'expect' label function (returns a hash-like object with a toEqual and toBeAnArray keys):
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

  exports.it = it;
  exports.expect = expect;

})(this);
