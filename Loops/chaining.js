const num = [1, 2, 3, 4, 5, 6]

const multiply = num
    .map((i) => {
        return i * 10
    })
    .map((i) => {
        return i + Math.floor (Math.random()*10+1)
    })
    .filter ( (i) => {
        return i % 2 === 0
    })
console.log(multiply);
