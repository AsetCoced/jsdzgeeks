// var title = prompt('Your order please')
// // var starbucks = {
// //     coffee: {
// //         blackcoffee: 'черный кофе',
// //         whitecoffee: 'кофе с молоком',
// //         capuchino:'кофе с чем-то', //я не фанат кофе
// //         latte:'латте это латте',
// //     },
// //     tea: {
// //         'black tea': 'Черный чай',
// //         'green tea': 'Зеленый чай',
// //         'чай': ' tea'
// //
// //     }
// // }
// // if (title in starbucks.coffee.blackcoffee) {
// //     alert('Your coffee!')
// // }else if (title in starbucks.tea) {
// //     alert('your tea!')
// // }else {
// //     console.error('error')
// // }










// var ask = prompt('Try to guess word of lesson')
// var ask2 = prompt('how are you')
// var unit = {
//     english:'Its English',
//     russian:'Its russian',
//     france:'its france',
//     korea: {
//         south:'south korea',
//         north:'north korea',
//     }
// }
// if (ask2 === 'english'){
//     alert(unit.english)
// }else {
//     console.error('error')
// }
// console.log(ask)



var asked = prompt('Your order?')
var starbucks = {
    coffe:{
        black: 'black coffe',
        white: 'white coffe',
    },
    tie:{
        green:'green tie',
        blacktie: ' black tie',
    }
}
if (asked.toLowerCase() in starbucks.coffe){
    console.log(starbucks.coffe.black)
}else if (asked.toLowerCase() === 'зеленый чай' || asked.toLowerCase() === 'зелёный чай') {
    alert('your order is ' + starbucks.tie.green)
}