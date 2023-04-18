// var array = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк»", null, 'uioo']
// var null1 = []
// var undefined1 = []
// var strindg = []
// var numbers = []
// array.forEach(item => {
//     if ((typeof item) === "object"){
//         null1.push(item)
//     }else if ((typeof  item === "undefined")){
//         undefined1.push(item)
//     }else if ((typeof item) === "string"){
//         strindg.push(item)
//     }else {
//         numbers.push(item)
//     }
// })
// console.log(null1)
// console.log(undefined1)
// console.log(strindg)
// console.log(numbers)



var array = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк»", null, 'uioo']
var null1 = []
var undefined1 = []
var strindg = []
var numbers = []
for (var i of array){
    if (typeof i === 'object'){
        null1.push(i)
    }else if (typeof i === 'undefined'){
        undefined1.push(i)
    }else if (typeof i === 'string'){
        strindg.push(i)
    }else {
        numbers.push(i)
    }
}
var newArray = [null1, undefined1, strindg, numbers];
console.log(newArray.sort((a, b) => {
    return b.length - a.length;
}));
