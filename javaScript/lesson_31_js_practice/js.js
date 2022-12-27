// Q1: instanceOf counts the number of instances of e in a collection
let instanceOf = (element, collection) => {
  let counter = 0;
  if (typeof collection === "object") {
    for (let j in collection) {
      if (collection[j] === element) {
        counter++;
      }
    }
  } else {
    for (let i = 0; i < collection.length; i++) {
      if (collection[i] === element) {
        counter++;
      }
    }
  }

  console.log(counter);
};

// instanceOf(1, [1, 2, 3, 1, 1, 4]) // 3
// instanceOf("a", "banana") // 3
// instanceOf(5, {a: 5, b: 5}) // 2

// Q2:
// 1.
//count the number of users in "data_base_l1.json"
//and return a list of their names

async function get_users() {
  const response = await fetch("./data_base_l1.json");
  const data = await response.json();
  //console.log(data.users);
  let str = [];
  let counter = 0;
  for (let key in data.users) {
    str.push(data.users[key].name);
    counter++;
    //console.log(data.users[key].name);
  }
  return `Q1 ------ ${str} \n counter of users  ${counter}`;
}
//get_users().then((x) => console.log(x));

// 2.
// in "data_base_l2.json" and return a list of lists with size 2  -> [[name, age], [name, age], ...]
// each list contains the name and the age of the user

async function get_users_age() {
  const response = await fetch("./data_base_l2.json");
  const data_a = await response.json();
  let arru = [];
  // let arra = [];
  for (let key in data_a.users) {
    arru.push([data_a.users[key].name, data_a.users[key].age]);
  }
  return arru;
}
//get_users_age().then((y) => console.log(y));

// 3.
// in "data_base_l3.json"
// return a list of emails that are created from name+_+last_name + "@gmail.com"
// for example: "john doe" -> john_doe@gmail.com

async function get_mail() {
  const response = await fetch("./data_base_l3.json");
  const data_a = await response.json();
  let arru = [];
  // let arra = [];
  for (let key in data_a.users) {
    arru.push(
      data_a.users[key].name + "_" + data_a.users[key].last_name + "@gmail.com"
    );
  }
  return arru;
}
//get_mail().then((w) => console.log(w));

// Q3:
// 1. create a login page (you can reuse the code from the previous lesson)
// 2. assume that the user is logged in if the user name is "admin" and the password is "1234"
// 3. if the user is logged in, show a welcome message and table of all users in
// "data_base_l3.json" and their emails



async function get_table() {
    const response = await fetch("./data_base_l3.json");
    const data = await response.json();
    console.log(data);
    for (let key in data.users) {
      console.log(data.users[key]);
      let tr = document.createElement("tr");
        for (let i in data.users[key]){
          console.log(data.users[key][i]);
          let td = document.createElement("td");
          td.appendChild(document.createTextNode(data.users[key][i]));
          tr.appendChild(td);
          console.log(tr);
          
        }
        let td = document.createElement("td");
        td.appendChild(document.createTextNode(data.users[key].name + "_" + data.users[key].last_name + "@gmail.com"));
        tr.appendChild(td);
        document.getElementById("tableData").appendChild(tr);
        document.getElementById("tableData").style.border = "1px solid";
        
    }

}
//   data_a.users[key].name + "_" + data_a.users[key].last_name + "@gmail.com"
const adminCheck = () => {
  const user = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  if (user === "admin" && password === "1234") {
    get_table();
  }else{
    alert(`${user} You do not have the appropriate permissions`)
  }
}


