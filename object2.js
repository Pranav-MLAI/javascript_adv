//singleton 

//const metaUser = new Object()

//Literals

const metaUser = {}

metaUser.id = "miki@123",
metaUser.password = "Djim@19838",
metaUser.isloggedIn = false,
metaUser.age = 24

//console.log(metaUser);

let Arr = [1,2,3,4,5,7,8,9]
let [a, , ,...rest] = Arr

//console.log(a,rest);

//spread opt
let num = [ 1,2,7,88,9]
let obj = {...num}


console.log(obj);