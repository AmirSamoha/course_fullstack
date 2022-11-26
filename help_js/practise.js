//exercise 1

//לבנות פונקציה שמקבלת מחרוזת ולחתוך את השלוש אותיות הראשונות וה3 אותיות האחרונות
//ולחבר אותם

function newArry(str) {

    if (str.length <= 3) {
        console.log(str);
    } else {
        console.log(str.slice(0, 3) + str.slice(-3));

    }

}
// newArry("amirsamoha");
// newArry("ami");
// newArry("amirsamohasfsdfrfe");


//exercise 2
//לכתוב תוכנית שמחלצת את החצי הראשון של מחרוזת זוגית 

function evenArray(str) {
    if (str.length % 2 == 0) {
        console.log(str.slice(0, str.length / 2));

    } else {
        console.log("the string is not evel");
    }
}

//evenArray("amirsamoha");
//---------------------------------------------------------------------
//exercise 2
//לשרשר שני מחרוזות מלבד האלמנט הראשון

function cocatString(str1, str2) {
    let newStr1 = str1.slice(1, str1.length)//מהאלמנט הראשון עד סוף המחרוזת
    let newStr2 = str2.slice(1, str2.length)
    console.log(newStr1 + newStr2);

}
//cocatString("amir", "samoha")


//לקבל שני מספרים ולבדוק מי מהם יותר קרוב ל100

function check(num1, num2) {
    if ((100 - num1) < (100 - num2)) {
        console.log(num1);
    }

}

//check(88, 50);
//---------------------------------------------------------------------
//exercise 3
//Write a JavaScript function to check whether an `input` is an array or not

function is_array(something) {
    if (toString.call(something) === "[object Array]") {  //"[object Array]"= בדקה אם שווה למערך
        return `${something} is array!`;
    } else {
        return `${something} is NOT array!`;
    }
}

//console.log(is_array('w3resource')); //false
//console.log(is_array([1, 2, [4, 0]]));//true
//---------------------------------------------------------------------

//exercise 4
//Write a JavaScript function to clone an array.

function cloneArray(array) {
    return array.slice(0);
}

// console.log(cloneArray([1, 2, 4, 0]));
// console.log(cloneArray([1, 2, [4, 0]]));

//exercise 4
//Write a JavaScript function to get the first element of an array. 
//Passing a parameter 'n' will return the first 'n' elements of the array.


//הוצאת ההאלמט הראשון עד n
function firstElement(arry, n) {
    if (arry == null) {
        return void 0;
    }
    if (n == null) {
        return arry[0];
    }
    if (n < 0) {
        return []

    }
    return arry.slice(0, n)

}

// console.log(firstElement([7, 9, 0, -2]));
// console.log(firstElement([],3));
// console.log(firstElement([7, 9, 0, -2],3));
// console.log(firstElement([7, 9, 0, -2],5));
// console.log(firstElement([7, 9, 0, -2],-3));

//---------------------------------------------------------------------

//exercise 5
// Write a JavaScript function to get the last element of an array.
// Passing a parameter 'n' will return the last 'n' elements of the array.

//הוצאת אלמנט מהאחרון עד n
function lastElement(arry, n) {
    if (arry == null) {
        return void 0;
    }
    if (n == null) {
        return arry.slice(-1);
    }
    if (n < 0) {
        return []

    }
    return arry.slice(-n)
}

// console.log(lastElement([7, 9, 0, -2]));
// console.log(lastElement([7, 9, 0, -2], 3));
// console.log(lastElement([,5,0,78,9,7, 9, 0, -2], 6));
//---------------------------------------------------------------------
//exercise 6
//Write a simple JavaScript program to join all elements of the following array into a string
let myColor = ["Red", "Green", "White", "Black"];
let myColor1 = myColor.toString(); //מתודה להעברה למחרוזת 
//console.log(typeof(myColor1));

//exercise 7
//Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. 
//For example if you accept 025468 the output should be 0-254-6-8.

let numbers1 = 124586233546164864312;//get numbers
let numString = numbers1.toString();// make the number to string
let result = []; //push here the new string
//console.log(numString[4-1]); => //5
for (let i = 0; i < numString.length; i++) {//לולאת פור שץעבור על כל אלמנט 
    if ((numString[i - 1] % 2 === 0) && (numString[i] % 2 === 0)) {//נבצע בדיקה האם המספר הנוכחי והמספר שלפניו זוגיים  
        result.push("-", numString[i]);//אם שני המספרים זוגיים נכניס בניהם "-"
    }
    else {
        result.push(numString[i]); //אם לא נכניס את המספר הרגיל 
    }
}
//console.log(result.join(''));
//---------------------------------------------------------------------

//exercise 8
//Write a JavaScript program to sort the items of an array

let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
let sortArr1 = arr1.sort();
//console.log(sortArr1);
//---------------------------------------------------------------------

//exercise 9
//Write a JavaScript program to find the most frequent item of an array 
//מה הערך שחוזר על עצמו הכי הרבה פעמים 

let arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3,3,3,3,3,3];
//let str = arr2.toString();
let counter_big = 1;
let counter = 0;
let save;

for (let i = 0; i < arr2.length; i++) {
    for (let j = i; j < arr2.length; j++) {//ולאה שתבדוק כל איבר שירות וישווה את האיברים האחרים
        if (arr2[i] == arr2[j]) {//אם האיבר שווה לאיבר שהוא בודק תעלה את הקואנטר ב1
            counter++
        }
        if (counter_big < counter) {
            counter_big  = counter;
            save = arr2[i];
        }
        
    }
    counter = 0;
}
//console.log(save  + " " + counter_big + " times");
//---------------------------------------------------------------------
//exercise 10
//Write a JavaScript program which prints the elements of the following array.

let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for(let i = 0; i < a.length;i++){ //הוצאת אלממנט מתחיל מתור 0
    //console.log("row " + i);
    for (let j = 0; j < a[i].length ;j++){ // הוצאת אלמנט מתחיל מהשורה 0
       // console.log("culom " + a[i][j])
        
    }
}

//---------------------------------------------------------------------
//exercise 11
//Write a JavaScript program to compute the sum and product of an array of integers

let integerNum = [1,2,3,4,5,6];
let x = 0;
let y = 1;
;
function sumOfElement (arry){
    for( let int in arry){// לולאה שתעבור איבר איבר בתוך המערך
        x += arry[int]; //מערך שיחבר את כל האיברים 
        y *= arry[int];//צערך שיכפיל את כל האיברים 
        
    }
    console.log(`sum ${x} + dabule ${y}`)
}

sumOfElement(integerNum);







