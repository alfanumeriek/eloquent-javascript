// Looping A Triangle

let string = "#";
let totalNumber = 7;

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

let size = 8;
let even = "", odd = "";
let pound = true;

// create lines

for(let i = 0; i < size; i++){
    if(pound){
        even += "#";
        odd  += " ";
        pound = false;
    }
    else{
        even += " ";
        odd  += "#";
        pound = true;
    }
}

// draw board

let board = "";

for(let i = 0; i < size; i++){
    if(i % 2 == 0){
        board += even + "\n";
    }
    else{
        board += odd + "\n";
    }
}

console.log(board);
