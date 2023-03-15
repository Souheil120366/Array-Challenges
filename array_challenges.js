function alwaysHungry (arr) {
  res = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'food') {
      res += 'yummy, ';
    }
  }
  if (res.length > 0) {
    console.log (res);
  } else {
    console.log ("I'm hungry");
  }
}

alwaysHungry ([3.14, 'food', 'pie', true, 'food']);
// this should console log "yummy", "yummy"
alwaysHungry ([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

function highPass (arr, cutoff) {
  var filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > cutoff) {
      filteredArr.push (arr[i]);
    }
  }

  return filteredArr;
}
var result = highPass ([6, 8, 3, 10, -2, 5, 9], 5);
console.log (result); // we expect back [6, 8, 10, 9]

function betterThanAverage (arr) {
  var sum = 0, avg = 0;
  // calculate the average
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = Math.floor (sum / arr.length);
  var count = 0;
  // count how many values are greated than the average
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > avg) {
      count += 1;
    }
  }
  return count;
}
var result = betterThanAverage ([6, 8, 3, 10, -2, 5, 9]);
console.log (result); // we expect back 4

function reverse (arr) {
  // your code here
  var len = arr.length - 1;
  for (i = 0; i < len - i; i++) {
    rep = arr[i];
    arr[i] = arr[len - i];
    arr[len - i] = rep;
  }
  return arr;
}

var result = reverse (['a', 'b', 'c', 'd', 'e']);
console.log (result); // we expect back ["e", "d", "c", "b", "a"]

function fibonacciArray (n) {
  // the [0, 1] are the starting values of the array to calculate the rest from
  var fibArr = [0, 1];
  // your code here
  for (let i = 1; i < n - 1; i++) {
    fibArr.push (fibArr[i - 1] + fibArr[i]);
  }
  return fibArr;
}

var result = fibonacciArray (10);
console.log (result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
