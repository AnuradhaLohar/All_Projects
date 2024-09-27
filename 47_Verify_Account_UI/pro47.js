// let codes = document.querySelectorAll('.code')
// const btnSend = document.querySelector('.btn-submit')
// const verifyBtn = document.querySelector('#verify-otp')

// let generateedOTP = createOTP()
// let items = [];
// let preocessedItems = ''

// function createOTP() {
//     let myOTP = ''
//     for (let i = 0; i < 6; i++) {
//         myOTP += Math.floor(Math.random() * 10)
//     }
//     console.log(myOTP);
//     return myOTP
// }


// btnSend.addEventListener('click', (e) => {
//     e.preventDefault()
//     createEmail()
// })

// function createEmail() {
//     const email = document.querySelector('.email').value
//     const subject = encodeURIComponent("OTP Code")
//     const body = encodeURIComponent(`Your OTP is : ${generateedOTP}`)
//     const Url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`

//     window.open(Url, '_blank')
// }


// codes[0].focus()

// codes.forEach((code, idx) => {
//     code.addEventListener('keydown', (e) => {

//         if (e.key >= 0 && e.key <= 9) {
//             codes[idx].value = ''
//             setTimeout(() => {
//                 codes[idx + 1].focus()
//             }, 10)
//         } else if (e.key === 'Backspace') {
//             setTimeout(() => {
//                 codes[idx - 1].focus()
//             }, 10)
//         }
//     })
// })

// codes.forEach((code) => {
//     code.addEventListener('input', () => {
//         items = []
//         codes.forEach((input) => {


//             if (input.value) {
//                 items.push(input.value)
//             }

//             if (items.length === codes.length) {
//                 console.log(items);
//                 preocessedItems = handleItems(items)
//             }
//         })
//     })
// })

// function handleItems(val1) {
//    return val1.join('')
// }


// verifyBtn.addEventListener('click', () => {
//    if (preocessedItems === generateedOTP ) {

//    const Msg =  document.createElement('div')
//     Msg.innerHTML = `
//         <h1 class="succ" >Verification Successfully....</h1>
        
//     `
    
//     Msg.classList.add('popup')
//     document.body.appendChild(Msg)

//     setTimeout(() => {
//         document.body.removeChild(Msg)
//     }, 2200)


//    } else {

//     const Msg=  document.createElement('div')
//     Msg.innerHTML = `
//         <h1 class="fail">Verification Failed....</h1>
//     `
//     Msg.classList.add('popup')
//     document.body.appendChild(Msg)

//     setTimeout(() => {
//         document.body.removeChild(Msg)
//     }, 2200)

//    }
// })






// let codes = document.querySelectorAll('.code')
// const submitBtn = document.querySelector('.btn-submit')
// const verifyBtn = document.querySelector('#verify-otp')

// let items = []
// let genaratedOTP = createOTP()
// let processedItems = ''

// function createOTP() {
//     let myOTP = ''
//     for (let i = 0; i < 6; i++) {
//         myOTP += Math.floor(Math.random() * 10)
//     }
//     console.log(myOTP);
//     return myOTP

// }

// submitBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     createEmail()

// })

// function createEmail() {
//     const email = document.querySelector('.email').value
//     const subject = encodeURIComponent("Your OTP Code")
//     const body = encodeURIComponent(`your OTP is : ${genaratedOTP}`)
//     const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`

//     window.open(url, '_blank')
// }

// codes[0].focus()

// codes.forEach((code, idx) => {
//     code.addEventListener('keydown', (e) => {

//         if (e.key >= 0 && e.key <= 9) {
//             codes[idx].value = ''
//             setTimeout(() => {
//                 codes[idx + 1].focus()
//             }, 10)

//         } else if (e.key === 'Backspace') {

//             setTimeout(() => {
//                 codes[idx - 1].focus()
//             }, 10)
//         }
//     })
// })

// codes.forEach((input) => {
//     input.addEventListener('input', () => {
//         items = []

//         codes.forEach((input) => {

//             if (input.value) {
//                 items.push(input.value)
//             }

//             if (items.length === codes.length) {
//                 console.log(items);
//                 processedItems = handleItems(items)

//             }

//         })
//     })
// })

// function handleItems(val1) {
//     return val1.join('')
// }

// verifyBtn.addEventListener('click', () => {
//     if (processedItems === genaratedOTP) {

//         const Msg = document.createElement('div')


//         Msg.innerHTML = `
//             <h1 class="succ">Verification Successfully...</h1>
//             `
//             Msg.classList.add('popup')
//             document.body.appendChild(Msg)

//             setTimeout(() => {
//                 document.body.removeChild(Msg)
//             },2200)

//     } else {
//         const Msg = document.createElement('div')

//         Msg.innerHTML = `
//         <h1 class="fail">Verification Failed...</h1>
//         `
//         Msg.classList.add('popup')
//         document.body.appendChild(Msg)

//         setTimeout(() => {
//             document.body.removeChild(Msg)
//         },2200)

//     }


// })



let codes = document.querySelectorAll('.code')
const submiteBtn = document.querySelector('.btn-submit') 
const verifyBtn = document.querySelector('#verify-otp')

let genaratedOTP = createOTP()
let processedItems = ''
let items = []

function createOTP() {
    let myOTP = ''
    for(let i = 0; i < 6; i++){
        myOTP += Math.floor(Math.random() * 10)
    }
    console.log(myOTP);
    return myOTP
}

submiteBtn.addEventListener('click', (e) => {
    e.preventDefault()
    createEmail()
})

function createEmail() {
    const email = document.querySelector('email')
    const subject = encodeURIComponent("Your OTP Code")
    const  body = encodeURIComponent(`Your OTP is : ${genaratedOTP}`)
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`
    window.open(url, '_blank')
}

codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {

        if (e.key >= 0 && e.key <= 9) {
            codes[idx].value = ''
            setTimeout(() => {
                codes[idx + 1].focus()
            },10)
        } else if(e.key === 'Backspace'){
            setTimeout(() => {
                codes[idx - 1].focus()
            },10)
        }
    })
})

codes.forEach((input) => {
    input.addEventListener('input', () => {
        items = []
        codes.forEach((input) => {

            if (input.value) {
                items.push(input.value)
            }
            if (items.length === codes.length) {
            processedItems = handleItems(items)            
            }
        })

        
    })
})

function handleItems(val1) {
   return val1.join();
}

verifyBtn.addEventListener('click', () => {
    if (processedItems === genaratedOTP) {
        
       const Msg = document.createElement('div')

        Msg.innerHTML = `
            <h1 class="succ">Verification Successfully...</h1>
        `

        Msg.classList.add('popup')
        document.body.appendChild(Msg)

        setTimeout(() => {
            document.body.removeChild(Msg)
        },2200)
    } else {
        const Msg = document.createElement('div')
        Msg.innerHTML = `
            <h1 class="fail">Verification Failed...</h1>
        `
        Msg.classList.add('popup')
        document.body.appendChild(Msg)
        
        setTimeout(() => {
            document.body.removeChild(Msg)
        },2200)
    }
})

