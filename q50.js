
function testNotEqual(val){
    if(val != 99){
        return "Not Equal"
    }
    return "Equal"
}

console.log(testNotEqual(99))
console.log(testNotEqual("99"))
console.log(testNotEqual(12))
console.log(testNotEqual("12"))
console.log(testNotEqual("bob"))
