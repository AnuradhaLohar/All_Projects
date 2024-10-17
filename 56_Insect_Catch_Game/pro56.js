const screens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn')
const times = document.querySelector('.time')
const gameContainer = document.querySelector('.game-container')
const scoreEl =document.querySelector('#score')

let seconds = 0
let score = 0
let selected_insects = {}

start_btn.addEventListener('click', () => screens[0].classList.add('up'))

choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        let img = btn.querySelector('img')
        let src = img.getAttribute('src')
        let alt = img.getAttribute('alt')
        selected_insects = {src, alt}
        screens[1].classList.add('up')
        startGame()
        createInsects()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    times.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createInsects() {
    const insect = document.createElement('div')
    insect.classList.add('insect')

    insect.innerHTML = `<img src="${selected_insects.src}" alt="${selected_insects.alt}" style="transform:rotate(${Math.random() * 360}deg)" />`
    
    const {x, y} = getRandomLocation()

    insect.style.top = `${y}px`
    insect.style.left = `${x}px`

    gameContainer.appendChild(insect)
    insect.addEventListener('click', catchInsect)
 
}

function getRandomLocation() {
    let width =window.innerWidth 
    let height = window.innerHeight

    let x = Math.random() * (width - 200) + 100
    let y = Math.random() * (height - 200) + 100

    return{x, y}
}


function catchInsect() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addInsect()
}

function addInsect() {
    setTimeout(createInsects, 1000)
    setTimeout(createInsects, 1500)
}

function increaseScore() {
    score++
    scoreEl.innerHTML = `Score: ${score}`

}