// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "nelash",
    age: 23,
    [mySym]: "myKey1",
    email: "nelash@gmail.com",
    id: 10001,
    isLogin: true,
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) // object take the value behind in String like



// JsUser.email = "Nagendra@google.com"
// Object.freeze(JsUser); // Freeze the Object for noe update Value
// console.log(JsUser)

// JsUser.email = "nelash@microsoft.com"
// console.log(JsUser)


// Second Chapter Objects
    // object declaration
    // const tinder = new Object();    // first meethod 

    const tinderUser = {}   // second Method

    tinderUser.name = "nelash"
    tinderUser.id = 'td124'
    tinderUser.isLogin = false
    // console.log(tinder);

    tinderUser = {
        email: "abc@gmail.com"
        Mob: 62610482345
    }
    console.log(tinderUser)




