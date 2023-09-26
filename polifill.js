Array.prototype.show = function(){
    let newObj = {}
    this.forEach( ele=>{
         newObj[ele] = ele
    })
    return newObj
 }
 
 const city = ["Raipur"]
 
 console.log(city.show())