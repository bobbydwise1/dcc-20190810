/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Amazon.

Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character. For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists solely of alphabetic characters. You can assume the string to be decoded is valid.
*/

const makeCode = (yourString) => {
  let answer = '';
  let counter = 1;
  for (i=0; i<yourString.length; i++) {
    if (yourString[i] === yourString[i+1]) {
      counter++;
    } else {
      answer = answer+counter+yourString[i];
      counter = 1;
    }
  }
  return answer;
}

// let test1 = 'AAAABBBCCDAA';
// let result1 = '4A3B2C1D2A';
// console.log(makeCode(test1))

$(document).ready(function() {

  $('#form1').submit(function(event) {
  event.preventDefault();
  let input1 = $('#input1').val();

  console.log(input1)

  $('#output-section-1').text(makeCode(input1));
  })

});
