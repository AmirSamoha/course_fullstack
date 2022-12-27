
//exercise 1
let calc;
function sum() {
    let valText = document.getElementById("txt").value;
    let beNum = parseFloat(valText);
    calc = beNum + 10;

    
    if (calc >= 0){
       document.getElementById("per").innerHTML = calc;
    }else{
      alert("you must Enter a number!");
    }
}


//exercise 2
function changeHeader() {
    document.getElementById("hw").innerHTML = "I am changed";

}

// const arr = [ //הוצאת משתנים מתוך מערכים 
//     [[1, 2], [3, 4], [5, 6]], [[7, 8], [9, 10]]
// ];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         for (let r = 0; r < arr[i][j].length; r++) {
//             console.log(arr[i][j][r]);
//         }


//     }
// }


// function multiplyAll(arr) {
//     let product = 1;
//     // Only change code below this line
//   for (let i = 0;i < arr.length;i++){
//     for (let j = 0; j < arr[i].length;j++){
//       product *=  arr[i][j];
//     }
//   }
//     // Only change code above this line
//     return product;
//   }
  
//  console.log(multiplyAll([[1, 30], [10, 4], [5, 6, 7]]));

const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
console.log(ourArray);