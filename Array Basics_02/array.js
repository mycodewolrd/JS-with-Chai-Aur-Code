// An array is a collection of similar data items stored in contiguous memory locations. Arrays are used in computer programming to organize the same type of data.
const arr = [1, 2, 3, "Raju", "BOBO"]


//Array Methods.........
//Push Method: Add a new element at the end of the array
const myarr = [1, 2, 3, 4, 5]
myarr.push(6);
//console.log(myarr) 

//Pop Method: Remove a element at the end of the array
const myarr2 = [1, 2, 3, 4, 5]
myarr2.pop();
//console.log(myarr2)

//Unshift Method: Add a new element at the start of the array
const myarr3 = [1, 2, 3, 4, 5]
myarr3.unshift(0);
//console.log(myarr3);

//Shift Method: Remove a element at the start of the array
const myarr4 = [1, 2, 3, 4, 5]
myarr4.shift();
//console.log(myarr4);


//Includes Method: To cheak is a value present or not.... return value in boolean format
const myarr5 = [1, 2, 3, 4, 5]
// console.log(myarr5.includes(2));  //true
// console.log(myarr5.includes(6));  //false

//IndexOf Method: Return the index no. if not present return -1
const myarr6 = [1, 2, 3, 4, 5]
// console.log(myarr6.indexOf(5));  //4
// console.log(myarr6.indexOf(6));  //-1



//Slice Method: Remove a range of elements from the array starting at the specified index without change in the main array
const array = [10, 11, 12, 13, 14, 15];
const arrSlice = (array.slice(0,4));//from index 0 to (4-1)
// console.log(array);//Didn't change the main array
// console.log(arrSlice);


//Splice Method: Remove a range of elements from the array starting at the specified index, also change the main array vlaue
const array2 = [10, 11, 12, 13, 14, 15];
const arrSplice = (array2.splice(0,4));
// console.log(array2);     //[14, 15]
// console.log(arrSplice);  // [10, 11, 12, 13]



//Concat Method: Add two array
const arr1 = [1, 2, 3]
const arr2 = [5, 6, 7, 8]
const arr3 = [9, 10, 11, 12]
const arrConcat = (arr1.concat(arr2).concat(arr3))
console.log(arrConcat);  //
console.log(arrConcat.length); //[[1, 2, 3, 4],

const arrSprd = [...arr1, ...arr2, ...arr3]
console.log(arrSprd); //
console.log(arrSprd.length); //


// const Arr1 = [BOBO]
// const Arr2 = [1, 2, 3, 4, 5]
// const Arr3 = a
