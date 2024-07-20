// singleton
// object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Angad",
    "full name": "Angad Mishra",
    [mySym]: "myKey1",
    age: 18,
    location: "Noida",
    email: "angad@google.com",isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Angad@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Angad@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting());