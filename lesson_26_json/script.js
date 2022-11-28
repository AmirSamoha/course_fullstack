
// function pushJson (){ //פונקציה שתציג את הכל המידע שבקובץ json
//     let json = fetch("./pepole.json")
//     .then(response => response.json())
//     .then(data => console.log(data));
    
// console.log(json);
// }

let json2 = fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(response => response.json())
    .then(data => console.log(data))
 