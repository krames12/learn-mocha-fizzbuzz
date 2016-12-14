// meat and potatoes of fizzbuzz itself
function fizzBuzz(num) {
  if(num % 3 == 0 && num % 5 == 0) {
    return 'fizzbuzz';
  }
  else if(num % 3 == 0) {
    return 'fizz';
  }
  else if(num % 5 == 0) {
    return 'buzz';
  }
  else {
    return num.toString();
  }
}

// handling DOM elements for single responsibility purposes

// event listeners

// exporting the fizzBuzz function for mocha tests
module.exports = {
  fizzBuzz
};