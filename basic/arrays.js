// const myArr = [1,3,4,5,2,5]

// const anotherArr = ['ram', 'rahul', 'raja']

// const myArr2 = new Array(1,2,3,5,6)
// // myArr2.push(10)
// // myArr2.pop()
// // anotherArr.unshift('shyam')
// // anotherArr.shift()


// // console.log(myArr2);
// // console.log(anotherArr)


// const newArr = myArr.join() // to convert Arrays To String 

// // console.log(myArr)
// // console.log(newArr)


// // slice splice

// const arr1 = myArr.slice(1,3)


// console.log("A", myArr)
// console.log(arr1)


// console.log("B", myArr)

// // splice
// const arr2 = myArr.splice(1,3)

// console.log("C", myArr)
// console.log(arr2)



// Arrays Advance Concept
const arr1 = ['thor', 'ironman', 'spiderman']

const arr2 = ['superman', 'flash', 'batman']
// arr2.push(arr1)

// console.log(arr1)

// const allArr = arr2.concat(arr1)
// console.log(arr2)
// console.log(allArr)

const all_new_arr = [...arr2, ...arr1]  // Spread Method For Array Concate
console.log(all_new_arr)

const another_Array = [1, 2, 3, [4,5], 6, [3,7,[0,56],20]]

const real_arr = another_Array.flat(Infinity)
console.log(real_arr);







