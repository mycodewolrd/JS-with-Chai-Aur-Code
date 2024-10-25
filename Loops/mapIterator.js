//Map always print unique values and on the mentioned order

const myMap = new Map();

myMap.set('IN', "India")
myMap.set('USA', "United States of America")
myMap.set('Fr', "France")
myMap.set('IN', "India")
myMap.set('USA', "United States of America")
 
//console.log(myMap);

//for of loop under Map...........
for (const [key, value] of myMap) {
    //console.log(`${key} : ${value}`);
}

// //for in Loop under Map isn't...........
// for (const key in myMap) {
//     console.log(`${key} : ${value}`);
// }




