const sun = document.querySelector('.bi-sun')
const moon = document.querySelector('.bi-moon')
const project = document.querySelectorAll('.project-link')

moon.addEventListener('click', () => {
    project.forEach(pro => {
        pro.style.backgroundColor = "black"
        pro.style.color = "white"
    }) 
    moon.style.display = "none"
    sun.style.display = "inline"
})

sun.addEventListener('click', () => {
    project.forEach(pro => {
        pro.style.backgroundColor = "white"
        pro.style.color = "black"
    }) 
    sun.style.display = "none"
    moon.style.display = "inline"
})