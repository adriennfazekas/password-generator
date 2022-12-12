const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let randomPasswordOne = document.getElementById("password-one")
let randomPasswordTwo = document.getElementById("password-two")

function randomPassword (a) {
    let password = ""
    for(let i = 0; i < 16; i++) {
        index = Math.floor(Math.random() * characters.length)
        index = characters[index]
        password += index        
    }
        a.textContent = password
}

function createRandomPassword () {
    clearPassword()
    passwordOne = randomPassword(randomPasswordOne)
    passwordTwo = randomPassword(randomPasswordTwo)
}

function clearPassword() {
    randomPasswordOne.textContent = ""
    randomPasswordTwo.textContent = ""
}

function copyPassword(index) {
    let text = document.getElementById(index).innerHTML;

    navigator.clipboard.writeText(text);
}




    