/**
 * I made a mistake in the last lesson and I'm fixing it here.
 * 
 * 
 * Pass By Value -> Primitive Types (Number, String, Boolean)
 *      - When you pass a primitive type to a function, you are passing a copy of the value      
 *
 * Pass By Reference -> Objects (Array, Object, Function)
 *      - When you pass an object to a function, you are passing a reference to the object
 * 
 * 
 */

// this will be the functions we use to build the game
function reset() {
    // Reset the game
    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].textContent = "";
    }
    counter = 0;
}

function resetAll(){
    reset();
    document.getElementById("player_name_X").textContent = "(name)";
    document.getElementById("player_name_O").textContent = "(name)";
    document.getElementById("player_X").textContent = 0;
    document.getElementById("player_O").textContent = 0;
}
 




function ArrayToMatrix(arr, num) {
    // Convert an array to a matrix for easier mental math
    let matrix = [], i, k;
    // k is the number of columns
    // i is the number of rows

    for (i = 0, k = -1; i < arr.length; i++) { // i is the number of rows and k is the number of columns
        if (i % num == 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(arr[i]);
    }
    return matrix;
}


function checkForWin(matrix, symbol) {
    // this function check for all possible wining 
    let rows_c, col_c, diagonal_c, diagonalT_c; // counters 

    for (let i = 0; i < matrix.length; i++){
        rows_c = 0, col_c = 0, diagonal_c = 0, diagonalT_c = 0; // set to zero every ittration on i
        
        for(let j = 0; j < matrix[i].length; j++){

            if(matrix[i][j].textContent == symbol){
                // check for row
                    rows_c++;
            }

            if(matrix[j][i].textContent == symbol){
                // check colum
                    col_c++;
            }
            if(matrix[j][j].textContent == symbol){
                // check main diagonal 
                diagonal_c++;
            }
            if(matrix[j][matrix.length - j - 1].textContent == symbol){
                diagonalT_c++;
            }
            
        }
        if(rows_c == matrix.length || 
            col_c == matrix.length ||
            diagonal_c == matrix.length ||
            diagonalT_c == matrix.length){
            return true;
        }
    }
    return false;
}






function checkforTie(array) {
    for(let i = 0; i < array.length; i++){
        if(array[i].textContent == ''){
            return false;
        }
    }
    return true;
}



// Game Logic
let counter = 0; // Keep track of the number of turns

let buttonArray = document.querySelectorAll(".btn"); // Get all the buttons

let coArray = []; // Create an array to store the coordinates of the buttons
buttonArray.forEach((button) => {
    coArray.push(button); // Push the buttons to the array
});

let matrix = ArrayToMatrix(coArray, Math.floor(Math.sqrt(coArray.length))); // Convert the array to a matrix

console.log(matrix);

let counter_X = 0;
let counter_O = 0;
let player_X = 0;
let player_O = 0;

const namesPlayers = () =>{
    let playerName_X =prompt("player X what is your name?");
    let playerName_O =prompt("player O what is your name?");

    document.getElementById("player_name_X").textContent = playerName_X;
    document.getElementById("player_name_O").textContent = playerName_O;
}


for (let i = 0; i < buttonArray.length; i++) { // Loop through the buttons and add an event listener to each one

    buttonArray[i].addEventListener("click", 
    function() {
        let symbol;
        if(counter % 2 == 0 && buttonArray[i].textContent == "") {
            buttonArray[i].textContent = "X";
            counter++;     
            symbol = 'X';
        }else if(counter % 2 != 0 && buttonArray[i].textContent == "") {
            buttonArray[i].textContent = "O";
            counter++;
            symbol = 'O';
        }else{
            alert("This button is already clicked!");
        }

        if(checkForWin(matrix, symbol)){
            alert(`${symbol} has won`)
            if (symbol ==='X'){
                player_X++;
                document.getElementById("player_X").textContent = player_X;
            }
            if (symbol ==='O'){
                player_O++;
                document.getElementById("player_O").textContent = player_O;
            }
            reset()
        }

        if(checkforTie(coArray)){
            alert("no body won it was a Tie!")
        }
       
      
        
    }
);
}