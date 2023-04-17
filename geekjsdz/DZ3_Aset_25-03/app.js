for (var i = 0; i <= 100;i++) {
    if((i % 3) === 0) {
        console.log("fizz");
    } else if((i % 5) === 0) {
        console.log("buzz");
    }
    if ((i % 3 && i % 5) === 0) {
        console.log('fizzbuzz')
    }
    else{
        console.log(i)
    }
}
var array = ['milk','beer', 'beer', 'milk', 'milk']
var milky = ['milk']
var beerly = ['beer']
for (var i = 0; i < array.length; i++){
    if (beerly.includes(array[i])){
        console.warn(`${array[i]} bad`)
        continue
    }
    console.log(`${milky} good`)
}
var marry = prompt('Will you marry me?')
if (marry.toLowerCase() === 'yes') {
    alert('Siuuuuu')
}else if (marry.toLowerCase() === 'no') {
    alert('give mi re vovo')
}else  {
    console.error('Wrong')
}