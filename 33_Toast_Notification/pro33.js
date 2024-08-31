const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const meassages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
 ]

 const  types = ['info', 'success', 'error']

 button.addEventListener('click', () => createNofification())

 function createNofification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())

    notif.innerHTML = message ? message : getRandomMeassges()

    toasts.appendChild(notif)


    setTimeout (() => {

        notif.remove()
    }, 3000)


    
 }

 function getRandomType () {
    return types[Math.floor(Math.random() * types.length)]
 }

 function getRandomMeassges () {
    return meassages[Math.floor(Math.random() * meassages.length)]
 }