const API_URL = "https://api.github.com/users/";

const main = document.getElementById("main");
const searchBox = document.getElementById("search")
const form = document.getElementById("form")

const getUser = async (username) => {
    try {
        const response = await fetch(API_URL + username)
        const data = await response.json();
        const card = `
        <div class="card">
            <div>
                <img src="${data.avatar_url}" alt = "image" class = "avatar">
            </div>
            <div class = "user-info">
            <h2>${data.name}</h2>
            <p>${data.bio}</p>

            <ul class = "info">
            <li>${data.followers}<strong>Follwers</strong></li>
            <li>${data.following}<strong>Follwing</strong></li>
            <li>${data.public_repos}<strong>Repos</strong></li>
            </ul>

            <div id = "repo"></div>
            </div>
        </div>
        `

        main.innerHTML = card;
        getRepos(username);
        console.log(data);
    }catch (error) {
        console.log(error.response.status);
        if(error.response.status == 404) {
            createErrorCard('No profile with this username')
        }
    }
}


async function getRepos (username){
       try {
        const repos = document.getElementById("repo")
        const respone = await fetch(API_URL + username + '/repos')
        const data = await respone.json()
        console.log(data);
        data.map ((elem) => {
            const repo = document.createElement('a')
            repo.classList.add('repo')
            repo.href = elem.html_url
            repo.innerHTML = elem.name
            repo.target = '_blank'

            repos.appendChild(repo)

        }) 
       } catch (error) {
            createErrorCard('No profile with this username')
       }

    }


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = searchBox.value

    if(user){
        getUser(user)
        searchBox.value = ''
    }
})


function createErrorCard (msg) {
    const cardHtml = `
                    <div class = "card">
                    <h1>${msg}</h1>
                    </div>
    `

    main.innerHTML = cardHtml

}