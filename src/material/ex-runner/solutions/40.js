'use strict'

console.log('EX 40')
console.log('My Lorem Ipsum');
// CR needed ✏️

/*
Write a function named getLoremIpsum(wordsCount) that return a sentence with random dummy text (google: lorem ipsum...) TIP, here are the steps you may use to solve this:
a. First, write a function named getWord(). The function returns a single word made out of 3-5 random letters the length of the word will be generated randomly. Tip: you can create a string or an array of all the characters in the English alphabet.
b. Lastly, call this function in a loop to create a sentence. 
*/

var res = getLoremIpsum(4)
console.log('res:', res)


function getLoremIpsum(wordsCount) {
    var sentence = ''

    for (var i = 0; i < wordsCount; i++) {
        sentence += getWord()

        // if (i === wordsCount - 1) sentence += '.'
        // else sentence += ' '
        sentence += (i === wordsCount - 1) ? '.' : ' '
    }
    return sentence
}

function getWord() {
    const letters = 'abcdefghiklmnopqrstvxwyz'
    var randomLength = getRandomInteger(3, 5)
    var word = ''
    for (var i = 0; i < randomLength; i++) {
        var randIdx = getRandomInteger(0, letters.length - 1);
        word += letters.charAt(randIdx)
    }
    return word
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


// function getRandomInt(min, max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }