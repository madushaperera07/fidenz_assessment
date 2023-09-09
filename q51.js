

function testGreaterThan(val) {
    if (val > 99) {  // Change this line
      return "Over 99";
    }
   
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  // Change this value to test
  testGreaterThan(0);
  testGreaterThan(10);
  testGreaterThan(11);
  testGreaterThan(99);
  testGreaterThan(100);
  testGreaterThan(101);
  testGreaterThan(150);