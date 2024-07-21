// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Angad"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "Angad@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Angad",
            lastname: "Mishra"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const user = [
    {
        id: 1,
        email: "angad@gmil.com"
    },
    {
        id: 1,
        email: "angad@gmil.com"
    },
    {
        id: 1,
        email: "angad@gmil.com"
    }
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor} = course

console.log(courseInstructor);

// {
//     "name" : "hitesh",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]

