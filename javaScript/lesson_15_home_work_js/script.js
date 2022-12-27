
//exercise 1 
const person = {
    firstName: "amir", lastName: "samoha", age: 28, carName: "jimminy",
    fullName: function () {
        return this.firstName + " " + this.lastName + " " + this.age + " " + this.carName
    }
};
console.log(person.fullName()); // return my fullName string


//exercise 2
const my_date = new Date(1994, 2, 10).toLocaleDateString()
document.write(my_date);       //function return my Birthday

//exercise 3 
const person2 = {
    firstName: "amir", lastName: "samoha", age: 28, carName: "jimminy", my_date,
    fullName: function () {
        return this.firstName + " " + this.lastName + " " + this.age + " " + this.my_date + " " + this.carName
    }
};
console.log(person2.fullName()); // return my fullName string with my Birthday

//exercise 4
const error_date = new Date(2000, 50, 20).toLocaleDateString()
let explen = "When you increase the number of days above what exists, the months will increase";
let explen2 = "And when you increase the number of months above the existing one, the year increases";
let explanation = (explen + explen2);
console.log(error_date, explanation);
 

class Humen{
    constructor(name, lastName, colorEye, id){
        this.name = name;
        this.lastName = lastName;
        this.colorEye = colorEye;
        this.id = id;

    }
}
let humen1 = new Humen("amir", "samoha", "blue", "55555" );
let humen2 = new Humen("amir", "samoha", "blue", "6666" );
let humen3 = new Humen("amir", "samoha", "blue", "7777" );
let humen4 = new Humen("amir", "samoha", "blue", "8888" );
console.log( humen1);
console.log( humen2);
console.log( humen3);
console.log( humen4);