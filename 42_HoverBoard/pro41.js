const container = document.getElementById('container')
const SQUARE = 500

let col= ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

for (let i = 0; i < SQUARE ;i++) {
    
const sqr = document.createElement("div")
sqr.classList.add('square')
container.appendChild(sqr)
    
sqr.addEventListener('mouseover', () => {
    let colors = "#"
    for (let i = 0; i < 6; i++) {
            colors += col[Math.floor(Math.random() * col.length)]
    }
    sqr.style.background = colors
    sqr.style.boxShadow = `0 0 2px ${colors}, 0 0 10px ${colors}`
})

sqr.addEventListener('mouseout', () => {
    sqr.style.background = 'rgb(30, 30, 30)'
    sqr.style.boxShadow = `0 0 2px rgb(30, 30, 30), 0 0 10px rgb(30, 30, 30)`
})
}