// Dates 

// let myDate = new Date(2023, 0, 23,5,3)

let myDate = new Date(2023, 5, 23,5,3)

console.log(myDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)


let obj = myDate.toLocaleString('default', {
    month: "long",
    

})

console.log(obj)

