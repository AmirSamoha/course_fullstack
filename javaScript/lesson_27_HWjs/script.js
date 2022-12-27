//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//    Home Assignment 1 - sorting algorithms 1 & string manipulation 1
// ----------------------------------------------------------------------
//              grading system: (for each question)
//       
// 1. if the code is not working - *0
// 2. if the code is working but not according to the instructions - *0.5
// 3. if there's no explanation -  *0.75
// 4. late submission - final_grade -=  10*days_late
//
// ----------------------------------------------------------------------
//  --------------- DUE DATE: 05/12/2022 at 11:59pm ---------------------
// ______________________________________________________________________


// ______________________________________________________________________
//
// ------------------------  PART 1 - 60 Points -------------------------
//_______________________________________________________________________


// 1. sorting algorithms - bubble sort, selection sort, insertion sort
// part 1 - 60 points 20 points each

/*
* write the fulling functions below - you can't any built-in methods
* click the link to see the algorithm
* try implementing the algorithm in your own words
*/

// helpfull links:
// link to visualize the sorting : https://visualgo.net/en/sorting
// https://algorithm-visualizer.org/brute-force/bubble-sort (bubble sort)
// https://algorithm-visualizer.org/brute-force/selection-sort (selection sort)
// https://algorithm-visualizer.org/brute-force/insertion-sort (insertion sort)


// 1.1 bubble sort - https://en.wikipedia.org/wiki/Bubble_sort
let arraySort = [50, 60, 85, 250, 6, -8];
const bubbleSort = (arr) => { //מיון מערך זה מתבסס על השוואה בין שני אברים הצמודים אחד לשני לדוגמא אם השמאלי גדול יותר מהימני הוא יתחלפו במערך 
    for (let i = 0; i < arr.length; i++) {
        //נריץ לולאה שתעבור על כל האיברים במערך
        for (let left = 0; left < (arr.length - i - 1); left++) {
            //נריץ עוד לולאה שתעבור על כל האיברים ביחס לאיברים הקודמים פחות האיברים שכבר עברנו עליהם ושהתמיינו כבר
            if (arr[left] > arr[left + 1]/**האיבר הימיני הצמוד לו */) {
                //נבדוק את האיברים הצמודים האם השמאלי גדול יותר מהימני      
                let temp = arr[left]; //נשמור את הערך השמאלי במשתנה
                arr[left] = arr[left + 1];//אם השמאלי גדול יותר מהימני הם התחלפו והימני יהיה שווה לשמאלי הצמוד אליו
                arr[left + 1] = temp;//ונחזיר את הערך למשתנה המקורי
            }

        }
    }
    return arr; //נחזיר את המערך הממנוין מהקטן לגדול
};
console.log(bubbleSort(arraySort));// =>[-8, 6, 50, 60, 85, 250]
//----------------------------------------------------------------------------------------------------------------
// 1.2 selection sort - https://en.wikipedia.org/wiki/Selection_sort
let arraySelction = [7, 9, 3, 5, 20, 16, 2];
//מיון מערך בסגנון הזה מתבצע בכך שהלולאה עוברת על על האיברים ומגיעה לאיבר הקטן ביותר כאילו מוציאה אותו מהמערך ושמה אותו ראשון במערך חדש
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let smallIndex = i;//נשמור את הערך הראשון במשתנה לאחר מכן זה יהיה הערך הקטן ביותר
        for (let j = i + 1; j < arr.length; j++) { // (j+1)-i נריץ עוד לולואה שבודקת את הערך ליד ה 
            if (arr[j] < arr[smallIndex]) {  //האם הערך במקום השני קטן מהערך המקום הראשון
                smallIndex = j; //אם כן הערך הקטן שביותר שנמצא יהפוך להיות במשתנה שהזנו
            }
        }
        if (smallIndex !== i) {//אם הערך של המששתנה השתנה ולא שווה יותר לערך שנתנו בהתחלה אז נצבע החלפה
            let temp = arr[smallIndex];
            arr[smallIndex] = arr[i];
            arr[i] = temp;
        }

    }
    return arr;
};
console.log(selectionSort(arraySelction)); // => [2, 3, 5, 7, 9, 16, 20]

