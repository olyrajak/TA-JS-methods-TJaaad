Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
<!-- name.toUpperCase(); 
"ARYA STARK"
-->
3. `toLowerCase`
<!--name.toLowerCase(); 

"arya stark"
-->

4. `trim`
<!-- let city = "       Durgapur   ";
city.trim();
"Durgapur"
 -->
5. `trimEnd`
<!-- city.trimEnd();
'       Durgapur' -->
6. `trimStart`
<!-- city.trimStart();
'Durgapur   '
 -->
7. `concat`
<!-- let arr1 = [1,2,3,4,5,6];
let arr2 = [7,8,12,44,55,10];
arr1.concat(arr2);
(12) [1, 2, 3, 4, 5, 6, 7, 8, 12, 44, 55, 10]
0
: 
1
1
: 
2
2
: 
3
3
: 
4
4
: 
5
5
: 
6
6
: 
7
7
: 
8
8
: 
12
9
: 
44
10
: 
55
11
: 
10
 -->
8. `endsWith`
<!-- city.endsWith("r");
true;
 -->
9. `includes`
<!-- let str = "My Name Is Oly Rajak";
undefined
str.includes("Oly");
true -->
10. `indexOf`
<!-- arr1.indexOf(1);
0 -->
11. `lastIndexOf`
<!-- let arr3 = [1,2,3,4,5,6,7,1,3,1,6,3,9];

arr3.lastIndexOf(3);
11 -->
12. `padEnd`
<!-- 
let number = '2007';

console.log(number.padEnd(5));
// "2007  " -->
13. `padStart`
<!-- 
let number = '2007';

console.log(number.padStart(5));
// "     2007" -->
14. `repeat`
<!-- let text = "Hello world!";
console.log(text.repeat(2));
VM11057:2 Hello world!Hello world! -->
15. `replace`
<!-- console.log(text.replace('world','oly'));
Hello oly! -->
16. `slice`
<!-- arr1.slice(1, 3);
(2) [2, 3] -->
17. `split`
<!-- text.split("");
(12) ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!'] -->
18. `substring`
<!-- text.substring(0, 8);
'Hello wo' -->
