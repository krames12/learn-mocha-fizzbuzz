let assert = require('assert');
let fizzBuzz = require('../fizzbuzz.js').fizzBuzz;
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });

describe('FizzBuzz', function() {
    describe('number', function(){
        it('should return the number that was submitted', function() {
            assert.equal('1', fizzBuzz(1));
        });
    });
});