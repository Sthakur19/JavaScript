let max_char = function(str){

    let obj = {}
    str.split("").forEach(element => {
        obj[element] = obj[element]?obj[element] + 1:1
        console.log(obj[element], element)
    });
    console.log(obj)


let max = 1;
let char = String[0]

for(let k in obj){
    if (obj[k] > max){
        max = obj[k]
        char = k
    }
}
return char;
}
const res = max_char("Hello Worldddd")

console.log(res)