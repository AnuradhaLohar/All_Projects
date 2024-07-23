const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', check)
check()

function check(){
    const triggerbottom = window.innerHeight / 5 * 4
   
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerbottom) {

            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })


}