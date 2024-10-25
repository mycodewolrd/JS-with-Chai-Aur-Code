const myObj = {
    js: "Javascript",
    css: "Cascading Style Sheet",
    html: "Hyper Text Markup Language",
}

for (const key in myObj) {
    //console.log(`${key} : ${myObj[key]}`);
}


//forIn under Arrays...........
const myArray = ["JS", "CSS", "JSON", "HTML"]

for (const key in myArray) {
    //console.log(key);
    //console.log(".....");
    console.log(`${key} of ${myArray[key]}`);
}