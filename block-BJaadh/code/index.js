// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]


*/


// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(string.join(' '));

// - Add two new words in the strings array "called" and "sentance"
var newstring = [...strings];

newstring.push("called", "sentance");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(newstring.join(" "));
// - Remove the first word in the array (strings)
let removestring = [...strings];
removestring.unshift();
// - Find all the words that contain 'is' use string method 'includes'
function is(string) {
    if (string.includes("is")) return string;
}
let isPresent = strings.filter(is);
// - Find all the words that contain 'is' use string method 'indexOf'
function is(string) {
    if (string.indexOf("is") != -1) return string;
}
// - Check if all the numbers in numbers array are divisible by three use array method (every)
function isNumberDivisibleByThree(number) {
    if (number % 3 == 0) return number;
}
let isDivisibleByThree = numbers.every(isNumberDivisibleByThree);

// -  Sort Array from smallest to largest
function sortArray(number) {
    return number.sort((a, b) => a - b);
}
let sortedArray = numbers.sort(sortArray);
// - Remove the last word in strings

function removeLastWord(string) {
    return string.pop();
}
let removeLastWord = strings.pop();

// - Find largest number in numbers
function findMaxNumber(number) {
    return Math.max(...number);
}
let maxNumber = numbers.reduce(findMaxNumber);
// - Find longest string in strings

function findMaxString(string) {
    return Math.max(...string);
}
let maxString = strings.reduce(findMaxString);
// - Find all the even numbers
function evenNumber(number) {
    if (number % 2 == 0) return number;
}
let evenNumber = numbers.filter(evenNumber);
// - Find all the odd numbers
function oddNumber(number) {
    if (number % 2 != 0) return number;
}
let oddNumber = numbers.filter(oddNumber);
// - Place a new word at the start of the array use (unshift)
let newWord = [...strings];
newWord.unshift("Hello");
// - Make a subset of numbers array [18,9,7,11]
numbers.slice(3, 7);
// - Make a subset of strings array ['a','collection']
strings.slice(2, 4);
// - Replace 12 & 18 with 1221 and 1881
[...numbers].splice(numbers.indexOf(12), 1, 1221);
[...numbers].splice(numbers.indexOf(18), 1, 1881);
// - Replace words in strings array with the length of the word
let stringLength = strings.map((string) => string.length);
// - Find the sum of the length of words using above question
stringLength.reduce((acc, cv) => {
    acc = acc + cv;
    return acc;
}, 0);
// - Customers Array
var customers = [
    { firstname: 'Joe', lastname: 'Blogs' },
    { firstname: 'John', lastname: 'Smith' },
    { firstname: 'Dave', lastname: 'Jones' },
    { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let customersName = customers.filter((customer) =>
    customer.firstname.startsWith("J")
);

// - Create new array with only first name
let customersFirstName = customers.map((customer) => customer.firstname);

// - Create new array with all the full names (ex: "Joe Blogs")
let customersFullName = customers.map(
    (customer) => `${customer.firstname} ${customer.lastname}`
);

// - Sort the array created above alphabetically
customersFullName.sort();

// - Create a new array that contains only user who has at least one vowel in the firstname.
let customersVowel = customers.filter((customer) => {
    if (
        customer.firstname.toLowerCase().includes("a") ||
        customer.firstname.toLowerCase().includes("e") ||
        customer.firstname.toLowerCase().includes("i") ||
        customer.firstname.toLowerCase().includes("o") ||
        customer.firstname.toLowerCase().includes("u")
    ) {
        return true;
    } else return false;
});