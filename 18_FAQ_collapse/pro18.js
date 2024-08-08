const toggle = document.querySelectorAll('.faq-toggle')

toggle.forEach(tog =>{
    tog.addEventListener('click',() => {
        tog.parentNode.classList.toggle('active')
    })
})

