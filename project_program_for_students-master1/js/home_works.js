const myInput = document.querySelector('#gmail_input')
const myButton = document.querySelector('#gmail_button')
const result = document.querySelector('.checker')
const regExp = /\w@gmail.com$/
myButton.addEventListener('click', () => {
    if (regExp.test(myInput.value)){
        result.innerHTML = 'ok'
        result.style.color = 'green'
    }else{
        result.innerHTML = 'not ok'
        result.style.color = 'red'
    }
})

const childbox = document.querySelector('.child_block')
let positionX = 0
let positionY = 0
function moveChildbox(){
    if (positionX < 449 && positionY === 0){
        positionX++
        childbox.style.left = `${positionX}px`
        setTimeout(moveChildbox, 1)
    }else if (positionX >= 449 && positionY < 449 ) {
        positionY++
        childbox.style.top = `${positionY}px`
        setTimeout(moveChildbox, 1)
    }else if (positionX > 0 && positionY >= 449) {
        positionX--
        childbox.style.left = `${positionX}px`
        setTimeout(moveChildbox, 1)
    }else if (positionY > 0 && positionX >= 0){
        positionY--
        childbox.style.top = `${positionY}px`
        setTimeout(moveChildbox, 1)
    }
}
moveChildbox()







const myBton = document.querySelector('#start')
const myBtonStop = document.querySelector('#stop')
const myBtonReset = document.querySelector('#reset')
const myBtonResume = document.querySelector('#resume')
const seconds = document.querySelector('#seconds')
let myInterval;
let myInterval2;
function myFunc() {
    seconds.innerHTML ++
    if (seconds.innerHTML > 60){
        seconds.innerHTML = 0
    }else if (seconds.innerHTML < 10){
        seconds.innerHTML = '0' + seconds.innerHTML
    }
}
myBton.addEventListener('click', () => {
    clearInterval(myInterval)
    myInterval = setInterval(myFunc, 1000)
    // if (!myInterval){
    //     myInterval  = setInterval(myFunc, 1000)
    // }
})
myBtonStop.addEventListener('click', () =>{
    clearInterval(myInterval)
    clearInterval(myInterval2)
})
myBtonReset.addEventListener('click', () => {
    clearInterval(myInterval2)
    myInterval2  = setInterval(myFunc, 1000)
    // if (!myInterval2){
    //     myInterval2  = setInterval(myFunc, 1000)
    // }
})
myBtonResume.addEventListener('click', () => {
    seconds.innerHTML = '00'
    clearInterval(myInterval)
    clearInterval(myInterval2)
})
