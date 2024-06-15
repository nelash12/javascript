// Object DE-Structure


const mySym = Symbol("key1")

const JsUser = {
    name: "nelash",
    age: 23,
    [mySym]: "myKey1",
    email: "nelash@gmail.com",
    id: 10001,
    isLogin: true,
}

const {email: em} = JsUser // method eccess value

console.log(em);