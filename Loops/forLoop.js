//For Loop.............
for (let i=1; i<=10; i++){
            
    //console.log(i);
    
}


//**Print 1-10 but skip 1

for (let i = 1; i <= 10; i++) {
    if (i !== 1) {
    //console.log(i);
}
}

//**Print 0-10 but skip 5
for (let i=0; i<=10; i++) {
    if (i !== 5) {
        //console.log(i);
    }
}

//*****Want to Print odd numbers from 1-15
for (let i = 1; i<=15; i++) {
    if (i %2 !== 0){
        //console.log(i);
    }
}

//**Want to Print Backward
for (let i = 15; i>=1; i--) {
    if (i %2 !== 0){
        //console.log(i);
    }
}


//*****Want to Print even numbers from 2-16
for (let i = 2; i<=16; i++){
    if (i%2 == 0){
        //console.log(i);
    }
}


//Multiplication table of 5
for (let i=5; i<=50; i=i+5) {
    //console.log(i);
} 




//nested loop:

for (let i=0; i<=5; i++) {
    //console.log(`Outer Loop: ${i}`);

    for (let j=0; j<=2; j++){
        //console.log(`Inner Loop: ${j} & outer loop: ${i}`);
    }
}


//1-5 Multiplication table
for (let i=1; i<=5; i++) {
    for (let j=1; j<=10; j++) {
        console.log(`${i}*${j} = ${i*j}`);
}
}