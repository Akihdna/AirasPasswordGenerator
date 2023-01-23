let passwordLenght = document.getElementById("passwordLenght")
let password = document.getElementById("password")
let savebutton = document.getElementById("savebutton")

function generatePass(len) {
    const lowerAlphabet = "abcdefghijklmnopqrstuwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const nomer = "0123456789"
    const symbol = ".,@*!$-_=+#~"

    const data = lowerAlphabet + upperAlphabet + nomer + symbol
    let generator = '';
    for (let i = 0; i < len; i++) {
        generator += data[~~(Math.random() * data.length)];
    }
    return generator
}

function getPass() {
    const newPass = generatePass(passwordLenght.value)
    password.value = newPass
}

function savePass() {
    document.title = password.value
    savebutton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`Password: ${document.title}`))
    savebutton.setAttribute('Download', 'AirasPasswordGenerator.txt')
}