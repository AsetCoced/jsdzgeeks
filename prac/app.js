// let chai = 'chai is good'
// let coffe = 'coffe is not good'
// let milk = 'milk is better'
// const btn1 = document.querySelector('.menu__item1')
// const btn2 = document.querySelector('.menu__item2')
// const btn3 = document.querySelector('.menu__item3')
// switch (chai){
//     case chai:
//         btn1.addEventListener('click', () => alert(chai))
//         break
//     case coffe:
//         btn2.addEventListener('click', () => alert(coffe))
//         break
//     case milk:
//         btn3.addEventListener('click', () => alert(milk))
//         break
// }
// const mass = ["Bishkek", "Los Angeles", "Chicago", "New York", "Houston", "Dallas", "Philadelphia", "Seattle"];
// const sss = []
// const siu = []
// for (let i = 0; i < mass.length; i++){
//     if (mass[i].toLowerCase().includes('s')){
//         sss.push(mass[i])
//     }
// }
// console.log(sss)
// for (let y = 0; y < mass.length; y++){
//     if (mass[y][6]) {
//         siu.push(mass[y])
//     }
// }
// console.log(siu)
// for (let y = 0; y < mass.length; y++){
//     console.log(mass[y][0])
// }



// console.log(sss)
// const mass = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
// const liSiu = []
// const hOne = []
// const divv = []
// const brr = []
// const oll = []
// const pi = []
//
// mass.forEach(i => {
//     if (i === 'li'){
//         liSiu.push(i)
//     }
// })
// console.log(liSiu.length)


// for (i = 0; i < mass.length; i++){
//     if (mass[i] === 'h1'){
//         hOne.push(mass[i])
//     }else if (mass[i] === 'li'){
//         liSiu.push(mass[i])
//     }else if (mass[i] === 'div'){
//         divv.push(mass[i])
//     }else if (mass[i] === 'p'){
//         pi.push(mass[i])
//     }else if (mass[i] === 'ol'){
//         oll.push(mass[i])
//     }else if (mass[i] === 'br'){
//         brr.push(mass[i])
//     }
// }
// console.log(hOne.length)
// console.log(liSiu.length)
// console.log(divv.length)
// console.log(pi.length)
// console.log(oll.length)
// console.log(brr.length)


// var arr = [10, 20, 30, 50, 235, 3000];
// const siu = []
// arr = String (arr);
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i][0] === 1 || arr[i][0] === 2 || arr[i][0] === 5) {
//         siu.push(arr[i])
//     }
// }



// var monthNames = [1223,12,23,12];
// var myVar = monthNames.toString(); // присваивает 'Янв,Фев,Мар,Апр' переменной myVar.
// myVar = Number(myVar)
// console.log(myVar)





// let arr = [10, 20, 30, 50, 235, 3000, 5000, 67, 77, 88];
// console.log(arr.filter(num => ['1','2','0'].includes(num.toString()[1])));


// const text = 'Never forget what you are, for surely the world will not';
//
// // BEGIN
// console.log(`First: ${text[0]}\nLast: ${text[text.length - 1]}`);
// let text = prompt();
// switch (text){
//     case 'зеленый':
//         alert('Lets go!');
//         break;
//     case 'красный':
//         alert('stop');
//         break;
//     case 'желтый':
//         alert('get ready');
//         break
//     default: alert('no conceptions')
// }
const obj = {
    name:'siuu',
    age:12
}
const siu = JSON.stringify(obj)
const siu2 = JSON.parse(siu)
const wrapper = document.querySelector('.wrapper')
console.log(siu)
console.log(siu2)
const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    const rerquest = new XMLHttpRequest()// 1.создание запроса
    rerquest.open("GET","item.json") // 2. объявление метода запроса
    rerquest.setRequestHeader("Content-type", "application/json")// 3.указывание заголовка
    rerquest.send() //4. Отправка запроса
    rerquest.addEventListener('load', () => {
        const data = JSON.parse(rerquest.response)
        data.map(item=>{
            const div = document.createElement('div')
            div.innerHTML = item.name + ":" + item.age
            wrapper.append(div)
        })
    })

})

const top1 = new XMLHttpRequest()
top1.open('GET', 'item2.json')
top1.setRequestHeader("Content-type", "application/json")
top1.send()
top1.addEventListener('load', () => {
    const rew = JSON.parse(top1.response)
    rew.forEach(item => {
        console.log(item)

    })} )