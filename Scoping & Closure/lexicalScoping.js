//Lexical Scoping: In case of a nested function, the inner functions(child) can access the outer function's(parent) variables. But outer functions(parent) cann't access the inner function's(child) variables.

function outer (){
    let parentData = "Rajnandini";
    function inner1(){
      let inner1Secret = "Sonai";
      console.log("Self Access:", inner1Secret); //definitely have self access
      console.log("Parent's data:", parentData); //have access of the parent function
    //   console.log("Siblling's data:", inner2Secret); //don't have access of siblling's
    };
    inner1();
    function inner2() {
      let inner2Secret = "BABAJI";
      console.log("Self Access:", inner2Secret);//definitely have self access
      console.log("Parent's data:", parentData);//have access of the parent function
    //   console.log("Siblling's data:", inner1Secret); //don't have access of siblling's
    }
    inner2();
}
outer();
// console.log("Too Outer:", parentData);//don't have access
