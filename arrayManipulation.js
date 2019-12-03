// arrays fundamentals

// how do you add something to the beginning of an array?
// How do you add something to the end of the array?

// return an array that has consecutive letters from a - g in it given 
// let myArray =[ 'b', 'c', 'd'];

let alphabetArray =[ 'b', 'c', 'd'];

alphabetArray.push('g')
alphabetArray.unshift('a')

console.log(alphabetArray)

//[ 'a', 'b', 'c', 'd', 'g' ]

// ES6 approach
// modify this array so that it has consecutive letters from 1 - 5 in it
let numArray =[ 2, 3, 4];
// Add a 1 to the front of the array
numArray = [1,...numArray]

// Add a 5 to the back of the array
numArray = [...numArray, 5]


// THE SHORTEST WAY!!!!
shortNumArray = [1,...numArray, 5]
// Return [ 1, 2, 3, 4, 5 ]
console.log(shortNumArray)

