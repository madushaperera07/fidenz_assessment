

function testLogicalOr(val){
    if(val< 10 || val > 20){
        return "Outside"
    }
    return "Inside"
}

console.log(testLogicalOr(0))
console.log(testLogicalOr(9))
console.log(testLogicalOr(10))
console.log(testLogicalOr(15))
console.log(testLogicalOr(19))
console.log(testLogicalOr(20))
console.log(testLogicalOr(21))
console.log(testLogicalOr(25))