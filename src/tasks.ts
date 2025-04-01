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
    solution: `function greetUser(userName) {
  alert('Hello ' + userName + '!');
}`,
  },
  15: {
    name: "15.js",
    title: "Sum of two Numbers",
    content: `<p>Write a function which receives two numbers and returns their sum</p>`,
    solution: `function sum(a, b) {
  return a + b;
}`,
  },
  16: {
    name: "16.js",
    title: "Even and Odd",
    content: `<p>Write a function named <span class="code">isEven(num)</span> which receives a number, and returns <span class="code">true</span>if the number is even, and <span class="code">false</span>if it is odd.</p>`,
    solution: `function isEven(num) {
  return num % 2 === 0;
}`,
  },
  17: {
    name: "17.js",
    title: "Get the Bigger Num",
    content: `<p>Write a function named <span class="code">getBigger</span>  which receives two numbers and returns the bigger one.</p>`,
    solution: `function getBigger(a, b) {
  return Math.max(a, b);
}`,
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
    solution: `function isAbove18(name, age) {
  const isAdult = age >= 18;
  alert(isAdult ? name + ' is over 18!' : name + ' is too young.');
  console.log(isAdult);
  return isAdult;
}`,
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
    solution: `function checkNumbers() {
  for (let i = 0; i < 10; i++) {
    const num = Number(prompt('Enter a number:'));
    console.log(num + ' is ' + (num % 2 === 0 ? 'Even' : 'Odd'));
  }
}`,
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
    solution: `function analyzeNumbers() {
  let numbers = [];
  let sum = 0;
  
  for (let i = 0; i < 10; i++) {
    const num = Number(prompt('Enter a number:'));
    numbers.push(num);
    sum += num;
  }
  
  console.log('Max:', Math.max(...numbers));
  console.log('Min:', Math.min(...numbers));
  console.log('Average:', sum / 10);
}`,
  },
  21: {
    name: "21.js",
    title: "Divisible by 3",
    content: `<p>Read numbers from the user, until the number 999 is entered. For each number:</p>
<ul>
    <li>Print if it is divisible by 3.</li>
    <li>If it is bigger by more than 10 from the previous number, print a suitable message.</li>
</ul>`,
    solution: `function checkDivisibleBy3() {
  let prevNum = 0;
  let num;
  
  while (num !== 999) {
    num = Number(prompt('Enter a number (999 to exit):'));
    if (num === 999) break;
    
    console.log(num + ' is ' + (num % 3 === 0 ? 'divisible by 3' : 'not divisible by 3'));
    if (num > prevNum + 10) console.log('This number is more than 10 bigger than the previous one!');
    prevNum = num;
  }
}`,
  },
  22: {
    name: "22.js",
    title: "myPow()",
    content: `<p>Write a function named <span class="code">myPow()</span> which receives 2 parameters: a base (<span class="code">n</span>), and an exponent (<span class="code">exp</span>) and returns <span class="code">n<sup>exp</sup></span></p>
<p>Sample unit testing:</p>
<p><span class="console">INPUT: 2, 3</span></p>
<p><span class="console">EXPECTED: 8</span></p>
<p><span class="console">ACTUAL: 8</span></p>`,
    solution: `function myPow(n, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= n;
  }
  return result;
}`,
  },
  23: {
    name: "23.js",
    title: "Factorial!",
    content: `<p>Write the function <span class="code">getFactorial</span> which receives a number and returns <span class="math">n!</span> (Google 'factorial' if you are not sure what the mathematical definition of it is).</p>`,
    solution: `function getFactorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * getFactorial(n - 1);
}`,
  },
  24: {
    name: "24.js",
    title: "myAbs()",
    content: `<p>Try playing around with the function <span class="code">Math.abs()</span> and read its documentation on <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs">MDN</a>. Implement a function called <span class="code">myAbs()</span>, which mimics the behavior of <span class="code">Math.abs()</span>.</p>`,
    solution: `function myAbs(num) {
  return num < 0 ? -num : num;
}`,
  },
  25: {
    name: "25.js",
    title: "getRandomInt()",
    content: `<p>Write A function named <span class="code">getRandomInt(min, max)</span>. The function should generate a random integer between <span class="code">min</span> and up to, but not including, <span class="code">max</span>.</p>
<p>Tip: use <span class="code">Math.Random()</span> and <span class="code">Math.Floor()</span>.</p>`,
    solution: `function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}`,
  },
  26: {
    name: "26.js",
    title: "Ascending Random Numbers",
    content: `<p>Write a program which generates 10 ascending random numbers (each number is greater than the previously generated number).</p>
<p class="tight-paragraph">The first number n , should be in the range      <span class="math">0 &ndash; 1000</span>,</p>
<p class="tight-paragraph">and each subsequent number, should be  in the range      <span class="math">(n+1) &ndash; (n+1000)</span></p>`,
    solution: `function generateAscendingRandom() {
  let numbers = [];
  let lastNum = 0;
  
  for (let i = 0; i < 10; i++) {
    const min = i === 0 ? 0 : lastNum + 1;
    const max = i === 0 ? 1000 : lastNum + 1000;
    lastNum = getRandomInt(min, max);
    numbers.push(lastNum);
  }
  
  return numbers;
}`,
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
    solution: `function getAsterisks(length) {
  return '*'.repeat(length);
}

function getTriangle(height) {
  let result = '';
  for (let i = 1; i <= height; i++) {
    result += getAsterisks(i) + '\\n';
  }
  for (let i = height - 1; i > 0; i--) {
    result += getAsterisks(i) + '\\n';
  }
  return result;
}

function getMusicEqualizer(rowCount) {
  let result = '';
  for (let i = 0; i < rowCount; i++) {
    result += getAsterisks(getRandomInt(1, 11)) + '\\n';
  }
  return result;
}

function getBlock(rows, cols) {
  let result = '';
  for (let i = 0; i < rows; i++) {
    result += getAsterisks(cols) + '\\n';
  }
  return result;
}

function getBlockOutline(rows, cols) {
  let result = '';
  for (let i = 0; i < rows; i++) {
    if (i === 0 || i === rows - 1) {
      result += getAsterisks(cols) + '\\n';
    } else {
      result += '*' + ' '.repeat(cols - 2) + '*\\n';
    }
  }
  return result;
}`,
  },
  28: {
    name: "28.js",
    title: "Greatest Common Devisor",
    content: `<p class="mb-m">Write a program which calculates the greatest common divisor (GCD) of two positive integers.</p>
<p class="mb-l">For example: if the input are  6 and 15,  the calculation's result should be 3.</p>`,
    solution: `function gcd(a, b) {
  let smaller = Math.min(a, b);
  for (let i = smaller; i > 0; i--) {
    if (a % i === 0 && b % i === 0) return i;
  }
  return 1;
}`,
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
    solution: `function digitManipulation(numStr) {
  // Print each digit
  for (let digit of numStr) console.log(digit);
  
  // Sum of digits
  const sum = numStr.split('').reduce((acc, digit) => acc + Number(digit), 0);
  console.log('Sum:', sum);
  
  // Multiplication of digits
  const product = numStr.split('').reduce((acc, digit) => acc * Number(digit), 1);
  console.log('Product:', product);
  
  // Sum first and last
  console.log('First + Last:', Number(numStr[0]) + Number(numStr[numStr.length - 1]));
  
  // Swap first and last
  const swapped = numStr[numStr.length - 1] + numStr.slice(1, -1) + numStr[0];
  console.log('Swapped:', swapped);
  
  // Check symmetric
  const isSymmetric = numStr === numStr.split('').reverse().join('');
  console.log('Is symmetric:', isSymmetric);
  
  // Reverse
  console.log('Reversed:', numStr.split('').reverse().join(''));
}`,
  },
  30: {
    name: "30.js",
    title: "Print the Longer String",
    content: `<p>Read two names from the user and print the longer one.</p>`,
    solution: `function printLongerName() {
  const name1 = prompt('Enter first name:');
  const name2 = prompt('Enter second name:');
  console.log(name1.length >= name2.length ? name1 : name2);
}`,
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
    solution: `function stringManipulation(str) {
  console.log('Length:', str.length);
  console.log('First char:', str[0]);
  console.log('Last char:', str[str.length - 1]);
  console.log('Uppercase:', str.toUpperCase());
  console.log('Lowercase:', str.toLowerCase());
}`,
  },
  32: {
    name: "32.js",
    title: "Reverse a String",
    content: `<p>Read a string from the user and print it backwards using a loop.</p>`,
    solution: `function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log(reversed);
}`,
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
    solution: `function printVowelsCount(str) {
  const vowels = 'aeiouAEIOU';
  const count = {};
  for (let char of str) {
    if (vowels.includes(char)) {
      count[char] = (count[char] || 0) + 1;
    }
  }
  console.log(count);
}

function flipCase(str) {
  const vowels = 'aeiouAEIOU';
  return str.split('').map(char => 
    vowels.includes(char) ? char.toLowerCase() : char.toUpperCase()
  ).join('');
}

function doubleVowels(str) {
  const vowels = 'aeiouAEIOU';
  return str.split('').map(char => 
    vowels.includes(char) ? char + char : char
  ).join('');
}`,
  },
  34: {
    name: "34.js",
    title: "myIndexOf()",
    content: `<p>Implement a function named <span class="code">myIndexOf(str, searchStr)</span> which receives two strings.</p>
<p>The function returns the index of the second string within the first, or -1  if it wasn't found (do not use the built-in <span class="code">indexOf()</span>function… ). </p>`,
    solution: `function myIndexOf(str, searchStr) {
  for (let i = 0; i <= str.length - searchStr.length; i++) {
    let found = true;
    for (let j = 0; j < searchStr.length; j++) {
      if (str[i + j] !== searchStr[j]) {
        found = false;
        break;
      }
    }
    if (found) return i;
  }
  return -1;
}`,
  },
  35: {
    name: "35.js",
    title: "Encrypt",
    content: `<p>Write the function <span class="code">encrypt</span> which gets a string and encrypts it.</p>
<ol>
    <li>Implement the function by replacing each character <span class="code">code</span> with <span class="code">code + 5</span>.</li>
    <li>Write the function <span class="code">decrypt</span> which decrypts a message.</li>
</ol>`,
    solution: `function encrypt(str) {
  return str.split('').map(char => 
    String.fromCharCode(char.charCodeAt(0) + 5)
  ).join('');
}

function decrypt(str) {
  return str.split('').map(char => 
    String.fromCharCode(char.charCodeAt(0) - 5)
  ).join('');
}`,
  },
  36: {
    name: "36.js",
    title: "Longest and Shortest Names",
    content: `<p>Implement a function which receives a string of comma separated names, for example: <span class="console">'Igal,Moshe,Haim'</span>, and prints the longest and shortest names.</p>`,
    solution: `function analyzeNames(namesStr) {
  const names = namesStr.split(',');
  let shortest = names[0];
  let longest = names[0];
  
  for (let name of names) {
    if (name.length < shortest.length) shortest = name;
    if (name.length > longest.length) longest = name;
  }
  
  console.log('Shortest:', shortest);
  console.log('Longest:', longest);
}`,
  },
  37: {
    name: "37.js",
    title: "Generate Password",
    content: `<p>Implement a function named <span class="code">generatePass(passLength)</span> which generates a password of the specified length. The password is made out of random digits and letters.</p>`,
    solution: `function generatePass(passLength) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  for (let i = 0; i < passLength; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
}`,
  },
  38: {
    name: "38.js",
    title: "Bigger than 100",
    content: `<p>Implement a function named <span class="code">biggerThan100</span>. It receives an array of numbers and returns a new array containing only the numbers which are greater than 100.</p>`,
    solution: `function biggerThan100(arr) {
  return arr.filter(num => num > 100);
}`,
  },
  39: {
    name: "39.js",
    title: "Count Votes",
    content: `<p>Implement a function named <span class="code">countVotes(votes, candidateName)</span> which counts how many votes a candidate received.</p>
<p>For example: if the votes array looks like this: <span class="console">['Nuli', 'Pingi', 'Uza', 'Shabi', 'Uza']</span>, and the candidate name is <span class="console">'Uza'</span>, the function returns <span class="console">2</span>.</p>`,
    solution: `function countVotes(votes, candidateName) {
  return votes.filter(vote => vote === candidateName).length;
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
    solution: `function getLoremIpsum(wordsCount) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  function getWord() {
    const length = Math.floor(Math.random() * 3) + 3; // 3-5 letters
    let word = '';
    for (let i = 0; i < length; i++) {
      word += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return word;
  }
  
  const words = [];
  for (let i = 0; i < wordsCount; i++) {
    words.push(getWord());
  }
  
  return words.join(' ');
}`,
  },
  41: {
    name: "41.js",
    title: "Digits to Words",
    content: `<p>Write a function named sayNum(num) which prints each digit in words</p> 
<p>For example: </p>
<p><span class="console">123 => One Two Three.</span></p>
<p><span class="console">7294 => Seven Two Nine Four.</span></p>`,
    solution: `function sayNum(num) {
  const digitNames = ['Zero', 'One', 'Two', 'Three', 'Four', 
                     'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const digits = num.toString().split('');
  return digits.map(digit => digitNames[digit]).join(' ');
}`,
  },
  42: {
    name: "42.js",
    title: "Starts with...",
    content: `<p>Write a function named startsWithS, which receives an array of names and returns a new array, containing only those names which begin with S.</p>
<p>Now, refactor your function to work on any letter by adding a letter parameter. Rename the function to reflect its new functionality.</p>`,
    solution: `function startsWithLetter(names, letter) {
  return names.filter(name => name[0].toUpperCase() === letter.toUpperCase());
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
    solution: `function sumArrays(arr1, arr2) {
  const maxLength = Math.max(arr1.length, arr2.length);
  const result = [];
  
  for (let i = 0; i < maxLength; i++) {
    result.push((arr1[i] || 0) + (arr2[i] || 0));
  }
  
  return result;
}

function getArrayFromUser() {
  const arr = [];
  let num;
  while (num !== 999) {
    num = Number(prompt('Enter a number (999 to finish):'));
    if (num !== 999) arr.push(num);
  }
  return arr;
}`,
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
    solution: `function printNumsCount(nums) {
  const counts = [0, 0, 0, 0];
  for (let num of nums) {
    counts[num]++;
  }
  console.log(counts);
}`,
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
    solution: `function removeDuplicates(nums) {
  const seen = new Set();
  return nums.filter(num => {
    if (seen.has(num)) return false;
    seen.add(num);
    return true;
  });
}`,
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
    solution: `function multBy(nums, multiplier, isImmutable = false) {
  const arr = isImmutable ? nums.slice() : nums;
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= multiplier;
  }
  return arr;
}`,
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
    solution: `function mySplit(str, sep) {
  const result = [];
  let current = '';
  
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + sep.length) === sep) {
      result.push(current);
      current = '';
      i += sep.length - 1;
    } else {
      current += str[i];
    }
  }
  
  if (current) result.push(current);
  return result;
}`,
  },
  48: {
    name: "48.js",
    title: "sortNums()",
    content: `<p>Implement the function <span class="code">sortNums(nums)</span>. This function returns a sorted version of the original nums array. It works by looping through the array, finding the minimum, splicing it out, and adding it to a new array.</p>`,
    solution: `function sortNums(nums) {
  const sorted = [];
  const arr = nums.slice();
  
  while (arr.length > 0) {
    let minIndex = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) minIndex = i;
    }
    sorted.push(arr.splice(minIndex, 1)[0]);
  }
  
  return sorted;
}`,
  },
  49: {
    name: "49.js",
    title: "getNthLargest()",
    content: `<p>Write the function <span class="code">getNthLargest(nums, nthNum)</span> to get the n<sup>th</sup> largest element from an array of unique numbers.</p>
<p>For example: <span class="code">getNthLargest([ 7, 56, 88, 92, 99, 89, 11], 3)</span></p>
<p>will return: <span class="console">89</span></p>`,
    solution: `function getNthLargest(nums, nthNum) {
  const sorted = nums.slice().sort((a, b) => b - a);
  return sorted[nthNum - 1];
}`,
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
    solution: `function makeWater() {
  const atoms = ['H', 'B', 'C', 'N', 'O', 'F'];
  let attempts = 0;
  
  while (true) {
    attempts++;
    const molecule = Array(3).fill().map(() => atoms[Math.floor(Math.random() * atoms.length)]).join('');
    if (molecule === 'HOH') {
      console.log('Found water after', attempts, 'attempts!');
      break;
    }
  }
}`,
  },
  51: {
    name: "51.js",
    title: "Object Map",
    content: `<p>Implement the function <span class="code">countWordApperances(txt)</span> which returns an object map.</p>
<ul>
    <li>The object keys will be the words in the string.</li>
    <li>The values will be the number of times each of these words appears in the string.</li>
</ul>`,
    solution: `function countWordApperances(txt) {
  const words = txt.split(' ');
  const count = {};
  
  for (let word of words) {
    count[word] = (count[word] || 0) + 1;
  }
  
  return count;
}`,
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
    solution: `function createMonster(name, power) {
  return {
    id: Math.floor(Math.random() * 1000),
    name: name || 'Unknown',
    power: power || Math.floor(Math.random() * 100) + 1
  };
}

function createMonsters() {
  return Array(4).fill().map((_, i) => createMonster('Monster' + (i + 1)));
}

function getMonsterById(id) {
  return gMonsters.find(monster => monster.id === id);
}

function deleteMonster(id) {
  const index = gMonsters.findIndex(monster => monster.id === id);
  if (index !== -1) gMonsters.splice(index, 1);
}

function updateMonster(id, newPower) {
  const monster = getMonsterById(id);
  if (monster) monster.power = newPower;
}

function findMostPowerful(monsters) {
  return monsters.reduce((max, monster) => 
    monster.power > max.power ? monster : max
  );
}

function breedMonsters(monsterId1, monsterId2) {
  const m1 = getMonsterById(monsterId1);
  const m2 = getMonsterById(monsterId2);
  
  if (!m1 || !m2) return null;
  
  const name = m1.name.slice(0, Math.floor(m1.name.length/2)) + 
               m2.name.slice(Math.floor(m2.name.length/2));
  const power = Math.floor((m1.power + m2.power) / 2);
  
  return createMonster(name, power);
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
    solution: `function createStudent(name) {
  return {
    name,
    grades: []
  };
}

function calcAverageGrade(student) {
  return student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
}

function findWorstStudent(students) {
  return students.reduce((worst, student) => {
    const worstAvg = calcAverageGrade(worst);
    const studentAvg = calcAverageGrade(student);
    return studentAvg < worstAvg ? student : worst;
  });
}

function factorGrades(student) {
  student.grades = student.grades.map(grade => grade * 1.05);
}

function forEach(students, func) {
  for (let student of students) {
    func(student);
  }
}`,
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
    solution: `function createPlane(model, seatCount) {
  return {
    model,
    seatCount
  };
}

function createPassenger(fullName) {
  return {
    id: Math.floor(Math.random() * 9000000) + 1000000,
    fullName,
    flights: []
  };
}

function createFlight(date, departure, destination, plane) {
  return {
    date,
    departure,
    destination,
    plane,
    passengers: []
  };
}

function bookFlight(flight, passenger) {
  if (flight.passengers.length < flight.plane.seatCount) {
    flight.passengers.push(passenger);
    passenger.flights.push(flight);
    return true;
  }
  return false;
}

function getFrequentFlyers() {
  const maxFlights = Math.max(...gPassengers.map(p => p.flights.length));
  return gPassengers.filter(p => p.flights.length === maxFlights);
}

function isFullyBooked(flight) {
  return flight.passengers.length === flight.plane.seatCount;
}`,
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
    solution: `function sumCol(mat, colIdx) {
  return mat.reduce((sum, row) => sum + row[colIdx], 0);
}

function sumRow(mat, rowIdx) {
  return mat[rowIdx].reduce((sum, num) => sum + num, 0);
}

function findMax(mat, colIdx) {
  return Math.max(...mat.map(row => row[colIdx]));
}

function findAvg(mat) {
  const sum = mat.reduce((sum, row) => 
    sum + row.reduce((rowSum, num) => rowSum + num, 0), 0);
  return sum / (mat.length * mat[0].length);
}

function sumArea(mat, rowStart, rowEnd, colStart, colEnd) {
  let sum = 0;
  for (let i = rowStart; i <= rowEnd; i++) {
    for (let j = colStart; j <= colEnd; j++) {
      sum += mat[i][j];
    }
  }
  return sum;
}`,
  },
  56: {
    name: "56.js",
    title: "Symmetric Matrices",
    content: `<p>A symmetric matrix is a matrix that passes this boolean condition: </p>
<pre class="code">mat[i][j] === mat[j][i]</pre>
<p>Write the function <span class="code">checkIfSymmetric(mat)</span>.</p>`,
    solution: `function checkIfSymmetric(mat) {
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] !== mat[j][i]) return false;
    }
  }
  return true;
}`,
  },
  57: {
    name: "57.js",
    title: "find the matrix mode",
    content: `<p>In statistics, the most common value in a set of data, is called the mode (שכיח).</p>
