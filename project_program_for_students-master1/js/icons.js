const iconsTitle = document.createElement('h1')
const icon = document.querySelector('.icons__inner')
iconsTitle.innerHTML = 'Icons with using fetch'
icon.before(iconsTitle)
const iconsShow = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    const outcome = (elem) => {
            elem.forEach(item => {
                    const iconItem = document.createElement('div')
                    iconItem.className = 'icons__inner__item'
                    icon.append(iconItem)
                    iconItem.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/3480/3480315.png" alt="">
                                           <span>${item.title}</span>
                                           <p>${item.body}</p>`

                }
            )
        }
        outcome(data)
}
iconsShow()