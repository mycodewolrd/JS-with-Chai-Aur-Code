const score = 500
console.log(score);

const balance = new Number(500) //Restricted for always a number
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const result = 132.1994
console.log(result.toPrecision(2));

//Standred Number
const price = 2194800
console.log(price.toLocaleString('en-US'));  //US Standard
console.log(price.toLocaleString('en-IN')); //Indian Standard




/*******************Maths ********************/
console.log(Math.round(32.89));
console.log(Math.ceil(12.9));
console.log(Math.floor(12.9));
console.log(Math.abs(-45));
console.log(Math.min(2, 5, 6, 10, 0));
console.log(Math.max(2, 5, 6, 10,));
console.log(Math.pow(2, 3));
console.log(Math.random());
console.log((Math.random()*10) +1 );
