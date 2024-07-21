// Imidiately Invoked Function Expression(IIFE)


// function chai() {
//     console.log(`DB CONNECTED`);
// }
// chai()


(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('angad')