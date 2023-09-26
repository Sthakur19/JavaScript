let arr  = [3, 5, 6]
let [a, b, c] = arr

console.log(a, b, c)

let arr1 = [1, 2, 3, 4]
let obj1 = {...arr1}

console.log(obj1)

let sum = (v1, v2, v3) => { return v1 + v2 + v3 }

console.log(sum(...arr1))