let myArray = [];
for(let i = 0;i <= 20;i+=2){
   myArray.push(i);
   
}
console.log(myArray);


function testTriangular(rib1, rib2,rib3){
if (rib1 == rib2 && rib1 != rib3){
    console.log("משלוש שווה שוקיים");
}else if (rib1 == rib2 && rib1 == rib3){
    console.log("משלוש שווה צלעות");
}else {
    console.log("משלוש שונה צלעות");
}
}

testTriangular(80, 80, 90);
testTriangular(80, 80, 80);
testTriangular(80, 75, 90);
testTriangular(75, 80, 90);

let n = 5;
let a = 24;
let z = 46;
let gO = 77;
console.log(a%n);
console.log(z%n);
console.log(gO%n);

//exercise 1
let f = 2.365478;  
let fn = f.toString();
console.log(fn);

//exercise 1
let g = 2.365478; 
let r = 20.568478; 
let u = 7.865645; 
console.log(g.toFixed());
console.log(r.toFixed());
console.log(u.toFixed());




function change(x){
    
    if (typeof(x) == typeof(0)){
        return x.toFixed();
    }
}

console.log(change(50.46));
