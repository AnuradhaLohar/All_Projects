const progress = document.querySelector('#progress')
const circles = document.querySelectorAll('.circle')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let currectAcitive = 1

next.addEventListener('click',()=>{

    currectAcitive++

    if (currectAcitive > circles.length){
        currectAcitive = circles.length
        
    }
    update()
})

prev.addEventListener('click',()=>{

     currectAcitive--

     if (currectAcitive < 1){
        currectAcitive = 1
     }
        
     update()
     

})

function update(){
    circles.forEach((value,index) => {
       
        if (index < currectAcitive) {
            value.classList.add('active')

        } else {
            value.classList.remove('active')
        }
  
      
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'



    if (currectAcitive === 1) {

        prev.disabled = true
    } else if (currectAcitive === circles.length){
        next.disabled = true
        
    }else{
        prev.disabled = false
        next.disabled = false
    }

}