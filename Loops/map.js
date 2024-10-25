//If we add any conditions Map return value in true false 
const books = [
    {title: 'To Kill a Mockingbird', date: 'July 11, 1960', genre: 'History', author: 'Harper Lee'},
    {title: 'Harry Potter', date: 'June 8, 1949', genre: 'literature', author: 'George Orwell'},
    {title: 'The Great Gatsby', date: 'April 10, 1925', genre: 'History', author: 'F. Scott Fitzgerald'},
    {title: 'Potter', date: 'June 8, 1949', genre: 'literature', author: 'George Orwell'},
    {title: 'The Great Way', date: 'April 10, 1925', genre: 'History', author: 'George Orwell'},
];

const filter2 = books.map ( (bk) => {
    return bk.author === 'George Orwell' && bk.genre === 'literature'
})
//console.log(filter2);


const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const multipleNum = num.map( (i) => {
    return i * 2
})
//console.log(multipleNum);

const brodNum = num.map( (i) => {
    return 5 < i
})
//console.log(brodNum);

