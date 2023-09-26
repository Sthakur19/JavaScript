const myPromise = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        const numRandom = Math.floor(Math.random() * 10)
        if( numRandom > 5){
            resolve(`Sucress ${numRandom}`)
        }
        else{
            reject(`Unsucess ${numRandom}`)
        }
    }, 1000)

}).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})