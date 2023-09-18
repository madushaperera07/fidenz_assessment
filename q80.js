

function randomRange(myMin , myMax){
    return Math.floor(Math.random()*(myMax - myMin +1)) + myMin
}

var myRandom = randomRange(1,3)

console.log(myRandom)
