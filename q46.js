
function nextInLine(arr, item) {
    // Your code here

    if(arr[0] != undefined){
      return arr[0]
    }else{
      return item
    }  // Change this line
  }
  
  // Test Setup
  var testArr =[6,7,8,9,10];
  
  // Display Code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine([],5));
  console.log(nextInLine([],1));
  console.log(nextInLine([2],1)); // Modify this line to test
  console.log(nextInLine([6,7,8,9,10],1)); // Modify this line to test
  console.log(nextInLine(testArr[4],10)); // Modify this line to test
  console.log("After: " + JSON.stringify(testArr[4]));

