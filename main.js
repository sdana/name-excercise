// Exercise: Using Javascript, create a variable to hold your last name. Then, if your last name has 7 or more letters, console log "I can't pronounce this last name". If your last name has less than 7 characters, console log your last name.
// Challenge: Create a new repository on Github and push the code your wrote up to Github.

let lastName = ["D","a","n","a"]

if (lastName.length < 7){
    let nameCat = ""
    for (let i in lastName){
            nameCat += lastName[i]
        }
    console.log(nameCat)
}
else {
    console.log("I can't pronounce this last name")
}