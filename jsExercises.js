// how much is true ?
// const countTrue = [false,false,true,false,true]

// var counttrues = 0
// for(let i = 0 ; i < countTrue.length ; i ++) {
//     if (countTrue[i] === true){
//         console.log(counttrues += countTrue[i])
//     }
// }
//  lets make this more coplex by creating first 5 random trues/falses
var resultstrue_false = []
function randomizeTrue_False () {    
    while (resultstrue_false.length < 5){
        resultstrue_false.push(Math.floor(Math.random() < 0.5))
        console.log("Array func array value :",resultstrue_false)
    } 
    var counttrues = 0
    for(let i = 0 ; i < resultstrue_false.length ; i ++) {
    if (resultstrue_false[i] === 1){
        console.log("how many trues :",counttrues += resultstrue_false[i])
    }
}
    return "done"
}

console.log(randomizeTrue_False())
