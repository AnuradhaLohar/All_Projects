const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

filter.addEventListener('input', (e) => {
    filterData(e.target.value)
})

async function getData() {
    const API = `https://randomuser.me/api/?results=50&nat=IN`
    const res = await fetch(API)
    const {results} = await res.json()

    result.innerHTML= ''

    results.forEach(data => {

        const user = document.createElement("li")

        listItems.push(user)

        user.innerHTML = `
             <img src = "${data.picture.large}">
             <div class="user-info">
                <h3>${data.name.first} ${data.name.last}</h3>
                <p>${data.location.state} ${data.location.country}</p>
             </div>
         `
         result.appendChild(user)
     
    })
}

function filterData(searchTerm) {
    listItems.forEach((item) => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}