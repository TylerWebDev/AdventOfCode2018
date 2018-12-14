const fs = require('fs');

function countDiff(string1, string2, target) {
  var count = 0;
  string1 = string1.split('');
  string2 = string2.split('');
  strlen = string1.length;
  if (strlen != string2.length) {
    return false;
  }

  for (var x = 0; x < strlen; x++) {
    if (string1[x] != string2[x]) {
      count++;
    }
  }
  return (count == target);
}

try {
  var data = fs.readFileSync('input.txt', 'utf8').toString().split("\n");
} catch (e) {
  console.log('Error:', e.stack);
}

var count = data.length;

for (var i = 0; i < count; i++) {
  for (var j = i + 1; j < count; j++) {
    if (countDiff(data[i], data[j], 1)) {
      console.log("The following lines differ by only 1 char:");
      console.log(i + ":  " + data[i]);
      console.log(j + ": " + data[j]);
      return;
    }
  }
}
