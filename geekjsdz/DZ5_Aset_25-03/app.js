// function calcNumber(numOne,numTwo) {
//     let sumNum = numOne + numTwo
//     if (sumNum < 3){
//         console.log('more than 3')
//     }else {
//         console.log('less than 3')
//     }
// }
// calcNumber(1,1)
// function showResult(){
//     console.log('mmmmmm')
// }
// function sgowSomething(){
//     console.log('nnnnnn')
// }
// calcNumber(1,5, showResult,sgowSomething )
// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n-2);
//     }
// }
//
// alert( pow(2, 3) ); // 8
// function noUseReverse(){
//     let someString = ''
//     for (let i = someString.length - 1;i >=0;i--){
//         someString += noReverse[i];
//     }
//     return someString
// }
// noUseReverse('hello')
function reverseSomething(){
    let massive = 'frontend,lesson,april'
    let another = massive.split('').reverse().join('')
    console.log(another)
}
reverseSomething()
function countNum(...othersnum){
    return othersnum.map(i => i/othersnum.length)
}

console.log(countNum(345,4545,674,3456))
function getCoffee(){
    let drink = prompt('What do you like to drink?')
    if (drink === 'coffee'){
        console.log(drink ? 'your order':'not right')
    }
}
getCoffee()