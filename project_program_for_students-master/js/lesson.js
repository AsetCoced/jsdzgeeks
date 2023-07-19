const tabContent = document.querySelectorAll('.tab_content_block')
const itemContent = document.querySelectorAll('.tab_content_item')
const itemParent = document.querySelector('.tab_content_items')



function hideTab(){
    tabContent.forEach(item => {
        item.style.display = 'none'
    })
    itemContent.forEach(item =>{
        item.classList.remove('tab_content_item_active')
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
        itemContent.forEach((item, itemIndex) => {
            if (event.target === item){
                hideTab()
                openTab(itemIndex)
            }
        })
    }
})
function showAuto(){
    let i = 0;
    setInterval(() => {
        if (i === 5) {
            i = 0;
        }
        hideTab()
        openTab(i)
        i++
    }, 3000)
}
showAuto()




