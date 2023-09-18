
function nextInLine(arr, item) {
    // Your code here

    arr.push(item);

    var remove = arr.shift()
    return remove
   // Change this line
  }
  
  // Test Setup
  var testArr =[1,2,3,4,5];
  
  // Display Code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine([],5));
  console.log(nextInLine([],1));
  console.log(nextInLine([2],1)); // Modify this line to test
  console.log(nextInLine([6,7,8,9,10],1)); // Modify this line to test
  console.log(nextInLine(testArr,10)); // Modify this line to test
  console.log("After: " + JSON.stringify(testArr));

