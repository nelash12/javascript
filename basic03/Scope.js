// let a = 10
// const b = 20
// var c = 30


// Block of code
// if (true) {
//     let a = 10 // loacal Varriable
// const b = 20    //// loacal Varriable
// var c = 30
//     }

    // console.log(a) // 
    // console.log(b)
    // console.log(c)


    // Multilevel Scope Of Function

    function one(){
        const username = "Nagendra"

        function two(){
            console.log()
                const website = "youtube"
                console.log(username)
        }

            // console.log(website)
            two()
        
    }

