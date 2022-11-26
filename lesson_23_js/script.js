
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};



//לתת שמות לאלמנטים באמצעות המערך הבא לדוגמא 
//const lowToday = today.low;
//const  highToday = today.high
const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;
const { tomorrow: { low: lowTorrow, high: highTomorrow } } = LOCAL_FORECAST;
//console.log(highTomorrow);

const [a, b, , , c] = [1, 2, 3, 4, 5, 6]; //לתת לערך מסויים משתנה לדוגמא למשתנה סי ,
//console.log(a, b, c);    //ניתן את הערך 5 באמצעות פסיקים כל אחד פסיק מדלג על מספר 

const [aa, bb, ...arr] = [1, 2, 3, 4, 5, 7];//פירוק מערך והחזרה של המערך שנותר
// console.log(aa, bb);
// console.log(arr);

function removeFirstTwo(list) {  //פונקציה שמחזירה מערך מקוצר בעזרת הפסיקים 

    const [, , , , , ...shorterList] = list;

    return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(removeFirstTwo(source));

// let num = 0;   //משחק 7 בום
// let guess = prompt("enter num");
// while (num <= guess) {
//     if (num % 7 === 0) {
//         console.log(num + " boom");
//     } else {
//         console.log(num);
//     }
//     num++
// }

//Q1 כתבו פונקציה המקבלת פרמטר name ומציגה alert עם הכיתוב: Hello name לדוגמא:
function showMyName(name) {
    name = prompt("whats your name");
    alert(" my name is: " + name);
}
//showMyName();

//Q2 כתבו פונקציה המקבלת פרמטר של טמפרטורה ומדפיסה לקונסול כיצד כדאי להתלבש היום
function temp(tempertore) {
    if (tempertore > 20) {
        alert("כדי ללבוש קצר");
    } else {
        alert("כדי להתלבש היטב");
    }
}
//temp(30);

// בכתיב מקוצר 
const temp1 = (tempertore) => {
    if (tempertore > 20) {
        alert("כדי ללבוש קצר");
    } else {
        alert("כדי להתלבש היטב");
    }
}
//temp1(10);


//Q3 כתבו פונקציה המקבלת שני מספרים a ו- b ומחזירה את הגדול מבינהם. הציגו את התשובה המחוזרת ב alert.
const sum = (a, b) => {
    if (a > b) {
        alert(a + " is bigger")
    } else {
        alert(b + " is bigger")
    }
}
//sum( 5, 10);
//sum( 20, 10);

const sum1 = (a, b) => {
    a = prompt("enter your first number");
    b = prompt("enter your second number");
    if (a > b) {
        alert(a + " is bigger")
    } if (b > a) {
        alert(b + " is bigger")
    }
}
//sum1();

//כתבו פונקציה הקולטת מידע מהמשתמש ומדפיסה אותו 10 פעמים בלולאת for.
function print(getData) {
    getData = prompt("enter something");
    for (let i = 0; i < 10; i++) {
        console.log(getData);
    }
}
//print();

//כתבו פונקציה הקולטת מספר מהמשתמש x ומדפיסה Hello שוב ושוב x פעמים.
function getNum(getNumber) {
    getNumber = prompt("enter number");
    let doNumber = Number(getNumber);
    let text = "Hellow";
    for (let i = 0; i < doNumber; i++) {
        document.write("<br>", text);
    }
}
//getNum();

const getNum1 = (getNumber1) => {
    getNumber1 = prompt("enter number");
    let doNumber = Number(getNumber1);
    let text = "Hellow";
    for (let i = 0; i < doNumber; i++) {
        document.write("<br>", text);
    }
}
//getNum1();



