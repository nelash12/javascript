// Function  Declaration Syntax

// function functionName(){
//     FunctionBody
// }

// functionName() // call Function

// method Two
// const vatiable = function(){
//     functionBody
// }



// working

// function addTwoNum(num1, num2){
//     console.log(num1 + num2);
// }

// addTwoNum(3, "4");


function loginUserMsg(username){
    return `${username} Just Logged in`
}

 const msg= loginUserMsg("Nagendra")
 console.log(msg)



 // Rest Operator Use
 function calculateNumber(num1, ...num2){   // ... is rest operator sign
    return num2
 }

 console.log(calculateNumber(200,400,23,5,345,100)) // pass multipal arguments in function

