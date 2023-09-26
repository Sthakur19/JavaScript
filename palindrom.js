// let palindrom = function(str){
//     let arr = str.split("")
//     arr.reverse()
//     let str1 = arr.join("")
//     if(str===str1){
//         console.log("Its palindrom")
//     }
//     else{
//         console.log("Its not")
//     }
// }

// palindrom("abba")

// let palindrom1 = (str)=>{
//     let ispalindrom = str.split("").reverse().join("")
//     console.log(str===ispalindrom)
// }
// palindrom1("abba")


let palindrom2 = (str) =>{
    newString = ""
    for(var i = str.length - 1; i >= 0; i--){
        newString += str[i]
    }
    if(newString == str){
        console.log("hey its palindorm")
    }
    else{
        console.log("Hey its not")
    }

}
palindrom2("wwwww")

