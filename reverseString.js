let reverseString = (str) =>{
    let arr = str.split("")
    arr.reverse()
    str = arr.join("")
    console.log(str)
}
reverseString("swati")


function reverseString_method1(str){
    newString =""
    for(var i =  str.length - 1 ; i >=0; i--){
        newString += str[i] 
    }
    console.log(newString)
}
reverseString_method1("hello")


