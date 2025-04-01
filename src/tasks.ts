interface Task {
  name: string;
  title: string;
  content: string;
  solution: string;
}

interface Tasks {
  [key: string]: Task;
}
export const tasks: Tasks = {
  1: {
    name: "01.js",
    title: "Welcome",
    content: `
    <p>Use <span class="code">prompt()</span> to read a first name and a last name.</p>
    <p>Declare the variable <span class="code">fullName</span>, and then welcome the user by his full name.</p>
    `,
    solution: `
    var firstName = prompt('Please enter your first name:')
    var lastName = prompt('Please enter your last name:')
    var fullName = firstName + ' ' + lastName
    alert('Welcome ' + fullName)
    `,
  },
  2: {
    name: "02.js",
    title: "Basic math operations",
    content: `<p>Read two numbers and use <span class="code">console.log()</span> to print the result of the following operations on them: <span class="code">( % , / , *)</span></p>`,
    solution: `
    var num1 = +prompt('Please enter a number: ')
    var num2 = +prompt('Please enter another number: ')
    var moduloRes = num1 % num2
    console.log(num1 + ' % ' + num2 + ' = ' + moduloRes)
    var divisionRes = num1 / num2
    console.log(num1 + ' / ' + num2 + ' = ' + divisionRes)
    var multRes = num1 * num2
    console.log(num1 + ' * ' + num2 + ' = ' + multRes)
    `,
  },
  3: {
    name: "03.js",
    title: "Temperature Converter",
    content: `<p>Create a function that converts Celsius to Fahrenheit</p>`,
    solution: `
    var celsius = +prompt('Please enter degrees in Celsius: ')
    var fahrenheit = celsius * (9 / 5) + 32
    console.log('Result: ' + celsius + ' Celsius degrees in Fahrenheit is ' + fahrenheit)
    `,
  },
  4: {
    name: "04.js",
    title: "String Length",
    content: `<p>Write a function that returns the length of a string</p>`,
    solution: `
    var distance = +prompt('Enter a distance (km):')
    var speed = +prompt('Enter speed (km/h):')
    var time = distance / speed
    console.log('Result:')
    console.log('For the distance: ' + distance + ' kilometers')
    console.log('and the speed: ' + speed + ' km/h')
    console.log('it will take ' + time + ' hours to get to the destination')
    `,
  },
  5: {
    name: "05.js",
    title: "Array Sum",
    content: `<p>Create a function that sums all numbers in an array</p>`,
    solution: `
    var strDigit1 = prompt('Enter first digit')
var strDigit2 = prompt('Enter second digit')
var strDigit3 = prompt('Enter third digit')

var strNum = strDigit1 + strDigit2 + strDigit3
console.log('The full number is: ' + strNum)

//BONUS:
var digit1 = +prompt('Enter first digit')
var digit2 = +prompt('Enter second digit')
var digit3 = +prompt('Enter third digit')

var num = digit1 * 100 + digit2 * 10 + digit3
console.log('The full number is: ' + num)
    `,
  },
  6: {
    name: "06.js",
    title: "Array Operations",
    content: `<p>Create a function that finds the maximum number in an array</p>`,
    solution: `var a = +prompt('Enter variable a')
var b = +prompt('Enter variable b')
var c = +prompt('Enter variable c')

var minusB = -b
var doubleA = a * 2
var discriminant = b * b - 4 * a * c

console.log('-b: ' + minusB)
console.log('2*a: ' + doubleA)
console.log('The discriminant is: ', discriminant)

//BONUS:
var equation = ''
var bOperator = ''
var cOperator = ''

if (a) {
    if(a === 1) {
        equation = 'x\u00B2'
    } else {
        equation = a + 'x\u00B2'
    }
}
if (b) {
  if (b > 0 && a) {
    bOperator = '+'
  }
  equation += bOperator + b + 'x'
}
if (c) {
  if (c > 0 && b) {
    cOperator = '+'
  }
  equation += cOperator + c
}

console.log('The quadratic equation is: ' + equation)

if(discriminant < 0) {
    console.log('This quadratic equation has no solution');
} else {
    var x1 = (minusB + discriminant ** 0.5) / doubleA
    console.log('x1: ', x1)
    if(discriminant === 0) {
        console.log('This quadratic equation has a single solution');
    } else {
        var x2 = (minusB - discriminant ** 0.5) / doubleA
        console.log('x2: ', x2)
    }
}

// Example input for single solution:

// x2 + 2x + 1 = 0 (solution: x = -1)
// x2 + 4x + 4 = 0 (solution: x = -2)
// x2 + 6x + 9 = 0 (solution: x = -3)
// x2 + 8x + 16 = 0 (solution: x = -4)
// x2 + 10x + 25 = 0 (solution: x = -5)

// Example input for two solutions:
// 4x2 + 26x + 12 = 0
// x2 + 5x - 4 = 0 r
// x2 + 5x + 6 = 0 
// x2 + 10x + 16 = 0 

// Example input for no solution:
// x2 + x + 5 = 0
// x2 + x + 4 = 0
// x2 + 5x + 12 = 0`,
  },
  7: {
    name: "07.js",
    title: "String Reversal",
    content: `<p>Write a function that reverses a string without using the built-in reverse() method</p>`,
    solution: `var num1 = +prompt('First number?')
var num2 = +prompt('Second number?')
var num3 = +prompt('Third number?')

var operator = ' != '

if (num1 + num2 === num3) {
    operator = ' = '
}

console.log(num1 + ' + ' + num2 + operator + num3)`,
  },
  8: {
    name: "08.js",
    title: "Palindrome Check",
    content: `<p>Create a function that checks if a string is a palindrome</p>`,
    solution: `
var num1 = +prompt('First number?')
var num2 = +prompt('Second number?')
var num3 = +prompt('Third number?')

var smallestNum = num3

if (num2 < smallestNum) {
  smallestNum = num2
}
if (num1 < smallestNum) {
  smallestNum = num1
}

console.log('The smallest number is:', smallestNum)

// Another option:

// if (num1 > num2) {
//     if (num3 > num2) {
//         smallestNum = num2
//     }
// } else {
//     if (num3 > num1) {
//         smallestNum = num1
//     }
// }

// Another option:

// if (num1 > num2) {
//     if (num3 > num2) {
//         smallestNum = num2
//     } else {
//         smallestNum = num3
//     }
// } else {
//     if (num3 > num1) {
//         smallestNum = num1
//     } else {
//         smallestNum = num3
//     }
// }

// Another option:

if (num1 < num3 && num1 < num2) {
  console.log('The first number is the smallest: ', num1)
} else if (num2 < num1 && num2 < num3) {
  console.log('The second number is the smallest: ', num2)
} else {
  console.log('The third number is the smallest: ', num3)
}
`,
  },
  9: {
    name: "09.js",
    title: "Array Filter",
    content: `<p>Write a function that filters out even numbers from an array</p>`,
    solution: `
var num1 = +prompt('Please enter a number')
var num2 = +prompt('Please enter another number')
var diff

if (isNaN(num1) || isNaN(num2)) {
    console.log('Invalid input - not numbers')
} else if (num1 < 0 || num2 < 0) {
    console.log('Invalid input - negative numbers')
} else {
    if (num1 > num2) {
        diff = num1 - num2
    } else {
        diff = num2 - num1
    }

    // // Another option 
    // diff = num1 - num2
    // if (diff < 0) {
    //     diff *= -1
    // }

    // Another option
    // diff = Math.abs(num1 - num2)

    if (diff < num1 && diff < num2) {
        console.log('Numbers are relatively close')
    }
    console.log('The diff between the numbers is: ', diff)
}
`,
  },
  10: {
    name: "10.js",
    title: "Facebook Friends",
    content: `<p>Ask the user how many friends he has on FB and print out an analysis:</p>
<ul>
    <li>More than 500 friends – <strong><em>'OMG, a celebrity!'</em></strong></li>
    <li>More than 300 friends (and up to 500) – <strong><em>'You are well connected!'</em></strong></li>
    <li>More than 100 friends – <strong><em>'You know some people...'</em></strong></li>
    <li>Up to 100 friends  – <strong><em>'Quite picky, aren't you?'</em></strong></li>
    <li>0 – <strong><em>'Let's be friends!'</em></strong></li>
</ul>`,
    solution: `
var friendCount = +prompt('How many friends do you have on FB?')
var msg

if (friendCount > 500) {
    msg = 'OMG, a celebrity!'
} else if (friendCount > 300) {
    msg = 'You are well connected!'
} else if (friendCount > 100) {
    msg = 'You know some people...'
} else if (friendCount > 0) {
    msg = 'Quite picky arent you?'
} else {
    msg = 'Let’s be friends!'
}

console.log(msg)
`,
  },
  11: {
    name: "11.js",
    title: "Bank System",
    content: `<ul>
    <li>Initialize a variable named currBalance with the value: <span class="code">1000</span></li>
    <li>Initialize a constant named  PIN  with the value: <span class="code">'0796'</span></li>
    <li>Prompt the user to enter a secret pin code.</li>
    <li>If the user entered the correct pin code, ask him how much he would like to withdraw. Print a nice message with the new balance.</li>
    <li>If the pin code was wrong, alert the user with a different message, and don't allow him make a withdrawal. </li>
    <li>Add a feature: don't let the user withdraw more than he has in his account. </li>
</ul>`,
    solution: `
var currBalance = 1000
var pinCode = '0796'
var enteredPinCode = prompt('Please enter your pin code')

if (pinCode !== enteredPinCode) {
  console.error('Wrong pin code')
} else {
  var withdraw = +prompt('How much would you like to withdraw')

  if (withdraw > currBalance) {
    console.error('Maximum amount to withdraw: ', currBalance)
  } else {
    currBalance -= withdraw
    console.log('Your new balance:', currBalance)
  }
}
`,
  },
  12: {
    name: "12.js",
    title: "Guess Who",
    content: `<p>Use the alert function, and ask the user to think about an actor.</p>
<p>Use the confirm function and ask the user two yes/no questions:</p>
<p>Question 1: <span class="console">'Is he a man?'</span></p>
<br>
<ul>
    <li>If the answer to question 1 is <span class="console">'Yes'</span>, then Question 2 becomes: <span class="console">'Is he blonde?'</span></li>
        <ul>
            <li>If the answer to question 2 is <span class="console">'Yes'</span> - <span class="console">Philip Seymour!</span></li>
            <li>If the answer to question 2 is <span class="console">'No'</span> - <span class="console">Tom Cruise!</span></li>
        </ul>
    <br>
    <li>If the answer to question 1 is <span class="console">'No'</span>, then Question 2 becomes: <span class="console">'Is she English?'</span></p>
        <ul>
            <li>If the answer to question 2 is <span class="console">'Yes'</span> - <span class="console">Keira Knightley!</span></li>
            <li>If the answer to question 2 is <span class="console">'No'</span> - <span class="console">Natalie Portman!</span></li>
        </ul>
</ul>`,
    solution: `
alert('Think about an actor/actress........')

var isMan = confirm('Is he a man?')
if (isMan) {
  var isBlonde = confirm('Is he blonde?')
  if (isBlonde) {
    console.log('Philip Seymour!')
  } else {
    console.log('Tom Cruise!')
  }
} else {
  var isEnglish = confirm('Is she English?')
  if (isEnglish) {
    console.log('Keira Knightley!')
  } else {
    console.log('Natalie Portman!')
  }
}
`,
  },
  13: {
    name: "13.js",
    title: "The Elevator",
    content: `<ul>
    <li>Keep a <span class="code">currentFloor</span> variable, initialize it to 0</li>
    <li>Ask the user which floor would he like to go to. </li>
    <li>Validate the floor is between -2 and 4.</li>
    <li>Update the <span class="code">currentFloor</span> variable accordingly.</li>
    <li>Let the user know his current floor.</li>
    <li>If the user goes to floor 0 alert 'Bye Bye'.</li>
    <li>If the user goes to the parking lot (negative floors) alert: 'Drive Safely'. </li>
</ul>`,
    solution: `
var currFloor = 0
var wantedFloor = +prompt('Which floor you would like to go to?')

if (wantedFloor >= -2 && wantedFloor <= 4) {
  currFloor = wantedFloor
  console.log('Your current floor is', currFloor)

  if (currFloor === 0) {
    alert('Bye bye...')
  } else if (currFloor < 0) {
    alert('Drive safely!')
  }
} else {
  console.log('Invalid floor. choose one from -2 to 4.')
}
`,
  },
  14: {
    name: "14.js",
    title: "Greet Function",
    content: `<p>Write a function which receives a user name as a parameter and greets the user.</p>`,
    solution: `console.log('INPUT: Puki Ben David');
console.log('EXPECTED: Hello and welcome Puki Ben David');
console.log('ACTUAL: ');
greetUser('Puki Ben David');

function greetUser(username) {
  console.log('Hello and welcome', username);
}`,
  },
  15: {
    name: "15.js",
    title: "Sum of two Numbers",
    content: `<p>Write a function which receives two numbers and returns their sum</p>`,
    solution: `
console.log('INPUT: num1: 1, num2: 2');
console.log('EXPECTED: 3');
console.log('ACTUAL: ');
var sum = sumTheNums(1, 2);
console.log('sum :>> ', sum);

console.log('INPUT: num1: 0, num2: 0');
console.log('EXPECTED: 0');
console.log('ACTUAL: ');
sum = sumTheNums(0, 0);
console.log('sum :>> ', sum);

console.log('INPUT: num1: -5, num2: 80');
console.log('EXPECTED: 75');
console.log('ACTUAL: ');
sum = sumTheNums(-5, 80);
console.log('sum :>> ', sum);

function sumTheNums(num1, num2) {
  return num1 + num2;
}
`,
  },
  16: {
    name: "16.js",
    title: "Even and Odd",
    content: `<p>Write a function named <span class="code">isEven(num)</span> which receives a number, and returns <span class="code">true</span>if the number is even, and <span class="code">false</span>if it is odd.</p>`,
    solution: `
console.log('INPUT: 2');
console.log('EXPECTED: true');
console.log('ACTUAL: ', isEven(2));

console.log('INPUT: 3');
console.log('EXPECTED: false');
console.log('ACTUAL: ', isEven(3));

console.log('INPUT: -2');
console.log('EXPECTED: true');
console.log('ACTUAL: ', isEven(-2));

function isEven(num) {
  return num % 2 === 0;
}
`,
  },
  17: {
    name: "17.js",
    title: "Get the Bigger Num",
    content: `<p>Write a function named <span class="code">getBigger</span>  which receives two numbers and returns the bigger one.</p>`,
    solution: `console.log('INPUT: num1: 3, num2: 1');
console.log('EXPECTED: 3');
console.log('ACTUAL: ', getBigger(3, 1));

console.log('INPUT: num1: -5, num2: 7');
console.log('EXPECTED: 7');
console.log('ACTUAL: ', getBigger(-5, 7));

// For very smart people
// console.log('ACTUAL: ', getBiggerHack(3, 1));

function getBigger(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}

function getBiggerHack(num1, num2) {
  return Math.max(num1, num2);
}
`,
  },
  18: {
    name: "18.js",
    title: "Age Check",
    content: `<p>Write a function named <span class="code">isAbove18</span> which receives a name and an age.</p>
<p>The function should check if the age is above eighteen and use alert to show a message :</p>
<p>If the user is younger than eighteen, the message will be &nbsp &nbsp -  &nbsp<span class="console">'You are too young.'</span></p>
<p>otherwise, the message will be  &nbsp &nbsp -  &nbsp<span class="console">'You are over 18!'</span> </p>
<ul>
    <li>Use the user's name within the alerts.</li>
    <li>The function should also return a boolean value - print it to the console. </li>
</ul>`,
    solution: `
console.log('INPUT: username: puki, age: 12');
console.log('EXPECTED: false');
console.log('ACTUAL: ', isAbove18('Puki Ben David', 12));

console.log('INPUT: username: puki, age: 18');
console.log('EXPECTED: true');
console.log('ACTUAL: ', isAbove18('Puki Ben David', 18));

console.log('INPUT: username: puki, age: 54');
console.log('EXPECTED: true');
console.log('ACTUAL: ', isAbove18('Puki Ben David', 54));

function isAbove18(username, age) {
  if (age < 18) {
    alert('Sorry ' + username + ' You are a minor...');
    return false;
  }
  alert(username + " You're allowed to buy a beer");
  return true;
}
`,
  },
  19: {
    name: "19.js",
    title: "Even and Odd Numbers",
    content: `<p>Read 10 numbers from the user. Check each number and print it along with a short message indicating whether it is even or odd.</p>
<p>For example:</p>
<ul>
    <li class="console">21 is Odd</li>
    <li class="console">48 is Even</li>
</ul>`,
    solution: `
var count = 0;

while (count < 10) {
  var num = +prompt('Enter a number');
  if (num % 2 === 0) {
    console.log('The number ' + num + ' is Even');
  } else {
    console.log('The number ' + num + ' is Odd');
  }
  count++;
}

// for (var i = 0; i < 10; i++) {
//   num = +prompt('Enter a number');
//   if (num % 2 === 0) {
//     console.log('The number ' + num + ' is Even');
//   } else {
//     console.log('The number ' + num + ' is Odd');
//   }
// }
`,
  },
  20: {
    name: "20.js",
    title: "Min, Max and Avg.",
    content: `<p>Read 10 numbers from the user and print:</p>
<ul>
    <li>The maximum number.</li>
    <li>The minimum number.</li>
    <li>The average.</li>
</ul>`,
    solution: `
var maxNum = -Infinity
var minNum = Infinity

var sum = 0
var count = 0
while (count < 10) {
  var num = +prompt('Enter a number')
  if (num > maxNum) {
    maxNum = num
  }

  if (num < minNum) {
    minNum = num
  }

  sum += num
  count++
}

console.log('maxNum: ', maxNum)
console.log('minNum: ', minNum)
console.log('avg: ', sum / count)
`,
  },
  21: {
    name: "21.js",
    title: "Divisible by 3",
    content: `<p>Read numbers from the user, until the number 999 is entered. For each number:</p>
<ul>
    <li>Print if it is divisible by 3.</li>
    <li>If it is bigger by more than 10 from the previous number, print a suitable message.</li>
</ul>`,
    solution: `
var currNum = +prompt('Please enter a number (enter 999 to exit)')
var prevNum = currNum

while (currNum !== 999) {
  if (currNum % 3 === 0) {
    console.log(currNum, 'is divided by 3')
  } else {
    console.log(currNum, 'is not divided by 3')
  }

  if (currNum > prevNum + 10) {
    console.log(currNum, 'is much bigger than', prevNum)
  }
  prevNum = currNum
  currNum = +prompt('Please enter a number (enter 999 to exit)')
}
`,
  },
  22: {
    name: "22.js",
    title: "myPow()",
    content: `<p>Write a function named <span class="code">myPow()</span> which receives 2 parameters: a base (<span class="code">n</span>), and an exponent (<span class="code">exp</span>) and returns <span class="code">n<sup>exp</sup></span></p>
<p>Sample unit testing:</p>
<p><span class="console">INPUT: 2, 3</span></p>
<p><span class="console">EXPECTED: 8</span></p>
<p><span class="console">ACTUAL: 8</span></p>`,
    solution: `
console.log('INPUT:', 2, 3)
console.log('EXPECTED:', 8)
console.log('ACTUAL: ', myPow(2, 3))

console.log('INPUT: 3,2')
console.log('EXPECTED: 9')
console.log('ACTUAL: ', myPow(3, 2))

console.log('INPUT: 10,3')
console.log('EXPECTED: 1000')
console.log('ACTUAL: ', myPow(10, 3))

function myPow(base, exponent) {
    var power = 1
    while (exponent > 0) {
        power *= base
        exponent--
    }
    return power
}

// function myPow(base, exponent) {
//     var number = base;
//     for (var i = 1; i < exponent; i++) {
//         number *= base;
//     }

//     return (number);
// }


// supports negative exponent

// function myPow(base, exponent) {
//    if (exponent === 0) return 1;
//     var counter = 1;
//     var pow = base;

//     while (counter < Math.abs(exponent)) {
//         pow *= base;
//         counter++;
//     }
//     if (exponent < 0) return (1 / pow);
//     return pow;
// }`,
  },
  23: {
    name: "23.js",
    title: "Factorial!",
    content: `<p>Write the function <span class="code">getFactorial</span> which receives a number and returns <span class="math">n!</span> (Google 'factorial' if you are not sure what the mathematical definition of it is).</p>`,
    solution: `
console.log('INPUT: 3')
console.log('EXPECTED: 6')
console.log('ACTUAL: ', getFactorial(3))

console.log('INPUT: 4')
console.log('EXPECTED: 24')
console.log('ACTUAL: ', getFactorial(4))

console.log('INPUT: 4')
console.log('EXPECTED: 24')
console.log('ACTUAL: ', getFactorialFor(4))

function getFactorial(num) {
  var factorial = 1
  while (num > 1) {
    factorial *= num
    num--
  }
  return factorial
}

// function getFactorialFor(num) {
//   var factorial = 1
//   for (var i = num; i > 1; i--) {
//     factorial *= i
//   }
//   return factorial
// }
`,
  },
  24: {
    name: "24.js",
    title: "myAbs()",
    content: `<p>Try playing around with the function <span class="code">Math.abs()</span> and read its documentation on <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs">MDN</a>. Implement a function called <span class="code">myAbs()</span>, which mimics the behavior of <span class="code">Math.abs()</span>.</p>`,
    solution: `
console.log('INPUT: 4')
console.log('EXPECTED: 4')
console.log('ACTUAL: ', myAbs(4))

console.log('INPUT: -2')
console.log('EXPECTED: 2')
console.log('ACTUAL: ', myAbs(2))

console.log('INPUT: 0')
console.log('EXPECTED: 0')
console.log('ACTUAL: ', myAbs(0))



function myAbs(num) {
    if (num >= 0) return num
    return -num
    // return num * -1

    // return (num < 0) ? -num : num
}`,
  },
  25: {
    name: "25.js",
    title: "getRandomInt()",
    content: `<p>Write A function named <span class="code">getRandomInt(min, max)</span>. The function should generate a random integer between <span class="code">min</span> and up to, but not including, <span class="code">max</span>.</p>
<p>Tip: use <span class="code">Math.Random()</span> and <span class="code">Math.Floor()</span>.</p>`,
    solution: `console.log('INPUT: 5, 7')
console.log('EXPECTED: random int btween 5 - 7')
console.log('ACTUAL: ', getRandomInteger(5, 7))

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min) // 0 - 0.9999999
}
`,
  },
  26: {
    name: "26.js",
    title: "Ascending Random Numbers",
    content: `<p>Write a program which generates 10 ascending random numbers (each number is greater than the previously generated number).</p>
<p class="tight-paragraph">The first number n , should be in the range      <span class="math">0 &ndash; 1000</span>,</p>
<p class="tight-paragraph">and each subsequent number, should be  in the range      <span class="math">(n+1) &ndash; (n+1000)</span></p>`,
    solution: ` (count < 10) {
    var randomInt = getRandomInteger(min, min + 1000)
    console.log(randomInt)
    min = randomInt + 1
    count++
  }

  // for (var i = 0; i < 10; i++) {
  //     var randomInt = getRandomInteger(minVal, minVal + 1000)
  //     console.log(randomInt);
  //     minVal = randomInt + 1
  // }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
`,
  },
  27: {
    name: "27.js",
    title: "Asterisks!",
    content: `<ol>
    <li>Implement the function  <span class="code">getAsterisks(length)</span> which returns a string of asterisks. The number of asterisks in the string is determined by <span class="code">length</span>.</li>
    <li>Implement the function <span class="code">getTriangle(height)</span>  which returns a triangle.</li>
    <li>Implement the function  <span class="code">getMusicEqualizer(rowCount)</span> which generates random numbers between 1 and 10 and returns rows of random lengths.</li>
    <li>Implement the function <span class="code">getBlock(rows, cols)</span>  which returns a block of asterisks.</li>
    <li>Implement  <span class="code">getBlockOutline(rows, cols)</span>,  which only returns the block outline.</li>
</ol>`,
    solution: `var res = getCharacter(4, '%')
console.log(res)

function getCharacter(length, char) {
  //שאלה מספר 6
  var characters = ''
  var count = 0

  while (count < length) {
    characters += char
    count++
  }
  console.log('this:', characters)
  return characters
}
// reviewed ✔️

// a. Write the function getAsterisks(length) that returns a string containing asterisks according to the number supplied. For example: when the requested length is 4, it returns '****'
// b. Write a function named: getTriangle(height) that returns a triangle:
// c. Write a function named: getMusicEqualizer(rowsCount) that generates random numbers between 1 and 10 and return columns in random lengths:
// d. Write a function that returns a block of asterisks (*) by the following parameters: rowsCount and colsCount. I.e: for 4, 5
// e. Surprise, there is a new requirement to support any character (not necessarily asterisk), how easy would it be to refactor your code? The character should be decided by the user

// Printing patterns of Asterisks.
// const CHAR = prompt('What char you want?')
const CHAR = '*'
/*
 *****
 *   *
 *   *
 *   *
 *****
 */
// a.
console.log('print string that contains the given char:')
console.log(getSymbol(4, CHAR))
console.log('====================')

// b.
console.log('print triangle:')
console.log(getTriangle(5, CHAR))
console.log('====================')

// c.
console.log('print equalizer:')
console.log(getMusicEqualizer(4, CHAR))
console.log('====================')

// d.
console.log('print block:')
console.log(patternBlock(4, 5, CHAR))
console.log('====================')

// e.
console.log('print block outlined:')
console.log(getPatternOutline(5, 4, CHAR))

function getSymbol(length, char) {
  var count = 0
  var str = ''
  while (count < length) {
    str += char // '*'
    count++
  }
  return str

  // Another option:
  // return char.repeat(length)
}

function getTriangle(height, char) {
  if (height === 1) return char
  var count = 1
  var triangle = ''
  while (count < height) {
    triangle += getSymbol(count, char) + '\n'
    count++
  }
  while (count > 0) {
    triangle += getSymbol(count, char) + '\n'
    count--
  }
  return triangle
}

/*
 ***
 *
 *****
 *
 */
function getMusicEqualizer(rowsCount, char) {
  var count = 0
  var equalizer = ''
  while (count < rowsCount) {
    var randomNum = getRandomInteger(1, 10)
    equalizer += getSymbol(randomNum, char) + '\n'
    count++
  }
  return equalizer
}

function patternBlock(rows, cols, char) {
  var count = 0
  var str = ''
  while (count < rows) {
    str += getSymbol(cols, char) + '\n'
    count++
  }
  return str
}

function getPatternOutline(rows, cols, char) {
  var count = 0
  var str = ''
  while (count < rows) {
    if (count === 0 || count === rows - 1) {
      str += getSymbol(cols, char) + '\r'
    } else {
      str += _getEmptyLine(cols, char) + '\r'
    }
    count++
  }
  return str
}

function _getEmptyLine(length, char) {
  var str = char
  var count = length - 2
  while (count > 0) {
    str += ' '
    count--
  }
  str += char
  return str
}

function getRandomInteger(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}
`,
  },
  28: {
    name: "28.js",
    title: "Greatest Common Devisor",
    content: `<p class="mb-m">Write a program which calculates the greatest common divisor (GCD) of two positive integers.</p>
<p class="mb-l">For example: if the input are  6 and 15,  the calculation's result should be 3.</p>`,
    solution: `
console.log('INPUT: num1: 6, num2: 24')
console.log('EXPECTED: 6')
console.log('ACTUAL: ', findGCD(6, 8))

console.log('\n')

console.log('INPUT: num1: 9, num2: 36')
console.log('EXPECTED: 9')
console.log('ACTUAL: ', findGCD(9, 36))

console.log('\n')

console.log('INPUT: num1: 60, num2: 72')
console.log('EXPECTED: 12')
console.log('ACTUAL: ', findGCD(60, 72))

function findGCD(num1, num2) {
  var divider
  if (num1 < num2) {
    divider = num1
  } else {
    divider = num2
  }

  // short-if
  var divider = num1 < num2 ? num1 : num2

  while (divider) {
    if (num1 % divider === 0 && num2 % divider === 0) return divider
    divider--
  }
}

// var dividerSqrt = Math.sqrt(startingDivider)
// var startingDivider = divider
`,
  },
  29: {
    name: "29.js",
    title: "Digit Manipulation",
    content: `<p>Read a number from the user (&nbsp;keep it as a string i.e. <span class="console">"24367"</span>) and then:</p>
<ol type="a">
    <li>Print each of its digits in a separate line.</li>
    <li>Calculate the sum of its digits.</li>
    <li>Calculate the multiplication of its digits.</li>
    <li>Sum its first and last digits.</li>
    <li>Print it with its first and last digits swapped.</li>
    <li>Check whether it is symmetric.</li>
    <li>Print the number reversed.</li>
</ol>`,
    solution: `
// 29.Read a number from the user (keep it as string such as “24367”) and then:
// var number = prompt('Enter a number')
var numberStr = '1234'

// a. Basic operations:
// i. Print each of its digits in a separate line.
printDigits()

function printDigits() {
  var idx = 0
  while (idx < numberStr.length) {
    console.log(numberStr.charAt(idx))
    idx++
  }
}

// ii. Calculate the sum of its digits.
console.log('INPUT:', numberStr)
console.log('EXPECTED: 10')
console.log('ACTUAL: ', getDigitsSum(numberStr))
console.log('~~~~~~~~~~~~~')

function getDigitsSum(numberStr) {
  var idx = 0
  var sum = 0
  while (idx < numberStr.length) {
    sum += be + numrStr.charAt(idx)
    idx++
  }
  return sum
}

// iii. Calculate the multiplication (מכפלה (of its digits
console.log('INPUT:', numberStr)
console.log('EXPECTED: 24')
console.log('ACTUAL: ', getDigitsMult(numberStr))
console.log('~~~~~~~~~~~~~')

function getDigitsMult(numberStr) {
  var idx = 0
  var mult = 1
  while (idx < numberStr.length) {
    mult *= +numberStr.charAt(idx)
    idx++
  }
  return mult
}

// iv. Sum it’s first and last digits.
console.log('INPUT:', numberStr)
console.log('EXPECTED: 5')
console.log('ACTUAL: ', getFirstLastSum(numberStr))
console.log('~~~~~~~~~~~~~')

function getFirstLastSum(numberStr) {
  var lastDigit = +numberStr.charAt(numberStr.length - 1)
  var firstDigit = +numberStr.charAt(0)
  return lastDigit + firstDigit
}

// v. Print it with it’s first and last digits swapped (2731=>1732)
console.log('INPUT:', numberStr)
console.log('EXPECTED: 4231')
console.log('ACTUAL: ')
getFirstLastSwap(numberStr)
console.log('~~~~~~~~~~~~~')

function getFirstLastSwap(numberStr) {
  var str = numberStr.charAt(numberStr.length - 1) + numberStr.substring(1, numberStr.length - 1) + numberStr.charAt(0)
  console.log('Swapped str is', str)
}

// vi. Check whether it’s symmetric (like this number: 95459)
var symmetricNum = '95459'
var unSymmetricNum = '1234'

console.log('INPUT: ', symmetricNum)
console.log('EXPECTED: true')
console.log('ACTUAL: ', isSymmetric(symmetricNum))
console.log('INPUT: ', unSymmetricNum)
console.log('EXPECTED: false')
console.log('ACTUAL: ', isSymmetric(unSymmetricNum))
console.log('~~~~~~~~~~~~~')

function isSymmetric(num) {
  var idx = 0
  while (idx < Math.floor(num.length / 2)) {
    if (num.charAt(idx) !== num.charAt(num.length - idx - 1)) return false
    idx++
  }
  return true
}

// vii. Print the number reversed (BONUS: as a number and not as string).
console.log('INPUT:', numberStr)
console.log('EXPECTED: 4321')
console.log('ACTUAL: ')
printReversedStr(numberStr)
console.log('~~~~~~~~~~~~~')

function printReversedStr(numStr) {
  var idx = numStr.length - 1
  var reveresedStr = ''
  while (idx >= 0) {
    reveresedStr += numStr.charAt(idx--)
  }
  console.log('Reveresed string', reveresedStr)
}

// BONUS:
console.log('INPUT:', numberStr)
console.log('EXPECTED:', 8764321)
console.log('ACTUAL: ')
printReversedNum(numberStr)
console.log('~~~~~~~~~~~~~')

function printReversedNum() {
  var num = 1234678
  var reversedNum = 0
  while (num) {
    reversedNum *= 10
    reversedNum += num % 10
    num = Math.floor(num / 10)
  }
  console.log('Reveresed number', reversedNum)
}

// b. BONUS: Special Numbers
// i. Check if the number is an Armstrong number. I.e 371 is an Armstrong number: 3**3+7**3+1**3 =371. If the number passed the test, print it to the
// console.

console.log('INPUT: ', 153)
console.log('EXPECTED: 153 is an Armstrong number')
console.log('ACTUAL: ')
printArmstrong(153)
console.log('INPUT: ', 154)
console.log('EXPECTED: 154 is NOT an Armstrong number')
console.log('ACTUAL: ')
printArmstrong(154)
console.log('~~~~~~~~~~~~~')

function printArmstrong(num) {
  var numCopy = num
  var sum = 0
  var length = ('' + num).length

  while (numCopy > 0) {
    var digit = numCopy % 10
    sum += digit ** length
    numCopy = parseInt(numCopy / 10)
  }

  if (sum === num) console.log(num + ' is an Armstrong number')
  else console.log(num + ' is NOT an Armstrong number')
}

// ii. Check if the number is a Perfect number. Perfect number is a number that the sum of all its dividers is the number itself. I.e 6 is a perfect number (1+2+3).

console.log('INPUT: ', 6)
console.log('EXPECTED: true')
console.log('ACTUAL: ', isPerfect(6))
console.log('INPUT: ', 7)
console.log('EXPECTED: false')
console.log('ACTUAL: ', isPerfect(7))
console.log('~~~~~~~~~~~~~')

function isPerfect(num) {
  var divider = 1
  var dividersSum = 0

  while (divider <= Math.ceil(num / 2)) {
    if (num % divider === 0) dividersSum += divider
    divider++
  }

  return dividersSum === num
}
// iii. Read a number from the user. Store it in a variable called max. The function should print all the perfect numbers and all the Armstrong numbers that are smaller than max.

// printSpecialNumbers()

function printSpecialNumbers() {
  var max = +prompt('Enter a number')
  for (var i = 0; i < max; i++) {
    if (isArmstrong(i)) console.log('the number ' + i + ' is an Armstrong number')
    if (isPerfect(i)) console.log('the number ' + i + ' is an Perfect number')
  }
}
`,
  },
  30: {
    name: "30.js",
    title: "Print the Longer String",
    content: `<p>Read two names from the user and print the longer one.</p>`,
    solution: `printLongestName()
function printLongestName() {
    var name1 = prompt('Enter first name')
    var name2 = prompt('Enter second name')
    var longestName = name1
    if (name2.length > name1.length) {
        longestName = name2
    }
    console.log('The longest name is:', longestName);
}
`,
  },
  31: {
    name: "31.js",
    title: "Basic String Manipulation",
    content: `<p>Read a string from the user and print:</p>
<ol type="a">
    <li>Its length.</li>
    <li>Its first and last characters.</li>
    <li>The string in all uppercase and then, in all lowercase letters.</li>
</ol>`,
    solution: `var str = prompt('Enter a string')
console.log('Length:', str.length);
console.log('First Character:', str.charAt(0) + 'Last Character:', str.charAt(str.length - 1));
console.log('UpperCase:', str.toUpperCase());
console.log('LowerCase:', str.toLowerCase());`,
  },
  32: {
    name: "32.js",
    title: "Reverse a String",
    content: `<p>Read a string from the user and print it backwards using a loop.</p>`,
    solution: `
var str = prompt('Enter a string')
var reversedStr = ''

for (var i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i)
}
console.log('The backward str is:', reversedStr);
`,
  },
  33: {
    name: "33.js",
    title: "Vowels (a, e, i, o, u)",
    content: `<p>Write the following functions:</p>
<ol>
    <li><span class="code">printVowelsCount(str)</span>- which receives a string and prints how many times each vowel appears.</li>
    <li><span class="code">flipCase</span>- which gets a string and changes the vowels to lowercase letters, and the rest to uppercase letters.</li>
    <li><span class="code">doubleVowels</span>- which gets a string and doubles all the vowels in it.</li>
</ol>`,
    solution: `
const VOWELS = 'aeiouAEIOU';

console.log('INPUT: TelAvivBeach');
console.log(
  'EXPECTED:\n Char a appears 1 times\n Char e appears 2 times\n Char i appears 1 times\n Char o appears 0 times\n Char u appears 0 times\n Char A appears 1 times\n Char E appears 0 times\n Char I appears 0 times\n Char O appears 0 times\n Char U appears 0 times'
);
console.log('ACTUAL:');
printVowelsCount('TelAvivBeach');

function printVowelsCount(str) {
  for (var i = 0; i < VOWELS.length; i++) {
    var currVowel = VOWELS.charAt(i);
    var vowelCount = 0;
    for (var j = 0; j < str.length; j++) {
      var char = str.charAt(j);
      if (currVowel === char) {
        vowelCount++;
      }
    }
    console.log('Char', currVowel, 'appears', vowelCount, 'times');
  }
}

console.log('\n====================\n');

// b. Write a function that gets a string and changes the vowels to lowercase letters,
// and the rest to uppercase letters (GiZiM GiDoo).

// console.log('INPUT: gizim gidoo');
// console.log('EXPECTED: GiZiM GiDoo');
console.log('ACTUAL:', flipCase('gizim gidoo'));

function flipCase(str) {
  var res = '';
  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i);
    char = (VOWELS.includes(char)) ? char.toLowerCase() : char.toUpperCase();
    res += char;
  }
  return 'The selective case string is: ' + res;
}

console.log('\n====================\n');

// c. Write a function that gets a string and doubles all the vowels in it.
// Test the functions using the inputs: “aeiouAEIOU” “TelAvivBeach"

console.log('INPUT - aeiouAEIOU');
console.log('EXPECTED - aaeeiioouuAAEEIIOOUU');
console.log('ACTUAL - ', changeToDoubleVowels('aeiouAEIOU'));

console.log('INPUT - TelAvivBeach');
console.log('EXPECTED - TeelAAviivBeeaach');
console.log('ACTUAL - ', changeToDoubleVowels('TelAvivBeach'));

function changeToDoubleVowels(str) {
  var doubleVowelStr = '';
  var char = '';
  for (var i = 0; i < str.length; i++) {
    char = str.charAt(i);
    if (VOWELS.includes(char)) {
      doubleVowelStr += char;
    }
    doubleVowelStr += char;
  }
  return 'The double vowels string is: ' + doubleVowelStr;
}
`,
  },
  34: {
    name: "34.js",
    title: "myIndexOf()",
    content: `<p>Implement a function named <span class="code">myIndexOf(str, searchStr)</span> which receives two strings.</p>
<p>The function returns the index of the second string within the first, or -1  if it wasn't found (do not use the built-in <span class="code">indexOf()</span>function… ). </p>`,
    solution: `
console.log('INPUT: abbcd,bc')
console.log('EXPECTED: 2')
console.log('ACTUAL: ', myIndexOf1('abbcd', 'bc'))

console.log('INPUT: hello index, idx')
console.log('EXPECTED: -1')
console.log('ACTUAL: ', myIndexOf('hello index', 'idx'))

function myIndexOf(str, searchStr) {
  for (var i = 0; i <= str.length - searchStr.length; i++) {
    if (str.substring(i, i + searchStr.length) === searchStr) {
      return i
    }
  }
  return -1
}



// without substring:
function myIndexOf1(str, searchStr) {
  var currLength = 0
  var index = 0
  for (var i = 0; i < str.length; i++) {
    while (str.charAt(i + index) === searchStr.charAt(index)) {
      currLength++
      if (currLength === searchStr.length) return i
      index++
    }
    currLength = 0
    index = 0
  }
  return -1
}
`,
  },
  35: {
    name: "35.js",
    title: "Encrypt",
    content: `<p>Write the function <span class="code">encrypt</span> which gets a string and encrypts it.</p>
<ol>
    <li>Implement the function by replacing each character <span class="code">code</span> with <span class="code">code + 5</span>.</li>
    <li>Write the function <span class="code">decrypt</span> which decrypts a message.</li>
</ol>`,
    solution: `
console.log('INPUT - rrr')
console.log('EXPECTED - www',)
console.log('ACTUAL - ', encrypt('Zrr'))

console.log('INPUT - www')
console.log('EXPECTED - rrr',)
console.log('ACTUAL - ', decrypt('Zww'))


function encrypt(str) {
    var encryptedStr = ''
    for (var i = 0; i < str.length; i++) {
        var currCharCode = str.charCodeAt(i)
        var encryptedChar = String.fromCharCode(currCharCode + 5)
        encryptedStr += encryptedChar
    }
    return encryptedStr
}

function decrypt(str) {
    var encryptedStr = ''
    for (var i = 0; i < str.length; i++) {
        var currCharCode = str.charCodeAt(i)
        var encryptedChar = String.fromCharCode(currCharCode - 5)
        encryptedStr += encryptedChar
    }
    return encryptedStr
}

// BONUS:
console.log('INPUT - abc,true',)
console.log('EXPECTED - fgh ',)
console.log('ACTUAL - ', encode('abc', true))

console.log('INPUT - fgh,false',)
console.log('EXPECTED - abc ',)
console.log('ACTUAL - ', encode('fgh', false))

function encode(str, isEncrypt) {
    var encryptedStr = ''
    var diff = isEncrypt ? 5 : -5
    for (var i = 0; i < str.length; i++) {
        var currCharCode = str.charCodeAt(i)
        var encryptedChar = String.fromCharCode(currCharCode + diff)
        encryptedStr += encryptedChar
    }
    return encryptedStr
}`,
  },
  36: {
    name: "36.js",
    title: "Longest and Shortest Names",
    content: `<p>Implement a function which receives a string of comma separated names, for example: <span class="console">'Igal,Moshe,Haim'</span>, and prints the longest and shortest names.</p>`,
    solution: `
console.log('INPUT - d,igaladbdmgmne,haim')
console.log('EXPECTED - The longest name is: igaladbdmgmne and the shortest name is: da')
console.log('ACTUAL - ', printNames('igaladbdmgmne,haim,da'))

function printNames(namesStr) {
  var longestName = ''
  var shortestName = namesStr
  var commaIdx = 0
  namesStr += ','

  for (var i = 0; i < namesStr.length; i = commaIdx + 1) { // Omri - corrected to 'commaIdx+1'
    commaIdx = namesStr.indexOf(',', i)
    var name = namesStr.substring(i, commaIdx) // Omri - corrected to 'substring(i, commaIdx)'

    if (name.length > longestName.length) longestName = name
    if (name.length < shortestName.length) shortestName = name
  }
  return 'The longest name is: ' + longestName + ' and the shortest name is: ' + shortestName
}
`,
  },
  37: {
    name: "37.js",
    title: "Generate Password",
    content: `<p>Implement a function named <span class="code">generatePass(passLength)</span> which generates a password of the specified length. The password is made out of random digits and letters.</p>`,
    solution: `
console.log(generatePass(5))

function generatePass(passLength) {
  var charStr = 'absdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  var password = ''
  for (var i = 0; i < passLength; i++) {
    var randomIdx = getRandomInteger(0, charStr.length)
    password += charStr.charAt(randomIdx)
  }
  return password
}

// Another option:
// var str = '';
// for (var i = 0; i < passLength; i++) {
//     str += String.fromCharCode(97 + Math.floor(Math.random() * 26)); //just lowercase
// }
// return str


function getRandomInteger(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}`,
  },
  38: {
    name: "38.js",
    title: "Bigger than 100",
    content: `<p>Implement a function named <span class="code">biggerThan100</span>. It receives an array of numbers and returns a new array containing only the numbers which are greater than 100.</p>`,
    solution: `
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
}`,
  },
  39: {
    name: "39.js",
    title: "Count Votes",
    content: `<p>Implement a function named <span class="code">countVotes(votes, candidateName)</span> which counts how many votes a candidate received.</p>
<p>For example: if the votes array looks like this: <span class="console">['Nuli', 'Pingi', 'Uza', 'Shabi', 'Uza']</span>, and the candidate name is <span class="console">'Uza'</span>, the function returns <span class="console">2</span>.</p>`,
    solution: `var votes = ['Nuli', 'Pingi', 'Uza', 'Shabi', 'Uza']
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
}`,
  },
  40: {
    name: "40.js",
    title: "Lorem Ipsum",
    content: `<p>Implement a function named <span class="code">getLoremIpsum(wordsCount)</span> which return a sentence with random dummy text (google: lorem ipsum...) </p>
<p>Here are the steps you may use to solve this: </p>
<ol type="a">
    <li class="mb-m">Create a string or an array of all the characters in the English alphabet.</li>
    <li class="mb-m">Write a function named <span class="code">getWord()</span> which returns a single word made of 3 - 5 random letters. The length of the word will be generated randomly. </li>
    <li class="mb-m">Call this function in a loop to create a sentence.</li>
</ol>`,
    solution: `
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
// }`,
  },
  41: {
    name: "41.js",
    title: "Digits to Words",
    content: `<p>Write a function named sayNum(num) which prints each digit in words</p> 
<p>For example: </p>
<p><span class="console">123 => One Two Three.</span></p>
<p><span class="console">7294 => Seven Two Nine Four.</span></p>`,
    solution: `
const digitNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

console.log('INPUT:', 325)
console.log('EXPECTED:', 'three two five')
console.log('ACTUAL:', sayNum(325))

console.log('INPUT:', 0)
console.log('EXPECTED:', 'zero')
console.log('ACTUAL:', sayNum(0))

function sayNum(num) {
    var numsStr = '' + num //'325'
    var digitStr = ''
    for (var i = 0; i < numsStr.length; i++) {
        var currNum = +numsStr.charAt(i) // 3
        digitStr += digitNames[currNum] + ' '
    }
    return digitStr.trim()
}

// WITH SWITCH
function sayNum2(num) {
    var str = '';
    num += '';
    for (var i = 0; i < num.length; i++) {
        var currNum = num[i];
        switch (currNum) {
            case '1':
                str += 'One ';
                break;
            case '2':
                str += 'Two ';
                break;
            case '3':
                str += 'Three ';
                break;
            case '4':
                str += 'Four ';
                break;
            case '5':
                str += 'Five ';
                break;
            case '6':
                str += 'Six ';
                break;
            case '7':
                str += 'Seven ';
                break;
            case '8':
                str += 'Eight ';
                break;
            case '9':
                str += 'Nine ';
                break;
            case '0':
                str += 'Zero ';
                break;
        }
    }
    return str.trim();
}
`,
  },
  42: {
    name: "42.js",
    title: "Starts with...",
    content: `<p>Write a function named startsWithS, which receives an array of names and returns a new array, containing only those names which begin with S.</p>
<p>Now, refactor your function to work on any letter by adding a letter parameter. Rename the function to reflect its new functionality.</p>`,
    solution: `
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
}`,
  },
  43: {
    name: "43.js",
    title: "Sum Arrays",
    content: `<ol>
    <li>
        <p>Write the function  sumArrays  which receives two arrays and returns their sum.</p>
        <p>For example: <span class="console">[1, 4, 3] & [2, 5, 1, 9] => [3, 9, 4, 9]</span></p>
    </li>
    <li>
        <p>Now, read these arrays from the user (until the number 999 is entered)</p>
    </li>
</ol>`,
    solution: `
// var nums1 = getArrayFromUser()
// var nums2 = getArrayFromUser()
var nums1 = [1, 4, 3]
var nums2 = [2, 5, 1, 9]

console.log('INPUT: ', nums1, nums2)
console.log('ACTUAL: ', sumArrays(nums1, nums2))

function sumArrays(nums1, nums2) {
  var shorterNums = nums1.length > nums2.length ? nums2.slice() : nums1.slice()
  var longerNums = nums1.length > nums2.length ? nums1.slice() : nums2.slice()

  for (var i = 0; i < shorterNums.length; i++) {
    if (isNaN(longerNums[i]) || isNaN(shorterNums[i]))
      return console.error('One of the inputs in the array is not a number')
    longerNums[i] += shorterNums[i]
  }
  return longerNums
}

function getArrayFromUser() {
  const MSG = 'Please enter a number, (enter 999 to QUIT)'
  var num = +prompt(MSG)
  var nums = []
  while (num !== 999) {
    nums.push(num)
    num = +prompt(MSG)
  }
  return nums
}

//Todo expected result
// function getArrayFromUser(){
//     return [2, 5, 1, 9]
// }
`,
  },
  44: {
    name: "44.js",
    title: "printNumsCount()",
    content: `<p>Write the function <span class="code">printNumsCount(nums)</span>. The parameter <span class="code">nums</span>, is an array of integers in the range 0 - 3 like this one:</p>
<table class="array">
    <tr>
        <td>3</td>
        <td>2</td>
        <td>0</td>
        <td>2</td>
        <td>2</td>
        <td>0</td>
        <td>3</td>
    </tr>
</table>
<p>The function prints how many times each of these numbers appears in the array.</p>`,
    solution: `
var nums = [3, 2, 0, 2, 3];

console.log("INPUT: ", nums);
console.log("EXPECTED: [1, 0, 2, 2]");
console.log("ACTUAL:", printNumsCount(nums));

nums = [3, 2, 0, 2, 8];
console.log("INPUT: ", nums);
console.log("EXPECTED: Not valid number");
console.log("ACTUAL:", printNumsCount(nums));

nums = [3, 2, 0, 2, -3];
console.log("INPUT: ", nums);
console.log("EXPECTED: Not valid number");
console.log("ACTUAL:", printNumsCount(nums));

function printNumsCount(nums) {
  var counts = [0, 0, 0, 0];
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    if (isNaN(num) || num < 0 || num > 3) return "Not valid number";
    counts[num]++;
  }

  // for (var i = 0; i < counts.length; i++) {
  //   console.log('The number', i, 'appears', counts[i], 'times');
  // }

  return counts;
}
`,
  },
  45: {
    name: "45.js",
    title: "Remove Duplicates",
    content: `<p>Write the function <span class="code">removeDuplicates(nums)</span>. The parameter <span class="code">nums</span>, is an array of integers in the range 0 - 5 like this one:</p>
<table class="array">
    <tr class="array">
        <td>5</td>
        <td>4</td>
        <td>5</td>
        <td>2</td>
        <td>1</td>
        <td>2</td>
        <td>4</td>
    </tr>
</table>`,
    solution: `
var nums = [5, 1, 5, 1, 0]

console.log('INPUT: [5, 1, 5, 1, 0]')
console.log('EXPECTED: [5, 1, 0]')
console.log('ACTUAL:', removeDuplicates(nums))

nums = []
console.log('INPUT: []')
console.log('EXPECTED: Array is empty')
console.log('ACTUAL:', removeDuplicates(nums))

function removeDuplicates(nums) {
  var numCounters = [0, 0, 0, 0, 0, 0]
  var res = []
  for (var i = 0; i < nums.length; i++) {
    if (numCounters[nums[i]] === 0) {
      numCounters[nums[i]]++
      res.push(nums[i])
    }
  }
  return res
}

//Another Option o(n^2)
// function removeDuplicates(nums) {
//     var res = []
//     for (var i = 0; i < nums.length; i++) {
//         if (!res.includes(nums[i])) res.push(nums[i])
//     }
//     return res
// }

// Another option - Avior (o^2) - no includes
// function removeDuplicates(nums) {
//   var res = []

//   for (var i = 0; i < nums.length; i++) {
//     var isDuplicate = false
//     var currNum = nums[i]
//     for (var j = 0; j < res.length; j++) {
//       if (currNum === res[j]) {
//         isDuplicate = true
//         break
//       }
//     }

//     if (!isDuplicate) res.push(currNum)
//   }
//   return res
// }
`,
  },
  46: {
    name: "46.js",
    title: "Multiply Nums",
    content: `<ol>
    <li>
        <p>Write the function: <span class="code">multBy(nums, multiplier)</span> which modifies the <span class="code">nums</span> array so that each of its items, is multiplied by <span class="code">multiplier</span>.</p>
        <p>The function returns the modified array.</p>
    </li>
    <li>
        <p>Add another parameter to this function named <span class="code">isImmutable</span>. When this parameter is true, use <span class="code">array.slice()</span>to perform the function's calculation on a copy of the array, and leave the original array unchanged.</p>
    </li>
</ol>`,
    solution: `
var nums = [5, -4, 0, 1]

console.log('INPUT:', nums, 'multiplier', 3)
console.log('EXPECTED: [15, -12, 0, 3]')
console.log('ACTUAL:', multBy(nums, 3, true))

function multBy(nums, multiplier) {
    for (var i = 0; i < nums.length; i++) {
        nums[i] *= multiplier;
    }
    return nums
}

//Part b
function multBy(nums, multiplier, isImmutable) {
    var newNums = isImmutable ? nums.slice() : nums
    for (var i = 0; i < newNums.length; i++) {
        newNums[i] *= multiplier
    }
    return newNums
}

`,
  },
  47: {
    name: "47.js",
    title: "mySplit()",
    content: `<p>Implement your own version of the built-in javaScript <span class="code">split</span> function - <span class="code">mySplit(str, sep)</span>.</p>
<p>Test it with different types of strings and separators:</p>
<ul>
    <li>You can try – <span class="console">'Japan,Russia,Sweden'</span> or <span class="console">'1-800-652-0198'</span></li>
    <li>You can assume that the separator (delimiter) is a single character.</li>
    <li>BONUS: don't assume that, e.g: <span class="console">'A|||B|||C'</span></li>
</ul>`,
    solution: `
var strings = 'Japan,Russia,Sweden,USA,Israel'
var seperator = ','
var splitted = mySplit(strings, seperator)
console.log(splitted)

strings = 'Japan|||Ru👑ssia|||Swe👑den|||US👑A|||👑Israel'
seperator = '|||'
splitted = mySplit(strings, seperator)
console.log(splitted)

// Option (without bonus):
function mySplit(str, sep) {
  var words = []
  var startIdx = 0
  str += sep
  for (var i = 0; i < str.length; i++) {
    var currChar = str.charAt(i)
    if (currChar === sep) {
      var word = str.substring(startIdx, i)
      words.push(word)
      startIdx = i + 1
    }
  }
  return words
}

// Option (without bonus) using indexOf and substring
function mySplit(str, sep) {
  var strs = []
  str += sep
  for (var i = 0; i < str.length; i++) {
    var sepIdx = str.indexOf(sep)
    var word = str.substring(0, sepIdx)
    strs.push(word)
    str = str.substring(sepIdx + sep.length)
  }
  return strs
}

// Option (without bonus) using if else inside for loop:
// function mySplit(str, sep) {
//   var strs = []

//   var word = ''
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] !== sep && i !== str.length - 1) {
//       word += str[i]
//     } else {
//       strs.push(word)
//       word = ''
//       console.log(str.indexOf(sep));
//     }
//   }
//   console.log('strs', strs);
//   return strs
// }

// Option (with bonus) using the indexOf with 2 parameters
// (second is where to start searching):
function mySplit(str, sep) {
  var strs = [];
  var nextIdx;
  for (var i = 0; i < str.length; i = nextIdx + sep.length) {
    nextIdx = str.indexOf(sep, i);
    if (nextIdx === -1) {
      nextIdx = str.length;
    }
    var word = str.substring(i, nextIdx)
    strs.push(word);
  }
  return strs;
}

// Option (with bonus) using if else inside for loop:
// function mySplit(str, sep) {
//     str += sep
//     var word = ''
//     var strs = []
//     for (var i = 0; i < str.length; i++) {
//         if (str.substr(i, sep.length) === sep) {
//             i += sep.length - 1
//             strs.push(word)
//             word = ''
//         } else {
//             word += str.charAt(i)
//         }
//     }
//     return strs
// }
`,
  },
  48: {
    name: "48.js",
    title: "sortNums()",
    content: `<p>Implement the function <span class="code">sortNums(nums)</span>. This function returns a sorted version of the original nums array. It works by looping through the array, finding the minimum, splicing it out, and adding it to a new array.</p>`,
    solution: `
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
}`,
  },
  49: {
    name: "49.js",
    title: "getNthLargest()",
    content: `<p>Write the function <span class="code">getNthLargest(nums, nthNum)</span> to get the n<sup>th</sup> largest element from an array of unique numbers.</p>
<p>For example: <span class="code">getNthLargest([ 7, 56, 88, 92, 99, 89, 11], 3)</span></p>
<p>will return: <span class="console">89</span></p>`,
    solution: `
console.log('INPUT: [7, 56, 23, 88, 92, 99, 89, 11]');
console.log('EXPECTED: 89');
console.log('ACTUAL: ', getNthLargest([7, 56, 23, 88, 92, 99, 89, 11], 3));

console.log('INPUT: [7, 56, 101, 100, 92, 99, 89, 11]');
console.log('EXPECTED: 100');
console.log('ACTUAL: ', getNthLargest([7, 56, 101, 100, 92, 99, 89, 11], 2));

console.log('INPUT: [7, 56, 101, 100, 92, 99, 89, 11]');
console.log('EXPECTED: 100');
console.log('ACTUAL: ', getNthLargestBonus([7, 56, 101, 100, 92, 99, 89, 11], 2));


function getNthLargest(nums, nthNum) {
    nums.sort(function (num1, num2) {
        return num1 - num2
    })
    return nums[nums.length - nthNum]
}

// function getNthLargest(nums, nthNum) {
//     nums.sort(function (num1, num2) {
//         return num2 - num1
//     })
//     return nums[nthNum - 1]
// }

function getNthLargestBonus(nums, nthNum) {
    var currLargestNumIdx = 0
    for (var i = 0; i < nthNum; i++) {
        var currLargestNum = -Infinity
        for (var j = 0; j < nums.length; j++) {
            if (nums[j] > currLargestNum) {
                currLargestNum = nums[j]
                currLargestNumIdx = j
      `,
  },
  50: {
    name: "50.js",
    title: "Making Water",
    content: `<p>Making Water! Let's imagine that we have the following atoms:</p>
<section class="two-column-table">
    <p>Hydrogen</p>     <p>H</p>
    <p>Boron</p>        <p>B</p>
    <p>Carbon</p>       <p>C</p>
    <p>Nitrogen</p>     <p>N</p>
    <p>Oxygen</p>       <p>O</p>
    <p>Fluorine</p>     <p>F</p>
</section>
<ul>
    <li>Create an array of letters, each one representing one type of atom from the above list.</li>
    <li>Pick random atoms from the array to create molecules of 3 atoms.</li>
    <li>Stop when you get <span class="console">'HOH'</span> (Water – two Hydrogen atoms and one Oxygen atom).</li>
    <li>Print the number of attempts it took to get <span class="console">'HOH'</span>.</li>
</ul>`,
    solution: `
console.log('It took', makeWater(), 'tries to get HOH')

function makeWater() {
  var atoms = ['H', 'B', 'C', 'N', 'O', 'F']
  var count = 0
  var currMol = ''

  while (currMol !== 'HOH') {
    currMol = ''
    for (var i = 0; i < 3; i++) {
      currMol += atoms[getRandomInt(0, atoms.length)]
    }
    count++
  }
  return count
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}
`,
  },
  51: {
    name: "51.js",
    title: "Object Map",
    content: `<p>Implement the function <span class="code">countWordApperances(txt)</span> which returns an object map.</p>
<ul>
    <li>The object keys will be the words in the string.</li>
    <li>The values will be the number of times each of these words appears in the string.</li>
</ul>`,
    solution: `
var str = 'puki ben david and muki ben david'
console.log('INPUT: puki ben david and muki ben david')
console.log('EXPECTED:', { puki: 1, ben: 2, david: 2, and: 1, muki: 1 })
console.log('ACTUAL: ', countWordApperances(str))

function countWordApperances(txt) {
  var words = txt.split(' ')
  var wordCountMap = {}

  for (var i = 0; i < words.length; i++) {
    var currWord = words[i]
    if (!wordCountMap[currWord]) {
      wordCountMap[currWord] = 0
    }
    wordCountMap[currWord]++

    // // short-if
    // wordCountMap[currWord] = (wordCountMap[currWord]) ? wordCountMap[currWord] + 1 : 1

    // // short-circuit
    // wordCountMap[currWord] = (wordCountMap[currWord] + 1) || 1
  }
  return wordCountMap
}

`,
  },
  52: {
    name: "52.js",
    title: "Monsters",
    content: `<p>Create an array of monsters with 4 monsters (use a <span class="code">createMonsters()</span> function).</p>
<ol>
    <li>Each monster object should have the following keys –</li>
    <li>Implement the following functions:</li>
    <li>Write the function: <span class="code">findMostPowerful(monsters)</span>.</li>
    <li>Write the function: <span class="code">breedMonsters(monsterId1, monsterId2)</span>.</li>
</ol>`,
    solution: `
var gNextId = 100
var gMonsters = createMonsters()

console.log('gMonsters', gMonsters);
// console.log('get by id', getMonsterById(101));
updateMonster(101, 9000);
console.log('updated monsters', gMonsters);
console.log('most powerful monster', findMostPowerfulSort(gMonsters));
console.log('breeded monster', breedMonsters(101, 102));
removeMonster(103);
console.log('gMonsters after remove', gMonsters);

function createMonsters() {
    var monsters = []
    for (var i = 0; i < 4; i++) {
        var monster = createMonster(getRandomStr())
        // var monster = createMonster(prompt('monster name: '))

        monsters.push(monster)
    }
    return monsters
}

function createMonster(name = 'monster', power = 100) {
    return {
        id: gNextId++,
        name: name,
        power: power
    }
}

function getMonsterById(id) {
    for (var i = 0; i < gMonsters.length; i++) {
        if (gMonsters[i].id === id) return gMonsters[i]
    }
    return null
}

function removeMonster(id) {
    for (var i = 0; i < gMonsters.length; i++) {
        if (gMonsters[i].id === id) {
            gMonsters.splice(i, 1)
            break
        }
    }
}

function updateMonster(id, newPower) {
    var monster = getMonsterById(id)
    if (monster) monster.power = newPower
    return monster
}

function findMostPowerful(monsters) {
    if (!monsters.length) return null
    var mostPowerfulMonster = monsters[0]
    for (var i = 1; i < monsters.length; i++) {
        if (monsters[i].power > mostPowerfulMonster.power) {
            mostPowerfulMonster = monsters[i]
        }
    }
    return mostPowerfulMonster
}

//Another option O(N*log(N))
function findMostPowerfulSort(monsters) {
    if (!monsters.length) return null
    monsters.sort(function (monster1, monster2) {
        return monster2.power - monster1.power
    })
    return monsters[0]
}

function breedMonsters(monsterId1, monsterId2) {
    var monster1 = getMonsterById(monsterId1)
    var monster2 = getMonsterById(monsterId2)
    var name = monster1.name.substring(0, Math.floor(monster1.name.length / 2)) +
        monster2.name.substring(Math.floor(monster2.name.length / 2), monster2.name.length)
    var power = (monster1.power + monster2.power) / 2
    var breededMonster = createMonster(name, power)
    return breededMonster
}


function getRandomStr() {
    const LETTERS = 'abcdefghijklmnopqrstuvwxyz'
    var str = '';
    for (var i = 0; i < getRandomInteger(3, 5); i++) {
        str += LETTERS.charAt(getRandomInteger(0, 23));
    }
    return str;
}
function getRandomInteger(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) + min));
}`,
  },
  53: {
    name: "53.js",
    title: "Students",
    content: `<ol>
    <li>Create a students array – use the same algorithm as before and name it <span class="code">createStudents()</span>.</li>
    <li>Read a student name from the user until 'quit' is entered. Populate the students array with student objects.</li>
    <li>Read 3 grades for each student (each student should have a grades array).</li>
    <li>Write the function <span class="code">calcAverageGrade(student)</span>.</li>
    <li>Write the function <span class="code">findWorstStudent(students)</span>.</li>
    <li>Write the function <span class="code">factorGrades(student)</span>.</li>
    <li>Write the function <span class="code">forEach(students, func)</span>.</li>
</ol>`,
    solution: `
var gNextId = 101
var gStudents = createStudents()
console.log('gStudents : ', gStudents)

enterGrades(gStudents)
// calcAvg(gStudents)

var worstStudent = findWorstStudent(gStudents)
console.log('worstStudent : ', worstStudent)

worstStudent = findWorstStudent2(gStudents) // Using forEach()...
console.log('worstStudent : ', worstStudent)

// The sort challenge was removed from this exercise...

// sortStudentsByGrade(gStudents)
// console.log('After sort gStudents : ', gStudents)

function createStudents() {
	var students = []
	// var studentName = prompt('Enter student name. type quit to exit')
	// while (studentName !== 'quit') {
	// var student = createStudent(studentName)
	students.push(createStudent('tal'), createStudent('tal'), createStudent('tal'))
	// studentName = prompt('Enter student name. type quit to exit')
	// }
	return students
}

function createStudent(name) {
	var student = {
		id: gNextId++,
		name: name,
	}
	return student
}

function enterGrades(students) {
	for (var i = 0; i < students.length; i++) {
		var currStudent = students[i]
		currStudent.grades = [20, 20, 20] || readGrades(currStudent.name)
		calcAvg(currStudent)
	}
}

function readGrades(studentName) {
	var grades = []
	for (var i = 0; i < 3; i++) {
		var grade = +prompt('Enter a grade for ' + studentName)
		grades.push(grade)
	}
	return grades
}

function calcAvg(student) {
	var sum = 0
	var gradesLength = student.grades.length
	for (var i = 0; i < gradesLength; i++) {
		sum += student.grades[i]
	}
	student.avg = sum / gradesLength
}

// function calcAvg(students) {
// 	for (var i = 0; i < students.length; i++) {
// 		var currStudent = students[i]
// 		var sum = 0
// 		var gradesLength = currStudent.grades.length
// 		for (var j = 0; j < gradesLength; j++) {
// 			sum += currStudent.grades[j]
// 		}
// 		currStudent.avg = sum / gradesLength
// 	}
// }

function findWorstStudent(students) {
	var worstStudent = null

	for (var i = 0; i < students.length; i++) {
		var currStudent = students[i]
		if (!worstStudent || currStudent.avg < worstStudent.avg) {
			worstStudent = currStudent
		}
	}
	return worstStudent
}

// The sort challenge was removed from this exercise...

// function sortStudentsByGrade(students) {
//   students.sort((s1, s2) => {
//     return s2.avg - s1.avg
//   })
// }

// function sortStudentsByName(students) {
//   students.sort(function (s1, s2) {
//     if (s1.name.toLowerCase() > s2.name.toLowerCase()) return 1
//     if (s2.name.toLowerCase() > s1.name.toLowerCase()) return -1
//     return 0
//   })
// }

// New version from CaJan23

/*
// Exercise 53 - Students
// Create a students array – use the same algorithm as before and name it createStudents().
// Read a student name from the user until ‘quit’ is entered. Populate the students array with student objects.
// Read 3 grades for each student (each student should have a grades array).
// Write the function calcAvergaeGrade(student).
// Write the function factorGrades(student), which adds 5% to all of the student’s grades.
// Write the function findWorstStudent(students).
// Write the function forEach(students, func), which receives an array of student objects and a pointer to a function. It loops through the array and invokes the function, passing it the current element of the array on each iteration.
// Use forEach() to invoke factorGrades(student) on all students in the array.
// Find a way to imlement findWorstStudent(students) using forEach().
*/

function factorGrades(student) {
	for (var i = 0; i < student.grades.length; i++) {
		student.grades[i] *= 1.05
	}
	if (student.avg) calcAvg(student)
}

function forEach(students, func) {
	for (var i = 0; i < students.length; i++) {
		func(students[i])
	}
}
console.table(gStudents)
forEach(gStudents, factorGrades)
console.table(gStudents)

function findWorstStudent2(students) {
	var gMinAvg = Infinity
	var worstStudent = null

	forEach(students, (student) => {
		if (student.avg < gMinAvg) {
			gMinAvg = student.avg
			worstStudent = student
		}
	})
	return worstStudent
}
`,
  },
  54: {
    name: "54.js",
    title: "Airline",
    content: `<ol>
    <li>Build a data structure for an airline company with the entities listed below.</li>
    <li>Create an array of 5 passengers.</li>
    <li>Create an array of 2 planes.</li>
    <li>Create an array of 2 flights.</li>
    <li>Write the functions:</li>
</ol>`,
    solution: `
var gPassengers = []
createPassengers()

var gPlanes = [createPlane('707', 5), createPlane('DC10', 3)]

var gFlights = [
  createFlight('Israel', 'CosteRica', gPlanes[0]),
  createFlight('Israel', 'SriLanka', gPlanes[1]),
]


console.log('Booking flights...')
bookFlight(gFlights[1], gPassengers[3])
bookFlight(gFlights[1], gPassengers[0])
bookFlight(gFlights[0], gPassengers[3])
bookFlight(gFlights[1], gPassengers[2])
bookFlight(gFlights[1], gPassengers[4])
bookFlight(gFlights[0], gPassengers[2])
bookFlight(gFlights[0], gPassengers[4])
bookFlight(gFlights[0], gPassengers[0])
bookFlight(gFlights[0], gPassengers[1])

var frequentFlyers = getFrequentFlyers()

console.log('Passengers:', gPassengers)
console.log('Flights:', gFlights)
console.log('the frequent flyers are:', frequentFlyers)

function bookFlight(flight, passenger) {
  if (isFullyBooked(flight)) {
    console.log('Sorry', passenger.fullname, 'this flight is fully booked.')
    return
  }
  passenger.flights.push(flight)
  flight.passengers.push(passenger)
  console.log('Flight successfully booked!')
}

function getFrequentFlyers() {
  var max = 0
  var frequentFlyers = [] // Required in case array is zero length

  for (var i = 0; i < gPassengers.length; i++) {
    var currPassenger = gPassengers[i]
    var flightCount = currPassenger.flights.length

    if (flightCount > max) {
      frequentFlyers = [currPassenger]
      max = flightCount
    } else if (flightCount === max) {
      frequentFlyers.push(currPassenger)
    }
  }
  return frequentFlyers
}

// Helper functions
function isFullyBooked(flight) {
  return flight.passengers.length >= flight.plane.seatCount
}

function createPlane(model, seatCount) {
  return {
    model: model,
    seatCount: seatCount,
  }
}

function createPassenger(fullname) {
  return {
    id: makeId(7),
    fullname: fullname,
    flights: [],
  }
}

function createFlight(departure, detination, plane) {
  return {
    date: 0,
    departure: departure,
    detination: detination,
    plane: plane,
    passengers: [],
  }
}

function createPassengers() {
  var names = ['Muki', 'Shuki', 'Puki', 'Lala', 'Baba']

  for (var i = 0; i < names.length; i++) {
    gPassengers.push(createPassenger(names[i]))
  }
}

function makeId(length) {
  var text = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}
`,
  },
  55: {
    name: "55.js",
    title: "Matrix Operations",
    content: `<p>Fill up a matrix with numbers, and then, write the following functions: </p>
<ol type="1">
    <li><span class="code">sumCol(mat, colIdx)</span></li>
    <li><span class="code">sumRow(mat, rowIdx)</span></li>
    <li><span class="code">findMax(mat, colIdx)</span></li>
    <li><span class="code">findAvg(mat)</span></li>
    <li><span class="code">sumArea(mat, rowIdxStart, rowIdxEnd, colIdxStart, colIdxEnd)</span></li>
</ol>`,
    solution: `}
`,
  },
  56: {
    name: "56.js",
    title: "Symmetric Matrices",
    content: `<p>A symmetric matrix is a matrix that passes this boolean condition: </p>
<pre class="code">mat[i][j] === mat[j][i]</pre>
<p>Write the function <span class="code">checkIfSymmetric(mat)</span>.</p>`,
    solution: `
var symmetricMat = [
  [1, 2, 3],
  [2, 0, 2],
  [3, 2, 8],
]



var asymmetricMat = [
  [2, 0, 0, 0, 0],
  [0, 5, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
]

console.log('INPUT:')
console.table(symmetricMat)
console.log('EXPECTED: true')
console.log('ACTUAL:', checkIfSymmetric(symmetricMat))
console.log('INPUT:')
console.table(asymmetricMat)
console.log('EXPECTED: false')
console.log('ACTUAL:', checkIfSymmetric(asymmetricMat))

function checkIfSymmetric(mat) {
  for (var i = 0; i < mat.length - 1; i++) {
    for (var j = i + 1; j < mat[0].length; j++) {
      if (mat[i][j] !== mat[j][i]) return false
      console.log(mat[i][j]);
    }
  }
  return true
}

`,
  },
  57: {
    name: "57.js",
    title: "find the matrix mode",
    content: `<p>In statistics, the most common value in a set of data, is called the mode (שכיח).</p>
<ol>
    <li>Write the function <span class="code">findMode(mat)</span>. The function prints the number which appears most frequently in a matrix.</li>
    <li>BONUS: If there are ties, e.g. both 47 and 53 appeared 17 times, print both of them, or all of them.</li>
</ol>`,
    solution: `
var mat = [
  [4, 5, 2, 0],
  [5, 1, 2, 4],
  [3, 0, 9, 4],
  [5, 6, 8, 1],
]

//{4:3,5:3} -->key:the num in the matrix, value - times appear
console.log('INPUT:')
console.table(mat)
console.log('EXPECTED: The numbers: 4, 5 appeared 3 times')
console.log('ACTUAL:')
findMode(mat)

function findMode(mat) {
  var itemCountMap = {}
  //mat.length height - num of arrays inside
  //mat[0].length width - num of cols in a row , row length
  for (var i = 0; i < mat.length; i++) {
    for (var j = 0; j < mat[0].length; j++) {
      var item = mat[i][j]
      if (!itemCountMap[item]) itemCountMap[item] = 0
      itemCountMap[item]++
    }
  }
  console.log('itemCountMap', itemCountMap)
  //No Bonus
  // var mostFrequentItem
  // var max = 0

  // for (var item in itemCountMap) {
  //   if (itemCountMap[item] > max) {
  //     max = itemCountMap[item]
  //     mostFrequentItem = item
  //   }
  // }
  // console.log('The number: ' + mostFrequentItem + ' appeared ' + max + ' times')

  //   BONUS
  var mostFrequentItems = []
  var max = 0

  for (var item in itemCountMap) {
    if (itemCountMap[item] > max) {
      max = itemCountMap[item]
      mostFrequentItems = [item]
    } else if (itemCountMap[item] === max) {
      mostFrequentItems.push(item)
    }
  }

  console.log('The numbers: ' + mostFrequentItems.join(', ') + ' appeared ' + max + ' times')
}

//shani solution Bonus
// function findModes(mat) {
//   var countMap = {}
//   var modes = []
//   var mode = -Infinity
//   for (var i = 0; i < mat.length; i++) {
//     for (var j = 0; j < mat[0].length; j++) {
//       var num = mat[i][j]
//       countMap[num] = countMap[num] + 1 || 1
//       if (countMap[num] > mode) {
//         modes = [num]
//         mode = countMap[num]
//       } else if (countMap[num] === mode) modes.push(num)
//     }
//   }
//   console.log('countMap', countMap)
//   console.log('The modes are', modes)
// }
`,
  },
  58: {
    name: "58.js",
    title: "Magic Square",
    content: `<p>For a matrix to be a Magic Square, it must meet the following conditions:</p>
<ol>
    <li>It must be a square.</li>
    <li>The sums of the rows, columns, and the two diagonals should all be equal.</li>
</ol>`,
    solution: `
console.log('58 - is magic square? ')
const mat1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
const mat2 = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
]

const res1 = isMagicSquare(mat1)
console.log('INPUT: ', mat1)
console.log('EXPECTED:', false)
console.log('ACTUAL:', res1)
console.table(mat1);

const res2 = isMagicSquare(mat2)
console.log('INPUT: ', mat2)
console.log('EXPECTED:', true)
console.log('ACTUAL:', res2)
console.table(mat2);


function isMagicSquare(mat) {
    if (!isSquare(mat)) return false
    var sumMainD = getSumPrDiagonal(mat)
    var sumSecD = getSumSecDiagonal(mat)
    if (sumMainD !== sumSecD) return false
    for (var i = 0; i < mat.length; i++) {
        if (getSumRow(mat, i) !== sumSecD) return false
        if (getSumCol(mat, i) !== sumSecD) return false
    }
    return true
}

function isSquare(mat) {
    for (var i = 0; i < mat.length; i++) {
        if (mat.length !== mat[i].length) return false
    }
    return true
}

function getSumRow(mat, rowIdx) {
    var sum = 0
    for (var i = 0; i < mat.length; i++) {
        sum += mat[rowIdx][i]
    }
    return sum
}

function getSumCol(mat, colIdx) {
    var sum = 0
    for (var i = 0; i < mat.length; i++) {
        sum += mat[i][colIdx]
    }
    return sum
}

function getSumPrDiagonal(mat) {
    var sum = 0
    for (var i = 0; i < mat.length; i++) {
        sum += mat[i][i]
    }
    return sum
}

function getSumSecDiagonal(mat) {
    var sum = 0
    for (var i = 0; i < mat.length; i++) {
        sum += mat[i][mat[i].length - 1 - i]
    }
    return sum
}
`,
  },
  59: {
    name: "59.js",
    title: "BINGO",
    content: `<p>Your challenge is to implement the famous game of BINGO. In this version of the game, there are two players. Numbers are drawn at random, and each player marks the number if it appears in his board. The first player to mark all the numbers on his board, wins.</p>`,
    solution: `
// initialize nums array to get numbers from:
const NUMS_LENGTH = 100
var gNums
var gPlayers = [
  {
    name: 'miki',
    hitCounts: 0,
    board: createBingoBoard(),
    accomplishments: [],
  },
  {
    name: 'shuki',
    hitCounts: 0,
    board: createBingoBoard(),
    accomplishments: [],
  },
]
var gPlayInterval

// playBingo()

// Interval for the game :
function playBingo() {
  resetNums()
  gPlayInterval = setInterval(playTurn, 1000)
}
//a. create board function : initialize the board for each user

function createBingoBoard(rowLength = 5) {
  // nums array for creating the board:
  resetNums() // put in gNums nums between 1-99
  //start to build the board:
  var board = []
  for (var i = 0; i < rowLength; i++) {
    board.push([])
    for (var j = 0; j < rowLength; j++) {
      //option 1:
      // adding random index from nums that points to a specific value that didn't got yet
      //   var randomIdx = getRandomInt(0, gNums.length - 1)
      //   board[i].push({ value: gNums[randomIdx], isHit: false })
      //   // removing the number from gNums to assure it won't pick again
      //   gNums.splice(randomIdx, 1)

      // option 2: After they actualized the drawNum function :
      board[i].push({ value: drawNum(), isHit: false })
      // board[i][j] = { value: drawNum(), isHit: false };
    }
  }
  console.log('board objects', board)
  printBoard(board)
  resetNums()
  return board
}

// b. print board function: priniting the board values to the console

function printBoard(board) {
  var boardNums = []
  for (var i = 0; i < board.length; i++) {
    boardNums.push([])
    for (var j = 0; j < board[i].length; j++) {
      boardNums[i].push(board[i][j].value)
      if (board[i][j].isHit) boardNums[i][j] += 'v'
    }
  }

  console.table(boardNums)
}

//c. play bingo function : the main function - works until one of the player wins. using an playInterval or while loop .
function playTurn() {
  var isVictory = false
  var calledNum = drawNum()
  // while (!isVictory){ // before using interval
  // console.clear()
  for (var i = 0; !isVictory && i < gPlayers.length; i++) {
    var player = gPlayers[i]
    markBoard(player, calledNum)
    isVictory = checkBingo(player)
    if (isVictory) {
      console.log('Victory!', player)
      greetPlayer(player, 'all the board!')
      clearInterval(gPlayInterval)
      // console.log('player1', gPlayers[0].board);
      // console.log('player2', gPlayers[1].board);
      // break
    }
    //}
  }
}

// b.i.1 draw num function: returns random number from the global array without duplications

function drawNum() {
  // option 1: numbers can be duplicated:
  // return getRandomInt(0, NUMS_LENGTH)

  // option 2: numbers cannot be duplicated:
  var randomIdx = getRandomInt(0, gNums.length - 1)
  var num = gNums.splice(randomIdx, 1)
  return num[0]
}

// d. markBoard function : mark a specific cell if the player have the same value on his board
// and then call to printBoard in order to show the changes
function markBoard(player, calledNum) {
  var { board } = player
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      // check if there is a match between cell and calledNum :
      var currCell = board[i][j]
      //option 1: if numbers can be duplicated:
      //   if (calledNum === currCell.value && !currCell.isHit) {
      //     currCell.isHit = true
      //     hitCounts++
      //   }

      //option 2: if there is a global array - numbers cannot be duplicated
      if (calledNum === currCell.value) {
        console.log(calledNum === currCell.value)
        currCell.isHit = true
        player.hitCounts++
        break
      }
    }
    //print the board:
    printBoard(board)
  }
}

//e. checkBingo function : check whether the player finished parts of the board and returns boolan wheather he finished all of it

function checkBingo(player) {
  // without board checking:
  // return player.hitCounts === NUMS_LENGTH

  // with board checking :
  var { board } = player
  if (!player.accomplishments.includes('mainD') && checkMainDiagonal(board)) {
    greetPlayer(player, 'Main diagonal copmpleted!')
    player.accomplishments.push('mainD')
  }
  if (!player.accomplishments.includes('secD') && checkSecDiagonal(board)) {
    greetPlayer(player, 'Secondary diagonal copmpleted!')
    player.accomplishments.push('secD')
  }
  for (var i = 0; i < board.length; i++) {
    if (!player.accomplishments.includes('row' + i) && checkRow(board, i)) {
      greetPlayer(player, ' row- ' + i + ' copmpleted!')
      player.accomplishments.push('row' + i)
    }
    if (!player.accomplishments.includes('col' + i) && checkCol(board, i)) {
      greetPlayer(player, ' col- ' + i + ' copmpleted!')
      player.accomplishments.push('col' + i)
    }
  }
  return player.hitCounts === 25
}

// h.3 greet player function : greet the player with the given accomplishment
function greetPlayer(player, accomplishment) {
  console.log(player.name + ' has completed the ' + accomplishment)
}

// e.2: resetNums function : initializing the global array gNums
function resetNums() {
  //initialize nums from 1 - 100:
  gNums = []
  for (var i = 1; i <= NUMS_LENGTH; i++) {
    gNums.push(i)
  }
}

// helper functions :
function checkRow(board, rowIdx) {
  for (let i = 0; i < board.length; i++) {
    if (!board[rowIdx][i].isHit) return false
  }
  return true
}

function checkCol(board, colIdx) {
  for (let i = 0; i < board.length; i++) {
    if (!board[i][colIdx].isHit) return false
  }
  return true
}

function checkMainDiagonal(board) {
  for (let i = 0; i < board.length; i++) {
    if (!board[i][i].isHit) return false
  }
  return true
}

function checkSecDiagonal(board) {
  for (let i = 0; i < board.length; i++) {
    if (!board[i][board[i].length - 1 - i].isHit) return false
  }
  return true
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}
`,
  },
  60: {
    name: "60.js",
    title: "Game of Life",
    content: `<p>The Game of Life is a simulation of how a population of creatures evolves from one generation to the next, based on a set of simple rules.</p>
<p>Here are the rules which govern the evolution of the colony:</p>
<ol>
    <li>if a creature has 0 – 2 neighboring creatures, it will die of loneliness and the cell which it occupies will become vacant in the next generation.</li>
    <li>if a cell has 3 – 5 occupied neighboring cells, it will have a creature in it in the next generation – either a newborn creature or the creature which previously occupied it.</li>
    <li>if a creature has 6 – 8 occupied neighboring creatures, it will suffocate and die, and the cell which it occupies will become vacant in the next generation.</li>
</ol>`,
    solution: `
// const TABLE_LENGTH = 10
const EMPTY = ''
const LIFE = '👼🏼'
const MAXGEN = 10

var gBoard = []
var gGenCnt = 2

// var gBoard = []
console.clear()
// var gGenCnt = 2
makeFirstBoard()
var interID = setInterval(play, 1000)
setTimeout(() => clearInterval(interID), 8000)

function renderBoard(gBoard) {
    // console.clear()
    console.table(gBoard)
}

function makeFirstBoard() {
    var rowNum = +prompt('Enter number of rows')
    var colNum = +prompt('Enter number of columns')
    for (var i = 0; i < rowNum; i++) {
        gBoard[i] = []
        for (var j = 0; j < colNum; j++) {
            if (Math.random() > 0.7) gBoard[i][j] = LIFE
            else gBoard[i][j] = EMPTY
        }
    }
    console.log('FIRST GENERATION')
    renderBoard(gBoard)
}

function runGeneration() {
    var nextGen = gBoard.slice()
    for (var i = 0; i < gBoard.length; i++) {
        var row = gBoard[i]
        for (var j = 0; j < row.length; j++) {
            var cell = row[j]
            var neighborNum = getNeighbors(i, j)
            if (cell === LIFE) {
                if (neighborNum <= 2) nextGen[i][j] = EMPTY
                else if (neighborNum >= 6) nextGen[i][j] = EMPTY
            } else {
                if (neighborNum >= 3 && neighborNum <= 5) nextGen[i][j] = LIFE
            }
        }
    }
    return nextGen
}

function getNeighbors(rowId, colId) {
    var neighborCnt = 0
    for (var i = rowId - 1; i <= rowId + 1; i++) {
        // if i is out of bounderies - go to the next i
        if (i < 0 || i > gBoard.length - 1) continue //continue to the next i

        for (var j = colId - 1; j <= colId + 1; j++) {
            // if j is out of bounderies - go to the next j:
            if (j < 0 || j > gBoard[0].length - 1) continue // continue to the next j.

            if (i === rowId && j === colId) continue

            if (gBoard[i][j] === LIFE) neighborCnt++
        }
    }
    return neighborCnt
}

function isOver() {
    for (var i = 0; i < gBoard.length; i++) {
        const row = gBoard[i]
        for (var j = 0; j < gBoard[0].length; j++) {
            const col = gBoard[i][j]
            if (col === LIFE) return false
        }
    }
    return true
}

function play() {
    console.log('GENERATION  ', gGenCnt)
    gBoard = runGeneration()
    renderBoard(gBoard)
    if (isOver()) {
        console.log('LIFE IS GONE ! !')
        clearInterval(interID)
    }
    gGenCnt++
}
`,
  },
};
