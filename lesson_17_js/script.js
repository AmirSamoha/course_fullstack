// console.log(Math.floor(Math.random() * (55 - 5 + 1)) + 5); // להגיע למספר בין 5 ל-55 

// let x = 55, y = 5;
// console.log(Math.floor(Math.random() * (x - y + 1)) + y); //בעזרת פרמטרים נבחר הגרלה ביו שני משתנים 

// function getRandomNumber(max, min) { // הגרלת מספרים בין מספרים בעזרת פונקציה
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRandomNumber(14, 7));
// console.log(getRandomNumber(14, 7));
// console.log(getRandomNumber(14, 7));
// console.log(getRandomNumber(14, 7));


// let arr = "somePrhase";
// let arrNum = arr.length;
// for (i = 0; i < arrNum; i++) {
//     console.log(i);
// }



// function chainToSwitch(val) {
//     let answer;

//     switch (val) {
//         case "bob":
//             return answer = "Marley";
//             break;
//         case 42:
//             return answer = "The Answer";
//             break;
//         case 1:
//             return answer = "There is no #1";
//             break;
//         case 99:
//             return answer = "Missed me by this much!";
//             break;
//         case 7:
//             return answer = "Ate Nine";
//             break;
//         default:
//             return answer = "amir";
//     }
// }

// console.log(chainToSwitch("bob"));
// console.log(chainToSwitch(7));
// console.log(chainToSwitch(42));
// console.log(chainToSwitch(999));
// console.log(chainToSwitch(1));

function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  }else{
    return "Not Found";
  }
  // Only change code above this line
}
console.log(checkObj({city: "Seattle"}, "city"));