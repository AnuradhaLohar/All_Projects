const background = document.querySelector('.bg')
const loadingText = document.querySelector('.loading-text')

let load = 0;

let int = setInterval(blurring, 30)

function blurring(){
    load++

    if (load > 99) {
        clearInterval(int)
    }

    loadingText.innerText=`${load}%`

    loadingText.style.opacity = scale(load, 0, 100, 1, 0)
    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale =(num, in_min, in_max, out_min, out_max)=>{
    return((num - in_min)*(out_max - out_min))/(in_max - in_min) + out_min
}


      //  (50-0 )*(30-0)/(100-0)+30
      
      // 50 * -30 / 100 + 30
      // -1500 / 100 + 30
      //-15 + 30
      //15

