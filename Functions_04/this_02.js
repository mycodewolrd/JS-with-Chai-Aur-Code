/* “This” keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function. 
If the function being referenced is a regular function, “this” references the global object.*/


const user = {
    userName: "Bobo",
    price: 1000,
    welcomeMessage: function () {
        console.log(`${this.userName}, wlcm to website`);
        console.log(this);
    }
}
user.welcomeMessage();

//console.log(this); return {}empty obj coz there is no global obj available

//In browser this() ==> return window.....coz in browser 'Window' is the global object