<ol>
    <li>Write the function <span class="code">findMode(mat)</span>. The function prints the number which appears most frequently in a matrix.</li>
    <li>BONUS: If there are ties, e.g. both 47 and 53 appeared 17 times, print both of them, or all of them.</li>
</ol>`,
    solution: `function findMode(mat) {
  const count = {};
  
  // Count occurrences
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      count[mat[i][j]] = (count[mat[i][j]] || 0) + 1;
    }
  }
  
  // Find max count
  const maxCount = Math.max(...Object.values(count));
  
  // Find all numbers with max count
  const modes = Object.entries(count)
    .filter(([_, count]) => count === maxCount)
    .map(([num, _]) => Number(num));
  
  console.log('Mode(s):', modes);
  return modes;
}`,
  },
  58: {
    name: "58.js",
    title: "Magic Square",
    content: `<p>For a matrix to be a Magic Square, it must meet the following conditions:</p>
<ol>
    <li>It must be a square.</li>
    <li>The sums of the rows, columns, and the two diagonals should all be equal.</li>
</ol>`,
    solution: `function isMagicSquare(mat) {
  // Check if square
  if (mat.length !== mat[0].length) return false;
  
  const n = mat.length;
  const sum = sumRow(mat, 0);
  
  // Check rows
  for (let i = 1; i < n; i++) {
    if (sumRow(mat, i) !== sum) return false;
  }
  
  // Check columns
  for (let j = 0; j < n; j++) {
    if (sumCol(mat, j) !== sum) return false;
  }
  
  // Check main diagonal
  let diagonalSum = 0;
  for (let i = 0; i < n; i++) {
    diagonalSum += mat[i][i];
  }
  if (diagonalSum !== sum) return false;
  
  // Check secondary diagonal
  diagonalSum = 0;
  for (let i = 0; i < n; i++) {
    diagonalSum += mat[i][n-1-i];
  }
  if (diagonalSum !== sum) return false;
  
  return true;
}`,
  },
  59: {
    name: "59.js",
    title: "BINGO",
    content: `<p>Your challenge is to implement the famous game of BINGO. In this version of the game, there are two players. Numbers are drawn at random, and each player marks the number if it appears in his board. The first player to mark all the numbers on his board, wins.</p>`,
    solution: `function createBingoBoard() {
  const board = [];
  for (let i = 0; i < 5; i++) {
    board[i] = [];
    for (let j = 0; j < 5; j++) {
      board[i][j] = {
        value: i * 5 + j + 1,
        isHit: false
      };
    }
  }
  return board;
}

