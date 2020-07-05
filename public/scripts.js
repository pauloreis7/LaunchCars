
const Mask = {
    apply(target, func) {

        setTimeout(function () {

            target.value = Mask[func](target.value)

        }, 1)
    },

    formatUSD (value) {

        value = value.replace(/\D/g, "")

        return value = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(value/100)
    },

    formatPercent(value) {

        value = value.replace(/\D/g, "")

        return new Intl.NumberFormat('en-US', {
            style: 'percent',
            minimumFractionDigits: 2,
            minimumIntegerDigits: 2,
            maximumSignificantDigits: 6
            
        }).format(value/10000)
    },

    formatCPF(value) {

       value = value.replace(/\D/g, "")

       value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3-\$4")

       return value
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
//     console.log("Sou o 1")
// })

// Fazendo com Promises / async await:

function calculate(number, lastResult) {

    return new Promise ((resolve, reject) => {

        setTimeout(function () {

            mult = number * 2
            final = Math.floor(mult + lastResult)

            console.log(final)
            
            resolve(final)
                        
        }, 1000, number, lastResult)

    })
}

// calculate(1, 0).then((res) => { calculate(2, res)
// .then((res) => { calculate(3, res)
// .then((res) => { calculate(4, res)
// .then((res) => { calculate(5, res) }) }) })})

async function results() {
    
    let result

    result = await calculate(1, 0) // 2

    result = await calculate(2, result)  // 6

    result = await calculate(3, result) // 12

    result = await calculate(4, result) // 20

    result = await calculate(5, result) // 30
}

// results()