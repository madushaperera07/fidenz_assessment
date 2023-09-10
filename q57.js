

function testSize(num){
    if(num > 19){
        return "Huge"
    }else if(num > 14){
        return "Large"
    }else if(num > 9){
        return "Medium"
    }else if(num > 4){
        return "Small"
    }else{
        return "Tiny"
    }
}

console.log(testSize(5))
