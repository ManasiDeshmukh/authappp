
const jwt=require('jsonwebtoken')
const doc={
    "username":"xyz",
    "password":"123"
}
const SECRET="XXAA983920"
const token=jwt.sign(doc,SECRET)
console.log(token)
const authres=jwt.verify(token,SECRET)
console.log(authres)



