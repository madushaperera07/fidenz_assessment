

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    // Your code below this line
      result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";
  
    // Your code above this line
    return result;
  }
  
  // Change the words here to test your function
  console.log(wordBlanks("dog", "big", "ran", "quickly"))
  console.log(wordBlanks("cat", "little", "hit", "slowly"))
  