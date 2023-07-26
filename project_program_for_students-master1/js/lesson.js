const tabContent = document.querySelectorAll('.tab_content_block')
const itemContent = document.querySelectorAll('.tab_content_item')
const itemParent = document.querySelector('.tab_content_items')
function hideTab(){
    // for (i = 0; i < tabContent.length; i++){
    //     tabContent[i].style.display = 'none'
    // }
    tabContent.forEach(i => {
        i.style.display = 'none'
    })
    itemContent.forEach(i => {
        i.classList.remove('tab_content_item_active')
    })
}
hideTab()
function openTab(index = 0){
    tabContent[index].style.display = 'block'
    itemContent[index].classList.add('tab_content_item_active')
}
openTab()

itemParent.addEventListener('click', (event) => {
    if (event.target.classList.contains('tab_content_item')){
        itemContent.forEach((item,itemIndex) => {
            if (event.target === item){
                hideTab()
                openTab(itemIndex)
            }
        })
    }
})
// })
// itemParent.addEventListener('click', (event) => {
//     if (event.target.classList.contains('tab_content_item')){
//         for (i = 0; i < itemContent.length; i++){
//             if (event.target.className === 'tab_content_item'){
//                 hideTab()
//                 openTab(i)
//             }
//         }
//     }
// })


// function showAuto(){
//     let i = 0;
//     setInterval(() => {
//         if (i === tabContent.length){
//             i = 0
//         }
//         hideTab()
//         openTab(i)
//         i++
//     },1000)
// }
// showAuto()
// function hideTab(){
//     tabContent.forEach(item => {
//         item.style.display = 'none'
//     })
//     itemContent.forEach(item =>{
//         item.classList.remove('tab_content_item_active')
//     })
// }
// hideTab()
// function openTab(index = 0){
//     tabContent[index].style.display = 'block'
//     itemContent[index].classList.add('tab_content_item_active')
// }
// openTab()
// itemParent.addEventListener('click', (event) => {
//     if (event.target.classList.contains('tab_content_item')){
//         itemContent.forEach((item, itemIndex) => {
//             if (event.target === item){
//                 hideTab()
//                 openTab(itemIndex)
//             }
//         })
//     }
// })
// // function showAuto(){
// //     let i = 0;
// //     setInterval(() => {
// //         if(i === itemContent.length){
// //             i = 0
// //         }
// //         hideTab()
// //         openTab(i)
// //         i++
// //     }, 3000)
// // }
// // showAuto()
//
// function showAuto(){
//     let i = 0;
//     setInterval(() => {
//         hideTab()
//         openTab(i)
//         i++
//         if (i === itemContent.length){
//             i = 0;
//         }
//     },3000)
// }
// showAuto()
//
//
// function calc(...num) {
//     const siu = []
//     for (i = 0; i < num.length; i++) {
//         let sum = num[i] / num.length
//         siu.push(sum)
//     }
//     return siu
// }
//
// console.log(calc(2,412,3213,2))

const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')
// som.addEventListener('input', () => {
//     const requer = new  XMLHttpRequest()
//     requer.open("GET", "../ttt.json")
//     requer.setRequestHeader("Content-type", "application/json")
//     requer.send()
//     requer.addEventListener('load', () => {
//         const response = JSON.parse(requer.response)
//         usd.value = (som.value/response.usd).toFixed(2)
//     })
// })
const convent = (elem,target,anoTarget,isTrue, elementAno) => {
    elem.oninput = () => {
        const requer = new  XMLHttpRequest()
        requer.open("GET", "../ttt.json")
        requer.setRequestHeader("Content-type", "application/json")
        requer.send()
        requer.onload = () => {
            const response = JSON.parse(requer.response)
            if (isTrue && elementAno === 'usd'){
                target.value = (elem.value / response.usd).toFixed(2)
                anoTarget.value = (elem.value / response.euro).toFixed(2)
            }else if (isTrue && elementAno === 'euro') {
                target.value = (elem.value * response.usd).toFixed(2)
                anoTarget.value = (elem.value * response.euro).toFixed(2)
            }else if (!isTrue && elementAno === 'usd'){
                target.value = (elem.value * response.usd).toFixed(2)
                anoTarget.value = (elem.value / response.euro).toFixed(2)
            }else if (!isTrue && elementAno === 'euro'){
                target.value = (elem.value / (response.usd / response.euro)).toFixed(2)
                anoTarget.value = (elem.value * response.euro).toFixed(2)
            }
            if (elem.value === ''){
                target.value = ''
                anoTarget.value = ''
            }
        }
    }
}
convent(som, usd, euro, true, "usd")
convent(usd, som,euro, false, "usd")
convent(euro, usd,som, false, "euro")





// const convent = (elem,target,anoTarget,elementAno,isTrue) => {
//     elem.oninput = () => {
//         const requer = new  XMLHttpRequest()
//         requer.open("GET", "../ttt.json")
//         requer.setRequestHeader("Content-type", "application/json")
//         requer.send()
//         requer.onload = () => {
//             const response = JSON.parse(requer.response)
//             if (isTrue){
//                 target.value = (elem.value / response.usd).toFixed(2)
//             }else {
//                 target.value = (elem.value * response.usd).toFixed(2)
//             }
//             if (isTrue){
//                 anoTarget.value = (elem.value / response.euro)
//             }else {
//                 anoTarget.value = (elem.value * response.euro)
//             }
//             if (elem.value === ''){
//                 target.value = ''
//             }
//         }
//     }
// }
// convent(som, usd, euro, true)
// convent(euro, som, usd, true)
// convent(usd, som, false)