const leftside = document.querySelector('.left')
const rightside = document.querySelector('.right')
const contain= document.querySelector('.container')

leftside.addEventListener('mouseenter',()=>{
    contain.classList.add('hover-left')
})

leftside.addEventListener('mouseleave',()=>{
    contain.classList.remove('hover-left')
})

rightside.addEventListener('mouseenter',()=>{
    contain.classList.add('hover-right')
})

rightside.addEventListener('mouseleave',()=>{
    contain.classList.remove('hover-right')
})