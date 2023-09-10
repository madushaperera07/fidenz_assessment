

function golfScore(par , strokes){
    if(strokes ==1){
        return "Hole-in-one!";
    }else if(strokes <= par - 2){
        return "Eagle";
    }else if(strokes == par - 1){
        return "Birdie";
    }else if(strokes == par){
        return "Par";
    }else if(strokes == par + 1){
        return "Bogey";
    }else if(strokes == par + 2){
        return "Double Bogey";
    }else if(strokes >= par + 3){
        return "Go Home!";
    }
}

console.log(golfScore(4,1))
console.log(golfScore(4,2))
console.log(golfScore(5,2))
console.log(golfScore(4,3))
console.log(golfScore(4,4))
console.log(golfScore(1,1))
console.log(golfScore(5,5))
console.log(golfScore(4,5))
console.log(golfScore(4,6))
console.log(golfScore(4,7))
console.log(golfScore(4,9))