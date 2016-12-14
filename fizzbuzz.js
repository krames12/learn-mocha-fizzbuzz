// meat and potatoes of fizzbuzz itself
function fizzBuzz(num) {
  if(num % 3 == 0 && num % 5 == 0 && num != 0) {
    return 'fizzbuzz';
  }
  else if(num % 3 == 0 && num != 0) {
    return 'fizz';
  }
  else if(num % 5 == 0 && num != 0) {
    return 'buzz';
  }
  else {
    return num.toString();
  }
}

// handling DOM elements for single responsibility purposes
function domResult(event) {
	console.log(event);
  // event.preventDefault();
  var num = document.querySelector('#number-input');
  var domOutput = document.querySelector('#result');

  domOutput.innerHTML = fizzBuzz(num.value);
}

// listening for input event on #number-input
var numInput = document.getElementById('number-input');
numInput.addEventListener('input', domResult);

// event listeners
var form = document.getElementById("fizz-form");
form.addEventListener('submit', function(event) {
	event.preventDefault();
});

// exporting the fizzBuzz function for mocha tests
module.exports = {
  fizzBuzz
};