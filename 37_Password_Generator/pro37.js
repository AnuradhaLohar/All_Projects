const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('number')
const symbolsEl= document.getElementById('symbols')
const genrateEl= document.getElementById('genrate')
const clipboardEl= document.getElementById('clipboard')


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    const password = resultEl.innerHTML;
    if(!password){
        return;
    }
    Navigator.clipboard.writeText(password)
    alert('password copied to clipboard')
})

genrateEl.addEventListener('click', () => {
    const length =+lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = gereratePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function gereratePassword(lower, upper, number, symbol, length) {
    let gereratePassword = ''
    const typesCount = lower + upper + number + symbol
    const typeArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])

    if(typesCount === 0) {
        return ''
    }

    for (let i = 0; i < length; i+= typesCount) {
        typeArr.forEach(type => {
           const funcName = Object.keys(type)[0] 
           gereratePassword += Object.keys(type)[0]
        })
       
    }

    const finalpassword = gereratePassword.slice(0,length)

    return finalpassword
}

function getRandomLower() {
    return string.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return string.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return string.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>?,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}









