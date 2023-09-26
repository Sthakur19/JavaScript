let anagram = function(str1, str2){
    let a1 = str1.split("").sort().join();
    let a2 = str2.split("").sort().join();
    if(a1 === a2){
        console.log("its anagram")
    }
    else{
        console.log("its not anagram")
    }
}

anagram("brag", "agrb")



