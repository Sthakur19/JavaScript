let person = {
    firstName : "swati",
    lastName : "thakur",
}

let fullname = function(hometwon, country){
    console.log(this.firstName + " " + this.lastName + " from " + hometwon + " , " + country)
}

fullname.call(person, "CG", "India")

let person2 = {
    firstName : "sneha",
    lastName : "thakur"
}

fullname.call(person2, "MP", "Ind")

fullname.apply(person2, ["MP", "Ind"])

let printFullName =  fullname.bind(person2, "MP", "Ind")

printFullName()