function printBingoBoard(board) {
  return board.map(row => 
    row.map(cell => cell.isHit ? cell.value + 'v' : cell.value)
      .join('\t')
  ).join('\\n');
}

function markBoard(player, calledNum) {
  for (let i = 0; i < player.board.length; i++) {
    for (let j = 0; j < player.board[i].length; j++) {
      if (player.board[i][j].value === calledNum && !player.board[i][j].isHit) {
        player.board[i][j].isHit = true;
        player.hitCount++;
        return true;
      }
    }
  }
  return false;
}

function checkBingo(player) {
  return player.hitCount === 25;
}

function drawNum() {
  const idx = Math.floor(Math.random() * gNums.length);
  return gNums.splice(idx, 1)[0];
}

function playBingo() {
  resetNums();
  let gameInterval = setInterval(playTurn, 1000);
  
  function playTurn() {
    const calledNum = drawNum();
    console.log('Called number:', calledNum);
    
    for (let player of gPlayers) {
      if (markBoard(player, calledNum)) {
        console.log(printBingoBoard(player.board));
        if (checkBingo(player)) {
          clearInterval(gameInterval);
          console.log(player.name + ' wins!');
          return;
        }
      }
    }
  }
}`,
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
    solution: `function countNeighbors(board, row, col) {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue;
      const newRow = row + i;
      const newCol = col + j;
      if (newRow >= 0 && newRow < board.length && 
          newCol >= 0 && newCol < board[0].length && 
          board[newRow][newCol] === '*') {
        count++;
      }
    }
  }
  return count;
}

function runGeneration(board) {
  const newBoard = board.map(row => [...row]);
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const neighbors = countNeighbors(board, i, j);
      const isAlive = board[i][j] === '*';
      
      if (isAlive) {
        if (neighbors <= 2 || neighbors >= 6) newBoard[i][j] = ' ';
      } else {
        if (neighbors >= 3 && neighbors <= 5) newBoard[i][j] = '*';
      }
    }
  }
  
  return newBoard;
}

function renderBoard(board) {
  console.clear();
  console.log(board.map(row => row.join('')).join('\\n'));
}`,
  },
};
