var month = Number(prompt('Write your month'))
var day = Number(prompt('number'))
if(month === 1) {
    if(day <= 20) {
        console.log("goat");
    } else if(day >= 21 && day <= 31) {
        console.log("Water Bearer");
    } else {
        console.error("mistake!")
    }
} else if(month === 2) {
    if(day <= 18) {
        console.log("Water Bearer")
    } else if(day >= 19 && day <= 29) {
        console.log("fish")
    } else {
        console.error("mistake")
    }
}else if (month === 3) {
    if (day <=19) {
        console.log('fish')
    }else if ( day >=20 && day <=30) {
        console.log('Ram')
    }else {
        console.error('mistake')
    }
}else if (month === 4) {
    if (day <= 2) {
        console.log('ram')
    } else if (day >= 3 && day <= 30) {
        console.log('scorpion')
    } else {
        console.error('mistake')
    }
}else if (month === 5) {
    if (day <= 23) {
        console.log('scorpion')
    } else if (day >= 3 && day <= 30) {
        console.log('balance')
    } else {
        console.error('mistake')
    }
}else if (month === 6) {
    if (day <= 23) {
        console.log('balance')
    } else if (day >= 1 && day <= 23) {
        console.log('archer')
    } else {
        console.error('mistake')
    }
}else if (month === 7) {
    if (day <= 24) {
        console.log('archer')
    } else if (day >= 12 && day <= 31) {
        console.log('lion')
    } else {
        console.error('mistake')
    }
}
else if (month === 8) {
    if (day <= 1) {
        console.log('lion')
    } else if (day >= 12 && day <= 27) {
        console.log('bull')
    } else {
        console.error('mistake')
    }
}else if (month === 9) {
    if (day <= 31) {
        console.log('bull')
    } else if (day >= 12 && day <= 26) {
        console.log('twins')
    } else {
        console.error('mistake')
    }
} else if (month === 10) {
    if (day <= 21) {
        console.log('twins')
    } else if (day >= 22 && day <= 26) {
        console.log('wirgin')
    } else {
        console.error('mistake')
    }
} else if (month === 11) {
    if (day <= 26) {
        console.log('virgin')
    } else if (day >= 2 && day <= 30) {
        console.log('goat')
    } else {
        console.error('mistake')
    }
}
else if (month === 12) {
    if (day <= 20) {
        console.log('goat')
    } else if (day >= 21 && day <= 31) {
        console.log('goat')
    } else {
        console.error('mistake')
    }
}

