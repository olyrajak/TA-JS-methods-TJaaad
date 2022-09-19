Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
     sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
     let colors = ["red", "green", "blue"];
     colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
      <!-- var arrayelements = ['My', 'Name', 'is','Oly']; -->
   <!-- console.log(arrayelements.join()); -->
   <!-- My,Name,is,Oly -->
   <!-- console.log(arrayelements.join('')); -->
   <!-- MyNameisOly -->
   <!-- console.log(arrayelements.join('/')); -->
   <!-- // expected output: "My/Name/Water/Oly" -->

3. `flat`
   <!-- var array1 = [1, 2, [3, 4],9,10];
   array1.flat();
   [1, 2, 3, 4,9,10] -->
   <!-- var array2 = [1, 2, [3, 4, [5, 6]]];
   array2.flat();
   [1, 2, 3, 4,5,6] -->

4. `push`
   <!-- var flowers = ['Rose', 'TubeRose', 'Sunflower','Lotus'];
   flowers.push('ChinaRose');
   console.log(flowers); -->

5. `indexOf`

<!-- var animals = ['tiger', 'lion', 'camel', 'elephant', 'camel'];

console.log(animals.indexOf('camel'));
2

console.log(animals.indexOf('camel', 2)); -->

<!-- 4 -->

6. `lastIndexOf`
<!--
var places = ['Durgapur', 'Kolkata', 'Delhi', 'Mumbai', 'Suri','Kolkata'];
console.log(places.lastIndexOf('Kolkata'));
5 -->

7. `includes`
<!-- var pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
true -->

8. `reverse`

<!-- var pets = ['cat', 'dog', 'bat'];
console.log('pets: ', pets);
// expected output: Array ['cat', 'dog', 'bat']

var reversed = pets.reverse();
console.log('reversed: ', reversed);
//  Array ['bat', 'dog', 'cat'] -->

9. `every`

<!-- function isbelowSixty(currentValue) {
  return currentValue < 60;
}

var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isbelowSixty));
// expected output: true -->

10. `shift`

<!-- var array1 = [2, 4, 5];

var firstElement = array1.shift();

console.log(array1);
 [4, 5]

console.log(firstElement);
2 -->

11. `splice`
<!-- 
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at 1st index position
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at 4th index
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May'] -->

12. `find`
<!-- var array1 = [5, 12, 28, 130, 44];

var found = array1.find(function(element) {
return element > 20;
});

console.log(found);
28 --> 
13. `unshift`

<!-- var array1 = [1, 2, 3];

console.log(array1.unshift(4, 5,6));
// 5

console.log(array1);
//Array [4, 5,6, 1, 2, 3] -->

14. `findIndex`
<!-- var array1 = [15, 132, 18, 230, 441];

function isLargeNumber(element) {
return element > 100;
}

console.log(array1.findIndex(isLargeNumber));
4 -->

15. `filter`
<!-- 
var things = ['bag', 'ball', 'bottle', 'keyboard', 'mobile', 'keys'];

const result = things.filter(things => things.length > 4);

console.log(result);
// expected output: Array [ "bottle", "keyboard","mobile"] -->

16. `flat`

 <!-- var array1 = [1, 2, [3, 4],9,10];
   array1.flat();
   [1, 2, 3, 4,9,10] -->
   <!-- var array2 = [1, 2, [3, 4, [5, 6]]];
   array2.flat();
   [1, 2, 3, 4,5,6] -->

17. `forEach`
    <!-- var alphabet = ['a', 'b', 'c','d','e','f'];

<!-- alphabet.forEach(function(element) {
console.log(element);
}); -->

18. `map`

<!-- var numbers = [2, 4, 9, 20,8,10];

const map1 = numbers.map((x) => { return x * 4});

console.log(map1);
// expected output: Array [8, 32, 36, 80,32,40] -->

19. `pop`

<!-- var vegetables = ['cabbage','broccoli', 'cauliflower',  'kale', 'tomato'];

console.log(vegetables.pop());
// expected output: "tomato"

console.log(vegetables);
// expected output: Array ["cabbage","broccoli", "cauliflower", "kale"] -->

20. `reduce`

<!-- const array1 = [1, 2, 3, 4];
const reducer = array1.reduce((acc, currentValue) => {return acc + currentValue},0);

// 1 + 2 + 3 + 4
console.log(reducer);
// expected output: 10 -->

21. `slice`
<!-- var months = ['Jan', 'March', 'April', 'June','July'];

console.log(months.slice(1,3));
// expected output: Array ['March', 'April'] -->

22. `some`

<!-- var numbers = [1, 2, 3, 4, 5];

var odd = function(element) {
// checks whether an element is Odd
return element % 2 != 0;
};

console.log(numbers.some(odd));
// expected output: true -->
<!-- var numbers2 = [1, 2,9,3, 4, 5];

var even = function(element) {
// checks whether an element is even
return element % 2 === 0;
};

console.log(numbers.some(even));
// expected output: true -->
