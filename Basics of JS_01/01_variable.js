// JS Variables:----- 
// const  : Block Scoped Variable, cann't redeclare or update value
// let    : Block Scoped Variable, cann't redeclare but Can update value
// var    : Global Scoped Variable, can reclare or update value /*Not preferred now*/
// global : Same as var

const userName = "Rajnandini";
let userId = 5005;
var userCity = "Kolkata";
userClass = "BBA";

console.log(userName);
console.log([userId,userCity, userClass]);


//userName = "John"                    /*Error: can't update*/
//const userName = "BOBO               /*Error: can't re-declare*/

userId = 30004;                        /*Can be update*/
//let userId = 5005;                   /*Error: cann't redeclare*/

userCity = "Goa"                       /*Can be update*/
//var userCity = "Goa";                /*Can be redeclare*/

userClass = "BCom";                   /*Can be update*/

console.log(userName);
console.log([userId,userCity, userClass]);