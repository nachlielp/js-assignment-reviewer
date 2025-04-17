'use strict'

console.log('Ex 42')
console.log('Start with S')
// CR needed ✏️

// EX42 Write a function named startsWithS that gets an array of names and returns an array of the names that start with S.
// a. Refactor your function to work on any letter by adding a letter parameter, you might need to rename the function so it will suit it’s new capacity.

var names = ['Matan', 'David', 'Susu', 'Sasa', 'Sansa']

console.log('INPUT: [Matan, David, Susu, Sasa, Sansa]')
console.log('EXPECTED:', '[Susu, Sasa, Sansa]')
console.log('ACTUAL:', startsWithS(names))

function startsWithS(names) {
    var namesWithS = []
    for (var i = 0; i < names.length; i++) {
        var name = names[i]
        var firstChar = name.charAt(0)
        if (firstChar.toLowerCase() === 's') {
            namesWithS.push(names[i]);
        }
    }
    return namesWithS
}

//Step 2
names = ['Matan', 'David', 'Dusu', 'Dasa', 'Dansa']

console.log('INPUT: [Matan, David, Dusu, Dasa, Dansa]')
console.log('EXPECTED:', '[ David, Dusu, Dasa, Dansa]')
console.log('ACTUAL:', startsWithLetter(names, 'D'))

// Any letter
function startsWithLetter(names, letter) {
    var namesWithLetter = []
    for (var i = 0; i < names.length; i++) {
        if (names[i].charAt(0).toLowerCase() === letter.toLowerCase()) {
            namesWithLetter.push(names[i])
        }
    }
    return namesWithLetter
}