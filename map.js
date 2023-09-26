// let arr = [45, 23, 34]
// let a = arr.map(
//     function(val){
//         return val * 2
//     }
// )
// console.log(a)

let arr = [45, 23, 34]

let a = arr.map((val, ind, array) =>
{
    // console.log(val, ind, array)
    return val + ind + 5
})

console.log(a)


// console.log("Print 1")
// setTimeout( ()=>{
//     console.log("print 2")
// }, 4000)

// console.log("print 3")

const newProm = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const randNumber = Math.floor(Math.random() * 10)
        if(randNumber < 5)
        {
            resolve(`sucess ${randNumber}`)
        }
        else{
            reject(`unsucess ${randNumber}`)
        }
    }, 3000)

}).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})

