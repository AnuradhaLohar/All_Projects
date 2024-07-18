const randomcolor = function(){
    let hex = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]
        
    }

return color
}


let intervalId
const startchange =function(){
    if (!intervalId) {
        intervalId =   setInterval(bgColor,200)

    }

}

 function bgColor(){
    document.body.style.backgroundColor = randomcolor()
}

const stopchange= function(){
    clearInterval(intervalId)
    intervalId= null
}


document.querySelector('#start').addEventListener('click',startchange)

document.querySelector('#stop').addEventListener('click',stopchange)