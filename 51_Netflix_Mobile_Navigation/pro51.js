 const close_Btn = document.querySelector('.close-btn')
 const open_Btn = document.querySelector('.open-btn')
 const nav = document.querySelectorAll('.nav')


close_Btn.addEventListener('click', () => {
   nav.forEach(navel => {
        navel.classList.remove('visible')
   })
}) 

open_Btn.addEventListener('click', () => {
    
    nav.forEach(navel => {
        navel.classList.add('visible')
   })
   
})