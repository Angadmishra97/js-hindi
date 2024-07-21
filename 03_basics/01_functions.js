// function sayMyName(){
//     console.log("A");
//     console.log("N");
//     console.log("G");
//     console.log("A");
//     console.log("D");
// }

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return`${username} just logged in`
}

//console.log(loginUserMessage("angad"));
console.log(loginUserMessage());