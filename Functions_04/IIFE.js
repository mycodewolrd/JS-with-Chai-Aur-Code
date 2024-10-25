//IIFE: Immediately Invoked Function Expression
//Why IIFE: When we declear a function sometimes there is a possibility that the function can be poluated by global function, to avoid this problem we use IIFE... Also when we want to call a function immediately then we need IIFE...


//Nrml Function:
// function chai () {
//     console.log("Hello World");
// }
// chai();


//IIFE: 
(function chai () {
    console.log("Hello World");
})();
//it's a Named IIFE, coz the function has a name "chai" here

//once a IIFE called, always have to end with ';'..... coz IIFE called infinitely

//arrow func:
(() => {
    console.log("Arrow Function");

})();

//Also we can do:
(() => {

})();//unnamed IIFE

