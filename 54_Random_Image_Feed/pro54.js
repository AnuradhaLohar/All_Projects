const container = document.querySelector('.container')
const rows = 5;

function createImage() {
    for (let i = 0; i < rows * 8; i++) {
        const img = document.createElement('img')
        const randomseed = Math.floor(Math.random() * 1000)
        const url = `https://picsum.photos/id/${randomseed}/500/600`;
        img.src = url

        container.appendChild(img)

    }


}
createImage()


