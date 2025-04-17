'use strict'

console.log('EX 38')
console.log('biggerThan100');
// CR needed ✏️

// 38. Write a function named biggerThan100. It gets an array of numbers and returns an array of only the numbers that are bigger than 100.

console.log('INPUT: [1, 3, 400, 60, 300, 500]')
console.log('EXPECTED: [400, 300, 500]')
console.log('ACTUAL:', biggerThan100([1, 3, 400, 60, 300, 500]))
/**
 * 
 * @param {*} nums 
 * @returns 
 */
function biggerThan100(nums) {
    var biggerNums = []
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 100) biggerNums.push(nums[i])
    }
    return biggerNums
}