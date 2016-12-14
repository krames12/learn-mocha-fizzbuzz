function fizzBuzz(num) {
    if(num % 3 == 0) {
      return 'fizz';
    }
    else {
      return num;
    }
}

module.exports = {
  fizzBuzz
};