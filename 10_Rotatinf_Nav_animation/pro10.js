const opend = document.querySelector('#open')
const closed = document.querySelector('#close')
const containers= document.querySelector('.container')
const c2 = document.querySelector('.circle-container2')
const c=document.querySelector('.circle-container1')



opend.addEventListener('click',()=>{
    containers.classList.add('show-nav')
    c.classList.add('hide')
    c2.classList.remove('hide')
   
})

closed.addEventListener('click',()=>{
    containers.classList.remove('show-nav')
    console.log("clicked");
    c.classList.remove('hide')
    c2.classList.add('hide')

})