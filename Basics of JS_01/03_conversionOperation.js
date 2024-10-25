let score = 50
console.log(typeof score)  //number


let score2 = "50"
console.log(typeof score2)  //string


let valueInNum = Number(score2)   //convert the value to a number
console.log(valueInNum)
console.log(typeof valueInNum);   //number


let score3 = "50abc"
let valueInNumber = Number(score3)
console.log(typeof valueInNumber);    //number
console.log(valueInNumber)            //though type is number but 50abc could be a number, so the value is NaN, means Not a number;


let userName = "BOBO"
let userName2 = " "
let valueInBoolean = Boolean(userName)
let valueInBoolean2 = Boolean(userName2)

console.log(valueInBoolean);           //true
console.log(typeof valueInBoolean); 
console.log(valueInBoolean2);           //false
console.log(typeof valueInBoolean2);    //boolean



/*Note: Conversion value in boolean:
nonzero real numbers (+1/+2/-1/-2) ===> true
0                                  ===> false
"string"                           ===> true
NaN                                ===> false
undefined                          ===> false
"" (empty string, no character)    ===> false
"  " (single space character)      ===> true*/




