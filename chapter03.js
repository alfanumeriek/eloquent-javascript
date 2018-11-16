// https://eloquentjavascript.net/03_functions.html

// Minimum

let min = function(a,b){
    if(a <= b) return a
    else return b
}

console.log(min(0, 10));
console.log(min(0, -10));


// Recursion

let isEven = function(number){
    if(number >= 0){
        if(number == 0) return true
        else if(number == 1) return false
        else return isEven(number - 2)
    }
    else return isEven(number * -1);
}

console.log(isEven(75));
console.log(isEven(50));
console.log(isEven(0));
console.log(isEven(-1));


// Bean counting
