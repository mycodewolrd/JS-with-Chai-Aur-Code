const course = {
    name: "JavaScript",
    author: "Chai Aur Code ",
    rating: 4.5,
    price: 1000,
    description: "This is a course about JavaScript"
}

console.log(course.name);//to access course's properties


//we can also destructure
const {author, rating, price} = course

console.log(author);
console.log(rating);