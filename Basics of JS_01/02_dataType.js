//Every Variable has a data type that tells what kind of data is being stored in a variable. There are two types of data types in JavaScript.
    // Data Type : Primitive and non-Primitive


//Primitive data types:  The predefined data types provided by JavaScript language are known as primitive data types. Primitive data types are also known as in-built data types.

// 7types.. Number, Null, Boolean, BigInt, String, Symbol, Undefined(nn bb ss u)
// Number    => 1234
// String    => "Something under quote"
// BigInt    => when number is too big, Mostly used in Stock Market, Trading
// Boolean   => true/false
// Symbol    => unique component
// Null      => standalone value
// Undefined => variable's value is not defined


console.log(typeof null);             /*typeof null===> object*/
console.log(typeof undefined);        /*typeof undefined===> undefined*/
console.log(typeof undefined); 
 






//Non-primitive data type:  Is a data type that is derived(made up of similar dada types) from primitive data types.
// Array, Object, Function

//Array:
     const itsArray = [12, 13, 14, 15, 16]
     console.log(typeof itsArray)   //Object

//Object: the part under the currly brashes{} is object
      const itsObject = {
        name: "BOBO",
        age: 30,
        city: "Goa"
      }
      console.log(typeof itsObject)   //object

//Function:
     const itsFunction = function() {
       console.log("Hello World");
     }
     console.log(typeof itsFunction)   //object-function