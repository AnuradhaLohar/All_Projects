const contents = document.querySelectorAll('.content')
const tabs = document.querySelectorAll('nav ul li')
console.log(contents);
tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
        hidetab()
        hideimgs()
        tab.classList.add('active')
        contents[idx].classList.add('show')
    })
})

function hidetab(){
  tabs.forEach(tab =>{
    tab.classList.remove('active')
  })

}

function hideimgs(){
   contents.forEach(item => {
    item.classList.remove('show')
   })
}