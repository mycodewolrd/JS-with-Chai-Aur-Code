// Object : An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.

   /*Properties can be a function means..... 
For example: 
const myObject = {
    greet: function (name) {
        console.log(`Hello, ${name}!`);
    },

    calculateSum: function (a, b) {
        return a + b;
    }
};

myObject.greet("Alice"); // Output: Hello, Alice!
const sum = myObject.calculateSum(3, 5);
console.log(sum); // Output: 8*/



/*In JavaScript, an object is a standalone(not dependent on any other property in the object) entity, with properties and type. This means that the value of the standalone entity can be changed without affecting the values of any other properties in the object.
    For example, the following JavaScript object has two properties: name and age. The name property is a standalone entity, because its value can be changed without affecting the value of the age property.
        const person = {
            name: "John Doe",
            age: 30
          }; */


// When objs declared as a Literals ====>then its not Standlone
// when it declared as a Construct/ Singletone Obj ====> it's Standlone


// Symbols declear like this: 
                    const smbl = Symbol("key1");




//Object Literal:
            const user = {
                name: "BOBO Patra",
                "age": 20,
                "Location": "Kolkata", //Since the obj's properties are acutally a string, so can also written like this
                [smbl]: "me@sonai", //Symbols accessed like this
                email: "admin@example.com",
                password: 235577,
                isAdmin: true,
                lastLogin: ["monday", "tuesday", "wednesday", "thursday"]
            };




//How to Access Object:
            // console.log(user.name);//Objects can access like this
            // console.log(user["email"]);//Also can access like this
            // console.log(user[smbl]);
            // console.log("*******************************************************************************");

            //console.log(Object(user)); //user access like this
            // console.log("*******************************************************************************");

            // console.log(Object.keys(user)); //user's key access like this
            // console.log("*******************************************************************************");

            // console.log(Object.values(user)); //user's value access like this
            // console.log("*******************************************************************************");



// How to change key's value:
            user.name = "BOBO MALLICK";
            user[smbl] = "sonai20"
            user.name2 = "Polu Shing"
            //console.log(user);



//How to lock/freeze Object
            // Object.freeze(user);
            // user.Location = "Goa"
            //console.log(user);


//How to add Function in Object
            //add a function named greetings......
            user.greeting = function() {
                console.log(`Hello JS user ${this.name}`);
            }

            // console.log(user.greeting());
            // console.log(user);







//Obj Construct/ Singletone Obj:

const singletoneObj = {}

singletoneObj.name = "Raja Mallick"
singletoneObj.description = "It is a collection of objects"

//console.log(singletoneObj);




//Obj Chaining:
const objChaining = {
    userId: "userId@example.com",
    fullName:{
        userName: {
            firstName: "Sonai",
            lastName: "Patra"
        }
    }
}

//console.log(objChaining.fullName.userName.firstName)





 