//----------------------------------------------------------------------------------------------------------------
// 1.3 insertion sort - https://en.wikipedia.org/wiki/Insertion_sort
let arrayInsertSort = [2, 3, 4, 0, 14, 25, 6, -5];
let arrayName = ["samoha", "oz", "amir"];
const insertionSort = (arr) => { // שימוש במיון זה בדרך כלל למערכים שיחסית ממוינים כבר ויש מספר איברים קטן שהכניסו להם וצריכים מיון
    for (let i = 1; i < arr.length; i++) { //נריץ לולאה מהמקום ה1 
        let aii = arr[i];
        let j = i - 1; //j = 0 
        while (j >= 0 && arr[j] > aii) { //נבדק האם האיבר השמאלי גדול מהימני אם לא ימשיך לאחד אחריו 
            arr[j + 1] = arr[j];//אם כן נעביר את האיבר למקום הרצוי
            j--
        }

        //שימוש בפונקציה זו הבדיקה תערך עד שהאיבר השמאלי ימצא מספר קטן מהימיני וידחוף את הימני למקום הרצוי
        arr[j + 1] = aii;
    }
    return arr;
};
console.log(insertionSort(arrayInsertSort)); // => [-5, 0, 2, 3, 4, 6, 14, 25]
console.log(insertionSort(arrayName)); // => ['amir', 'oz', 'samoha']

//_______________________________________________________________________
//
// ------------------------  PART 2 - 40 Points -------------------------
//_______________________________________________________________________




// 2. working with strings! - without using built-in methods!
// part 2 - 40 points 10 points each


// 2.1 Capitalize the first letter of a string
const capitalize = (str) => {

    for (let i = 0; i < str.length; i++) {
        let firstLetter = str[0];
        switch (firstLetter) {
            case "a":
                firstLetter = "A";
                break;
            case "b":
                firstLetter = "B";
                break;
            case "c":
                firstLetter = "C";
                break;
            case "d":
                firstLetter = "D";
                break;
            case "e":
                firstLetter = "E";
                break;
            case "f":
                firstLetter = "F";
                break;
            case "g":
                firstLetter = "G";
                break;
            case "h":
                firstLetter = "H";
                break;
            case "i":
                firstLetter = "I";
                break;
            case "j":
                firstLetter = "J";
                break;
            case "k": ;
                firstLetter = "K";
                break;
            case "l":
                firstLetter = "L";
                break;
            case "m":
                firstLetter = "M";
                break;
            case "n":
                firstLetter = "N";
                break;
            case "o":
                firstLetter = "O";
                break;
            case "p":
                firstLetter = "P";
                break;
            case "q":
                firstLetter = "Q";
                break;
            case "r":
                firstLetter = "R";
                break;
            case "s":
                firstLetter = "S";
                break;
            case "t":
                firstLetter = "T";
                break;
            case "u":
                firstLetter = "U";
                break;
            case "v":
                firstLetter = "V";
                break;
            case "w":
                firstLetter = "W";
                break;
            case "x":
                firstLetter = "X";
                break;
            case "y":
                firstLetter = "Y";
                break;
            case "z":
                firstLetter = "Z";
                break;
            default:
                firstLetter = "is not a string!";
        }
        return firstLetter;
    }

};


// example:
let str = "hello world";
console.log(capitalize(str)); //-> "Hello world"

// 2.2 Capitalize the first letter of each word in a string
const capitalizeWords = (str) => {
    for ( let i = 0;i < str.length;i++){
        
    }

  

};

// example:
// let str = "hey mom";
// console.log(capitalizeWords(str)); -> "Hey Mom"

// 2.3 Reverse a string 
const reverseString = (str) => {
    let newString = " ";
    for (let i = str.length - 1; i >= 0; i--) { // i will be equal to the length of the string and will go down until it is equal to 0
        newString += str[i];//We will save in a new variable in the reverse order
    }
    return newString;


};
// example:
let strReverse = "Pizza";
console.log(reverseString(strReverse)); //-> "azzip" 


// 2.4 trim a string - remove the white spaces from the beginning and end of a string
// but not the white spaces in the middle of the string
const trim = (str) => {
    return str.trim();


};
// example:
let strTrim = "   hello world   ";
console.log(trim(strTrim)); //-> "hello world"


//______________________________________________________________________
//
// ---------------------- BONUS QUESTIONS ------------------------------
//______________________________________________________________________


// Hard mode Bonus! - 15 points -> code wihout explanation will get 0 points

// fibunacci sequence - https://en.wikipedia.org/wiki/Fibonacci_number
// write a function that returns the nth number in the fibonacci sequence

const fibonacci = (n) => {
    if (n == 1 || n == 2) {  // אם המספר שהתקבל יהיה 1 או 2 נחזיר 1 כי לא ניתן לעשות את תרגיל הפיבונצי
        return 1;
    } else { // אם הוא מספר אחר נחזיר את ערך הפנוקציה המקורי שנחבר את שני המספרים הקודמים לו ביחד
        return fibonacci(n - 1) + fibonacci(n - 2);
    }



};

// example:
let n = 7;
console.log(fibonacci(n)); //-> 13


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !submit your homework on github and send me the link to your homework!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// Good Luck!


// #####################################################################
//  ---------------------- Done? Submit! -------------------------------
// #####################################################################



