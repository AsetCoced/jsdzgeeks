// MODAL

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModal = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}
const exitModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}
closeModal.onclick = () => exitModal()
modalTrigger.addEventListener('click', () => {
    openModal()
})
modal.addEventListener('click', (event) => {
    if (event.target === modal){
        exitModal()
    }
})
function modalShow(){
    setTimeout(() => {
        openModal()
    }, 5000)
}
modalShow()


// function close(){
//     modal.style.display = 'none'
// }
// const openModal = () => {
//     modal.style.display = 'block'
//     document.body.style.overflow = 'hidden'
// }
// modalTrigger.addEventListener('click', () => {
//     openModal()
// })
// const exitModal = () => {
//     modal.style.display = 'none'
//     document.body.style.overflow = ''
// }
// closeModal.onclick = () => exitModal()
// document.body.onclick = (event) => event.target === modal && exitModal()
// function autoModal(){
//     const siu = setTimeout(() => {
//         openModal()
//     },10000)
//     modal.onclick = (event) => {
//         event.target === modal && exitModal()
//         clearInterval(siu)
//     }
// }
// autoModal()

function scrollAuto(){
    if ((window.scrollY +window.innerHeight) >= document.body.offsetHeight){
        openModal()
        window.removeEventListener('scroll' , scrollAuto)
    }
}
window.addEventListener('scroll' , scrollAuto)
