let changeObj = {'check 1' : 'a', 'check 2' : 'b' , 'check 3' : 'c', length : 3 }

// let chnagedarray = Array.from(changeObj)

// console.log(chnagedarray)

console.log(changeObj['check 1'])

let arr = []
for(let i in changeObj){
    arr.push(changeObj[i])
}
console.log(arr)