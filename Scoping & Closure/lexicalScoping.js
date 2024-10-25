//Lexical Scoping: In case of a nested function, the innen functions can access the outer function's variables. But outer functions cann't access the inner function's variables.

function outerFunction() {
    const x = 23
    const y = 45
    function innerFunction() {
        const num = (x + y)
        console.log(num);
}

innerFunction()
}

outerFunction()
