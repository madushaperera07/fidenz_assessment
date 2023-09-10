

var count = 0;
function cc(card){
    if( card == 2 || card == 3 || card == 4 || card == 5 || card == 6){
        return count += 1
    }else if(card == 7 || card == 8 || card == 9){
        return count += 0
    }
    else if(card == 10 || card == "J" || card == "Q" || card == "K" || card == "A"){
        return count -=1
    }
}


console.log(cc(3))
console.log(cc(7))
console.log(cc("Q"))
console.log(cc(8))
console.log(cc("A"))