//exirsise 1



// let copy = document.addEventListener('copy', function () { });


function _copy() { //פונקציה שמחזיקה ומחזירה את הערך שהועתק בדף
    document.getElementById("header").textContent = document.getSelection();
    alert(document.getSelection());
}




// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (name === contacts[i].firstName) {
            return contacts[i][prop] || "no property";
        }
    }

    return "No such conttact";
}

function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1 );
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(26));