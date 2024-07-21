// var c = 300
let a = 300
if(true) {
    let a = 10
    const b = 20
    // console.log("inner: ", a);
}

// console.log(a);


function one() {
    const username = "Angad"

    function two() {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

    two()
}
one()


if(true) {
    const username = "Angad"
    if(username === "Angad"){
        const website = " youtube"
        //console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ********************************** interesting *******************************


function addone(num) {
    return num + 1
}

console.log(addone(5));


const addTwo = function(num) {
    return num + 2
}

addTwo(5)