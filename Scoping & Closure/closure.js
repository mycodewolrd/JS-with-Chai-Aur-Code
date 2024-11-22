// Closure:
     // A closure is a function that remembers its outer variables even after the outer function has finished executing.

// Closures occur when:
     // A function is returned from another function.
     // That returned function retains access to the variables of its parent scope.



function makeFunc() {
    const name = "BabaJI";
    function displayName() {
        console.log(name);
    }
    return displayName;
}//Step 1 

const myFunc = makeFunc();
myFunc();//Step 2



//Explanation:
  //In 1st step displayName function is just return not execute bcoz.......
  // In this line, the displayName function itself (not its result) is returned as a function reference. This means that:

  // displayName is not invoked here.

  // When a function is written without (), it is treated as a reference to the function, not an execution.
  // Example:
  // displayName → Refers to the function.
  // displayName() → Executes the function. 

  // In 2nd step, myFunc is a reference to the displayName function returned from the makeFunc function.
  // When we call myFunc(), it invokes the displayName function and prints "BabaJi".
  // This demonstrates that the displayName function has access to the variables of its parent scope (the makeFunc function), even after makeFunc has finished executing.