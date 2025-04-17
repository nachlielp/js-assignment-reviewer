'use strict'

console.log('Ex 48')
console.log('Sort array of nums')
// CR needed ✏️

/*
Implement the function sortNums(nums) this function returns a sorted array (without changing the given array).
It works by looping through the array, finding the minimum, splicing it out, and adding it to the new array.
Read about how to sort an array yourself, by using the bubble sort algorithm, google it, copy it and use it.
*/

var nums = [50, 78, 1, 3, 5]
console.log('INPUT: [50, 78, 1, 3, 5]')
console.log('EXPECTED: [1, 3, 5, 50, 78]')
console.log('ACTUAL: ', sortNums(nums))

nums = [560, 88, 3, 90, -1]
console.log('INPUT: [560, 88, 3, 90, -1]')
console.log('EXPECTED: [-1, 3, 88, 90, 560]')
console.log('ACTUAL: ', sortNums(nums))

function sortNums(nums) {
  var copyNums = nums.slice()
  var sortedNums = []
  var currMin = Infinity
  var currMinIdx = 0

  for (var i = 0; i < nums.length; i++) {
    currMin = Infinity
    for (var j = 0; j < copyNums.length; j++) {
      if (copyNums[j] < currMin) {
        currMin = copyNums[j]
        currMinIdx = j
      }
    }
    sortedNums.push(currMin)
    copyNums.splice(currMinIdx, 1)
  }
  return sortedNums
}