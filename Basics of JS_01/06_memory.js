//Memory: 2types..Stack Memory and Heap Memory
//Stack Memory used for Primitive Data Types
//Heap Memory used for Non-Primitive Data Types

//In stack memory we recieved a copy, changed not occured in previous versions
let usermail = "user@example.com"
let anotherMail = usermail
anotherMail = "another@example.com"

console.log(usermail);
console.log(anotherMail);




//In Heap memory we recieved reference , so if we change value, changed occured in both
let referenceOne = {
    name: "Raj",
    age: 30
}

let referenceTwo = referenceOne

referenceTwo.name = "BOBO"

console.log(referenceOne.name);  //BOBO
console.log(referenceTwo.name);  //BOBO