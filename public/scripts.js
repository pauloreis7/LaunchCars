
const Mask = {
    apply(target, func) {

        setTimeout(function () {

            target.value = Mask[func](target.value)

        }, 1)
    },

    formatUSD (value) {

        value = value.replace(/\D/g, "")

        return value = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'USD'
        }).format(value/100)
    }
}

//Fazendo com callbacks:

// function doubleNumber(number) {
//     return console.log(number * 2)
//   }
  
// function show (number, callback) {
    
//     setTimeout(function () {
        
//         doubleNumber(number)

//         callback()
        
//     }, 1000, number)
    
// }


// show(1, function () {
//     show(2, function () {
//         show(3, function () {
//             show(4, function () {
//                 show(5, function () {

//                     return console.log("Sou o 5")
//                 })

//                 console.log("Sou o 4")
//             })
//             console.log("Sou o 3")
//         })

//         console.log("Sou o 2")
//     })
// console.log("Sou o 1")
// })

// Fazendo com Promises:

function calculate(number, lastResult) {

    return new Promise ((resolve, reject) => {

        setTimeout(function () {

            mult = number * 2
            final = mult + lastResult

            console.log(final)
            
            resolve(final)
            
        }, 1000, number, lastResult)

    })
}

calculate(1, 0).then((res) => { calculate(2, res)
.then((res) => { calculate(3, res)
.then((res) => { calculate(4, res)
.then((res) => { calculate(5, res) }) }) })})