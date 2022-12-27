// Read And Write Files With Node.js

// fs module is a core module, so we don't need to install it
//import { readFile, writeFile, appendFile } from 'fs';
const fs = require("fs");
// readFile is an asynchronous function
// readFile takes 3 arguments: file name, encoding, callback function
// callback function takes 2 arguments: error, data

// fs.readFile('readme.txt', 'utf8', (err, data) => {
//     if (err){
//         console.log(err);
//     }
//     console.log(data);
//   }
// );

// writeFile is an asynchronous function
// writeFile takes 3 arguments: file name, data, callback function
// callback function takes 1 argument: error

// writeFile('writeme.txt', 'Goodbye world~', (err) => {
//     if (err){
//         console.log(err);
//     }
//     console.log('Write operation completed');
//     }
// );

// // appendFile is an asynchronous function
// // appendFile takes 3 arguments: file name, data, callback function
// // callback function takes 1 argument: error

appendFile('writeme1.txt', '\n \t\ \t Hello World!', (err) => {
    if (err){
        console.log(err);
    }
    console.log('Append operation completed');
    }
);

// Q.1: split the data from readme in to an array of substrings (words). and print it!

// let newData;
// fs.readFile('readme.txt', 'utf8', (err, data) => {
//     if (err){
//         console.log(err);
//     }
//     console.log(data);
//     for (let i = 0; i < data.length; i++){
//     newData =  data.split(" ");
//     //console.log(newData);

//     }
//     ww();
// }

// );

// async function ww(){

//     const res = await newData;
//     console.log(res);
//     console.log(res.length);

// }

// Q.2: find the word that appeard the maximum amount of time in the text.



let newData;
fs.readFile("ex1.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  //console.log(data);
  for (let i = 0; i < data.length; i++) {
    newData = data.split(" ");
    //console.log(newData);
  }
  yy();
});

async function yy() {
  const res = await newData;
  //console.log(res);
  //console.log(res.length);

  let counter_big = 1;
  let counter = 0;
  let save;
  for (let i = 0; i < res.length; i++) {    
    for (let j = 0; j < res.length; j++) {        
        if (res[i] == res[j]) {
            counter++;
    }
    if( counter_big < counter) {
        counter_big = counter;
        save = res[i];
    }
  }
  counter = 0;
  
}
console.log(save  + " " + counter_big + " times");
}
