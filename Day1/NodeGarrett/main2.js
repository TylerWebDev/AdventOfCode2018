const fs = require('fs');

try {
  var data = fs.readFileSync('input.txt', 'utf8').toString().split("\n");
} catch (e) {
  console.log('Error:', e.stack);
}

var counter = 0;
var stops = [counter];
var found = false;

while (!found) {
  for (i in data) {
    if (data[i] == "") continue;

    var op = (data[i].charAt(0) == "+");
    var val = parseInt(data[i].substring(1));

    if (op) {
      counter += val;
    } else {
      counter -= val;
    }

    if (stops.indexOf(counter) >= 0) {
      console.log("Fatal error: duplicate value reached: " + counter);
      found = true;
      break;
    } else {
      stops.push(counter);
    }
  }
}
