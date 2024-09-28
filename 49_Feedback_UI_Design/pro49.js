const ratings = document.querySelectorAll('.rating')
const submitBtn = document.querySelector('.btn')
const panel =document.querySelector('#panel')
let selectedRating = ''

ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        for (let i = 0; i < ratings.length; i++) {
             ratings[i].classList.remove('active')  
        }
        rating.classList.add('active')

        const smallContent = rating.querySelector('.rating small')
         selectedRating = smallContent.textContent

    })
})


submitBtn.addEventListener('click' ,() => {
    console.log(selectedRating);

    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback : ${selectedRating}</strong>
        <p style="font-size:18px; font-family:'Montserrat', sans-serif; ">We'll use your feedback to improve our customer support</p>
    `
    
})

