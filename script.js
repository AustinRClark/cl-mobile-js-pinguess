var pinCode = "0049";

// leftPad by timrwood
// http://stackoverflow.com/questions/8043026/javascript-format-number-to-have-2-digit
function leftPad(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}
var count = 0;
var combo = leftPad( 0, 4);
function check(combo){
  if (combo == pinCode){
      return true;
  } else {
      return false;
  }
}

var found = false;
var count = 0;

while(!found && count < 10000){
  count += 1;
  combo = leftPad(count, 4);
  found = check(combo);
}

if (found) {
	alert("Found pincode: " + pinCode);
}
