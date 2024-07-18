const clock = document.querySelector('#clock')

setInterval( function(){
    let date = new Date();
    clock.textContent = date.toLocaleTimeString()
    //console.log(date.toLocaleTimeString());
},1000 );