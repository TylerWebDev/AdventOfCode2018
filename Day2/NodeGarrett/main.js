const fs = require('fs');

function count(string, target) {
  var count = {};
  string.split('').forEach(function (s) {
    if (count[s]) {
      count[s]++;
    } else {
      count[s] = 1;
    }
  });
  for (v in count) {
    if (count[v] == target) {
      return true;
    }
  }
  return false;
}

try {
  var data = fs.readFileSync('input.txt', 'utf8').toString().split("\n");
} catch (e) {
  console.log('Error:', e.stack);
}

var counter2x = 0;
var counter3x = 0;

for (i in data) {
  if (count(data[i], 2)) {
    counter2x++;
  }
  if (count(data[i], 3)) {
    counter3x++;
  }
}

console.log(counter2x * counter3x);
