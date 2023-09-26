let arr  = [1,2,3]

// let arr1 = arr.map((el)=>{
//     return el + 2
// })

// console.log(arr1)

arr.forEach((el, i , arr)=>{
    return arr[i] = el + 2
})

console.log(arr)

let person = {
    firstName : 'Swati',
    lastName : 'Thakur' 
}

let fullName = function(city, state){
    console.log(`${this.firstName} ${this.lastName} ${city} ${state}`)
}

fullName.apply(person, ['Raipur', 'CG'])

let fullNameBind = fullName.bind(person, 'Raipur', 'CG')
console.log(fullNameBind())

// let person1 = {
//     firstName : 'Sneha',
//     lastName : 'Thakur' 
// }

// fullName.call(person1)

// setInterval(()=>{
// console.log("Hi");
// }, 3000)


let palindrom = function(str){

    let str1 = ""
    for(let i = str.length - 1; i >= 0;  i--){
        str1 += str[i] 
    }
    console.log(str1)
    let result = str === str1 ? true : false
    console.log(result)
}

palindrom('abba')


let person_1 = {
    firstName : "swati"
}

let person2 = {...person_1}

person2.firstName = 'sneha'

console.log("copy",person_1.firstName)

// sum(1)(2)(3)


// function sum(a,b,c){
//     return a+b+c
// }

// console.log(sum(1,2,3))

function sum(a){
    return function(b){
        return function(c)
        {
            return a+b+c
        }
    }
}

console.log(sum(1)(2)(3))


let arrNumber = [1,2,3,4,1,2];

let filduplicate1 = arrNumber.filter((val, index, arr)=>{
    return arr.indexOf(val) !== index
})

console.log(filduplicate1)

const pers1 ={
    name:"swati",
    getName:function(){
        return this.name
    }

}

const comp ={
    company:"wipro",
    __proto__:pers1
}

console.log(comp.getName())


