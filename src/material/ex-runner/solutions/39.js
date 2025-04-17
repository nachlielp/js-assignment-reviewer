'use strict'

console.log('EX 39')
console.log('Count votes');
// CR needed ✏️

// Write a function named countVotes(votes, candidateName) that counts how many votes this candidate got. i.e.: if the votes array looks like this: ['Nuli', 'Pingi', 'Uza', 'Shabi', 'Uza'] And the candidateName is : 'Uza', the function returns 2.

var votes = ['Nuli', 'Pingi', 'Uza', 'Shabi', 'Uza']
var candidateName = 'Uza'
console.log('INPUT: ', votes, candidateName)
console.log('EXPECTED: ', 2)
console.log('ACTUAL:', countVotes(votes, candidateName))

function countVotes(votes, candidateName) {
    var count = 0
    for (var i = 0; i < votes.length; i++) {
        if (votes[i] === candidateName) count++
    }
    return count
}