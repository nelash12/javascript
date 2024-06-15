const user = {
    username: "Nagendra",
    price: 999,

    welcomemsg: function(){
        console.log(`${this.username} , welcome to website`);
    }
}

user.welcomemsg()


const add = (a, b) => {     // basic syntax of arrow Function
    return a+b
}
console.log(add(5, 20))

// second method
const addtwo = (a=10, b = 40) => a+b   // oneline declation basic syntax of arrow Function a+b

console.log(addtwo())

const addnum = (a, b = 40) => (a+b )
console.log(addnum(5, 40))


const obj = (num1, num2) => ({user: "nelash", id: 123})

console.log(obj(50, 20))


// const user = {
//     username: "Nagendra",
//     price: 999,

//     welcomemsg: function(){
//         console.log(`${this.username} , welcome to website`);
//         console.log(this)
//     }
// }

// user.welcomemsg()
// user.username = "nelash"    // current context
// user.welcomemsg()


// function chai(){ // normal function
    
//     console.log(this)
// }

// const chai = function(){
//    let username = "Nagendra"
    
//     console.log(username)
// }

const chai = (flag) => {    // Arrow function declaration
    if(flag==true){
        let username = "Nagendra"
     
     console.log(username)
    }else{
        console.log("flag is false")
    }
    
 }

chai(true)


