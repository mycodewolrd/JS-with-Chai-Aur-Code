for (let i=1; i<=10; i++) {
    if (i== 5){
        console.log(`5 Detected`);
        continue;
    }
    if (i==8){
        console.log(`8 Detected`);
        break;
    }
    console.log(i);
}