const Name = "nagendra"

const repocount = 50

console.log(Name + repocount + "Value") // string Concatation normal method
console.log(`Hello my name is  ${Name} and my repo is count in ${repocount}`); // String Concatation Morden Method using Backtics `` under all code


const gameName = new String("Na-ge-nd-ra")  // Object ke under string Declaratio
console.log(gameName.indexOf('r'))


const newstr = gameName.slice(-5, 6)

const Anothestr = gameName.slice(0, 8)
// console.log(newstr)
// console.log(Anothestr)

console.log(gameName.split('-'))