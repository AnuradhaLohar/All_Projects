const searchDiv = document.querySelector('.search')
const btn1 = document.querySelector('.btn')

btn1.addEventListener('click',()=>{
    searchDiv.classList.toggle('active')
    console.log("clicked");
})