const lang = ['C', 'C++', 'Java', 'JavaScript']

lang.forEach( function (item) {
    //console.log(item);
})


// forEach Loop in Arrow functions
lang.forEach ( (item) => {
    //console.log(item);
})


// forEach Loop in Array Object
const coding = [
    {
        Name: "JavaScript",
        File: "JS" 
    },
    {
        Name: "CSS",
        File: "CSS" 
    },
    {
        Name: "JSON",
        File: "JSON" 
    },
]
coding.forEach ( (item) => {
    //console.log(`${item.Name}: ${item.File}`);
}) 


//If we hold forEach loop in a variable then we cann't access the value....coz forEach can't return values.
//  in this case we can use filter methods or like this.....

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newArr = []
myNum.forEach ( (num) => {
    if (num > 4) {
        newArr.push(num)
    }
})
//console.log(newArr);




