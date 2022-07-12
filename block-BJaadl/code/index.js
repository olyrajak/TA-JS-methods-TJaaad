let words = [
    'mystery',
    'brother',
    'aviator',
    'crocodile',
    'pearl',
    'orchard',
    'crackpot',
    'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord() {
    let longestWord = words[0];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

// - Convert the above array "words" into an array of length of word instead of word.
function convertToLength() {
    let lengthOfWords = [];
    for (let i = 0; i < words.length; i++) {
        lengthOfWords.push(words[i].length);
    }
    return lengthOfWords;
}

// - Create a new array that only contains word with atleast one vowel.
function filterVowels() {
    let vowels = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] === 'a' || words[i][j] === 'e' || words[i][j] === 'i' || words[i][j] === 'o' || words[i][j] === 'u') {
                vowels.push(words[i]);
            }
        }
    }
    return vowels;
}

// - Find the index of the word "rhythm"
function findRhythmIndex() {
    for (let i = 0; i < words.length; i++) {
        if (words[i] === 'rhythm') {
            return i;
        }
    }
}
// - Create a new array that contians words not starting with vowel.

function notContainsVowel(words) {
    let notVowel = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i][0] !== 'a' && words[i][0] !== 'e' && words[i][0] !== 'i' && words[i][0] !== 'o' && words[i][0] !== 'u') {
            notVowel.push(words[i]);
        }
    }
    return notVowel;
}

// - Create a new array that contianse words not ending with vowel
function notContainsVowelEnd(words) {
    let notVowelEnd = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i][words[i].length - 1] !== 'a' && words[i][words[i].length - 1] !== 'e' && words[i][words[i].length - 1] !== 'i' && words[i][words[i].length - 1] !== 'o' && words[i][words[i].length - 1] !== 'u') {
            notVowelEnd.push(words[i]);
        }
    }
    return notVowelEnd;
}
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
function multiplyBy3(numbers) {
    let multiplied = [];
    for (let i = 0; i < numbers.length; i++) {
        multiplied.push(numbers[i] * 3);
    }
    return multiplied;
}

// - Create a new array that contains only even numbers
function evenNumbers(numbers) {
    let even = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            even.push(numbers[i]);
        }
    }
    return even;
}
// - Create  a new array that contains only odd numbers.
function oddNumbers(numbers) {
    let odd = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            odd.push(numbers[i]);
        }
    }
    return odd;
}
// - Create a new array that should have true for even number and false for odd numbers.
function createArray(numbers) {
    let array = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            array.push(true);
        } else {
            array.push(false);
        }
    }
    return array;
}
// - Sort the above number in assending order.
function sortNumbers(numbers) {
    numbers.sort(function(a, b) { return a - b });
    return numbers;
}
// - Does sort mutate the original array?
function sortMutate(numbers) {
    numbers.sort(function(a, b) { return a - b });
    return numbers;
}

// - Find the sum of the numbers in the array.
function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers() {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

let strings = [
    'seat',
    'correspond',
    'linen',
    'motif',
    'hole',
    'smell',
    'smart',
    'chaos',
    'fuel',
    'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.


function averageWordLength() {
    let sum = 0;
    for (let i = 0; i < strings.length; i++) {
        sum += strings[i].length;
    }
    return sum / strings.length;
}