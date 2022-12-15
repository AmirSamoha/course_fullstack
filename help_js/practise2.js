//Write a JavaScript program to calculate the factorial of a number.
//In mathematics, the factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.

function recursing(num) { //פונקציה שתקבל מספר ותכפיל את כל המספרים שתוכה
    if (num === 0) {
        return 1;
    } else {
        return num * recursing(num - 1);
    }

}
//console.log(recursing(10));
//------------------------------------------------------------------


// Write a JavaScript program to get the integers in range (x, y).
//Example : range(2, 9)
//Expected Output : [3, 4, 5, 6, 7, 8]




//------------------------------------------------------------------

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let mySum = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += arr[i];

    }
    return count;
};

// example mySum function:
console.log(mySum(arr)); //-> 55

//------------------------------------------------------------------
let myMax = (arr) => {
    let namMux = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (namMux < arr[i]) {
            namMux = arr[i];
        }
    }
    return namMux;

};


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myMax(arr));// -> 10

let myMin = (arr) => {
    let namMin = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (namMin > arr[i]) {
            namMin = arr[i];
        }
    }
    return namMin;

};


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myMin(arr));// -> 10





//------------------------------------------------------------------
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myAverage(arr)); -> 5.5
// console.log(myAverage(arr2)); -> 4.25


let myAverage = (arr) => {
    let count = 0;
    let averg = 0;
    for (let i = 0; i < arr.length; i++) {
        count += arr[i];
        averg = (count / arr.length);

    }
    return averg;
};
console.log(myAverage(arr));

let myMedian = (arr) => { }; // median is the middle value of an array
// example myMedian function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myMedian(arr)); -> 5.5
// let arr2 = [ 1,2,2,3,4,7,7,9]
// console.log(myMedian(arr2)); -> 3.5

let array = [1, 1, 2, 2, 1, 3, 3, 1, 3, 5, 5, 9, 5, 5, 5,10,7,8,1,100,5,5,4];

let myMode = (arr) => {
    let counter = 0;
    let counter2 = 1;
    let save;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                counter++; 
            }
            if (counter2 < counter) {
                counter2 = counter;
                save = arr[i];
            }
            
        }
      counter = 0;
    }
    return save;


};
// mode is the most common value of an array
console.log(myMode(array));







let array2 = [55,20,30,90,5,100];
let myRange = (arr) => {
    let namMux = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (namMux < arr[i]) {
            namMux = arr[i];
        }
    }
    let namMin = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (namMin > arr[i]) {
            namMin = arr[i];
        }
    }
    return (namMux - namMin);


}; // range is the difference between the largest and smallest values of an array
console.log(myRange(array2));


const result2 = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {  //פונקציה שלוקלחת מריסולט2 ומדפיסה אותו בתור טבלה עם li
    "use strict";
    // change code below this line
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    // change code above this line
    return failureItems;
  }
  
console.log(makeList(result2.failure));



//Write a JavaScript program to check from three given numbers 
//(non negative integers) that two or all of them have the same rightmost digit.

const checkSameRight = (num1 , num2 , num3) =>{
    let num1_first = num1[0];
    let num2_first = num2[0];
    let num3_first = num3[0];

    if (num1_first === num2_first){
        return true;
    }else if (num1_first === num3_first){
        return true;
    }else if (num2_first === num3_first){
        return true;
    }else{
        return false;
    }
}
console.log(checkSameRight("2111","222","433"));


let myString4 = "Hello, World!";
let myRegex = /Hello/;
let result5 = myRegex.test(myString4); 
console.log(result5);