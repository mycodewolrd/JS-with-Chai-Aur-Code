const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const values = myNum.filter((num) => {
    return num > 4
})

//console.log(values)


const names = ["abyju", "bn", "cnk", "dnkk", "e"]

const value = names.filter((nam) => {
    return nam.indexOf > 2
})

//console.log(value)





const books = [
    {
        title: 'To Kill a Mockingbird',
        date: 'July 11, 1960',
        genre: 'History',
        author: 'Harper Lee'
    },
    {
        title: 'Harry Potter',
        date: 'June 8, 1949',
        genre: 'literature',
        author: 'George Orwell'
    },
    {
        title: 'The Great Gatsby',
        date: 'April 10, 1925',
        genre: 'History',
        author: 'F. Scott Fitzgerald'
    },
    {
        title: 'Potter',
        date: 'June 8, 1949',
        genre: 'literature',
        author: 'George Orwell'
    },
    {
        title: 'The Great Way',
        date: 'April 10, 1925',
        genre: 'History',
        author: 'George Orwell'
    },
];

const filterBook = books.filter ( (bk) => {
    return bk.author === 'George Orwell'
})

//console.log(filterBook);


const filter2 = books.filter ( (bk) => {
    return bk.author === 'George Orwell' && bk.genre === 'literature'
})

console.log(filter2);



