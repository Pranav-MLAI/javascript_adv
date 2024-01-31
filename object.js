// Objects

const mySym = Symbol("key1")

const JsUser = {
    Myname : "Miki",
    "full Name" : "miki meow",
    [mySym] : "key1",
    age : 3,
    hobby : "games",
    rollnum : 24
}

//console.log(JsUser["full Name"])
//Object.freeze(JsUser)
//JsUser.age = 9

console.log(JsUser)
