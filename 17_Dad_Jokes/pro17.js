const jokes = document.getElementById('joke')
const jokeBtn = document.getElementById('joketn')

jokeBtn.addEventListener('click', genaratejoke)

genaratejoke()

async function genaratejoke(){
    const config = {
        headers:{
            Accept:'application/json'
        },
    }

    const res = await   fetch('https://icanhazdadjoke.com',config)

    const data = await res.json()

    jokes.innerHTML = data.joke

}