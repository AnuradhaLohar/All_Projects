const range = document.querySelector('#range')
const lbl = document.querySelector('#lbl')

range.addEventListener('input', (e) => {
    const value  = e.target.value
    
    lbl.innerHTML = `${value}`

    const max = e.target.max
    const min = e.target.min
    const percentage = (value - min) / (max - min)

    const silderWidth = e.target.offsetWidth
    const labelWidth = lbl.offsetWidth
    const final = percentage * (silderWidth - labelWidth)

    lbl.style.left = `${final}px`


    


})