// Looping A Triangle

let string = "#";
const totalNumber = 7;

while(string.length <= totalNumber){
    console.log(string);
    string += "#";
}



// FizzBuzz

/*for(let i = 0; i <= 100 ; i++){
    if(i % 3 == 0){
        if(i % 5 == 0){
            console.log("BuzzFizz");
        }
        else{
            console.log("Fizz");
        }
    }
    else if(i % 5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}*/

let word = "";

for(let i = 1; i <= 100 ; i++){
    if(i % 3 == 0){
        word = "Fizz";
    }
    if(i % 5 == 0){
        word = "Buzz" + word;
    }
    console.log(word.length != 0 ? word : i);
    word = "";
}



// Chessboard

