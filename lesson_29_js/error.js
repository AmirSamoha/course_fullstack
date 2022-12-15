
let x;
let y;
try {
    let x = 10;
    let y = 25;

    if ((x + y) > 100) {
        throw "its bigger";
    }
    if ((x + y) < 100) {
        throw "its lower";
    }
    if ((x + y) === 35) {
        throw "its equal";
    }

}
catch (error) {
    console.log(error);
}

let str;
try{
    let str = "hello world";
    let number = Number(str);
    throw `${number} is not a number`;
   
}
catch(err){
    console.log(err);
}
