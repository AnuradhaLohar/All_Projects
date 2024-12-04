const resetBtn = document.querySelector('#reset')
const playBtn = document.querySelector('#play')
const timeEl = document.querySelector('#timer')
const root = document.querySelector(':root')

const totalSeconds = 60;
let playing = false;
let currentSeconds = totalSeconds;

timeEl.innerText = formatTime(totalSeconds)

const timerInterval = setInterval(run, 1000);

playBtn.addEventListener('click', () => {
    playing = !playing;
    playBtn.classList.toggle('play')
    playBtn.classList.toggle('custom-bg')
    const playIcon = playBtn.querySelector('i')
    playIcon.classList.toggle('fa-pause')
    playIcon.classList.toggle('fa-play')
    
})

resetBtn.addEventListener('click', resetAll)

function run() {
    if(playing){
        currentSeconds -= 1;
        if (currentSeconds <= 0) {
            resetAll()
            clearInterval(timerInterval);
        }
    }
    timeEl.innerText = formatTime(currentSeconds);

    root.style.setProperty('--degrees', calcDeg())
}

function formatTime(seconds) {
    let minute = Math.floor(seconds / 60);
    let newSeconds = seconds % 60;

    return `${minute.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`

}

function calcDeg() {
    return  `${360 - (currentSeconds / totalSeconds) * 360}deg`
}

function resetAll() {
    playing = false
    playBtn.classList.remove('play')
    playBtn.classList.remove('custom-bg')
    const playIcon = playBtn.querySelector('i')
    playIcon.classList.remove('fa-pause')
    playIcon.classList.add('fa-play')

    currentSeconds = totalSeconds;
    // timeEl.innerHTML = formatTime(totalSeconds)

    // root.style.setProperty('--degrees', '0deg')
}

