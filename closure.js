function outermost(c){
function outer(b){
    console.log("Check")
    function inner(){
        console.log(a, b, c)
    }
    let a = 10
    return inner
}
return outer
}
outermost("Check C")("Check B")()


