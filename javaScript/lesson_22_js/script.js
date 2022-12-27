//exem Amir Samoha

//Q1
function sleep_in(weekday, vacation) {
    if (weekday == false && vacation == false) {
        return true;
    } else if (weekday == false && vacation == true) {
        return true;
    } else {
        return false;
    }
}
// console.log(sleep_in(false, false));
// console.log(sleep_in(true, false));
// console.log(sleep_in(false, true));

//Q2

function monkey_trouble(a_smile, b_smile) {
    if ((a_smile && b_smile) || (!a_smile && !b_smile)) {
        return true;
    } else {
        return false;
    }


}
// console.log(monkey_trouble(true, true)) 
// console.log(monkey_trouble(false, false)) 
// console.log(monkey_trouble(true, false)) 

//Q3
function sum_double(a, b) {
    if (a === b) {          //return a == b ? a * b : a + b; כתיב מקוצר לif
        return a * b;
    } else {
        return a + b;
    }

}
// console.log(sum_double(1, 2));
// console.log(sum_double(3, 2));
// console.log(sum_double(2, 2));

//Q4

function string_times(str, n) {
    let myStr = "";
    for (let i = 0; i < n; i++) {
        myStr = myStr + str;
    }
    return myStr
}



// console.log(string_times('Hi', 2));
// console.log(string_times('Hi', 3));
// console.log(string_times('Hi', 10));



//Q5

function lucky_sum(a, b, c) {
    if (c === 13) {
        return a + b;
    } else if (b === 13) {
        return a;
    } else {
        return a + b + c;
    }


}
// console.log(lucky_sum(1, 2, 3));
// console.log(lucky_sum(1, 2, 13));
// console.log(lucky_sum(1, 13, 3));

//Q6

function make_bricks(small, big, goal) {
    let samoller = small * 1;
    let bigger = big * 5;
    if ((samoller + bigger) == goal) {
        return true;
    } else {
        return false;
    }


}
// console.log(make_bricks(3, 1, 8));
// console.log(make_bricks(3, 1, 9));
// console.log(make_bricks(3, 2, 10));

//Q7

function wordsCount(words, len) {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length == len) {
            count++;
        }
        console.log(words[i].length);
    }

    return count;

}

// console.log(wordsCount(["a", "bb", "b", "ccc"], 1));
// console.log(wordsCount(["a", "bb", "b", "ccc"], 3));
// console.log(wordsCount(["a", "bb", "b", "ccc"], 4));



//Q8 בודק אם יש את הסיפרה 1 בתוך המספר 
const has_one = (n) => {
    while (n > 0) {
        if (n % 10 == 1) {
            return true;
        }
        n = Math.floor(n / 10) // מוריד כל פבדיקה את הספרה האחרונה כדי לבדוק אם יש את הספרה 1
    }
    return false;
}
console.log(has_one(10));
console.log(has_one(22648946489));
console.log(has_one(220154648));


//Q9




//Q10









let obj = {
    nameOfme: "amir",
    play: "tennis"
};
Object.freeze(obj); // לא יתן לשנות מהמערך הקיים
obj.nameOfme = "oz";
console.log(obj);

const magic = () => new Date();
console.log(magic());

const myConcat = (arr1, arr2) => arr1.concat(arr2);//חיבור בין המערכים 

console.log(myConcat([1, 2], [3, 4, 5]));//חיבור בין המערכים 


function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2, "zsdf", 30, 4));
console.log(howMany("string", null, [1, 2, 3], {}));

const sum = (...args) => { //פונקציה עם כתחיב מקוצר לעשות פעולת חיבור לא משנה כמה ארגומנטים נשים

    return args.reduce((a, b) => a + b);
}

console.log(sum(5, 1, 2, 5, 8, 50, 100));

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

for (let val of arr1) { //לולאה שתרוץ על על אלמנט
    console.log(val);
}

arr2 = [...arr1];  // הוספת מערך אחד לשני באמצעות ...

console.log(arr2);