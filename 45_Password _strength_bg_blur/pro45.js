const background = document.querySelector('#background')
const password = document.querySelector('#password')

password.addEventListener('input', (e) => {
    const input = e.target.value
    const pixles = 20 - input.length * 2
    console.log(pixles);
    
    background.style.filter = `blur(${pixles}px)`
})