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

1.  `charAt`

    - Parameter: (index) defaults to 0 - (number data type)
    - Return: character at specific index in the string (string data type)
    - Example:
      ```js
      let name = "Arya Stark";
      name.charAt(2); //"y"
      let designation = "A quick brown fox jumped over a lazy dog";
      designation(4); // "i"
      let houseName = "Starks";
      houseName.charAt(0); // "S"
      ```
    - `charAt` accepts a index (number data type) and return the character on that index in the string.

2.  `toUpperCase`
    <!-- name.toUpperCase();
    'ARYA STARK' -->
    <!-- toUpperCase method returns the value of the string converted to uppercase. -->
3.  `toLowerCase`
    <!-- let school="ALTCAMPUS" -->
    <!-- school.toLowerCase();
    'altcampus' -->
    <!-- toLowerCase method returns the value of the string converted to lowercase. -->
4.  `trim`
    <!-- let username= "    olyrajak    ";  -->
    <!-- username.trim();
    'olyrajak' -->
    <!-- totrim method returns the value of the string by removing extra spaces from start and end of the string. -->
5.  `trimEnd`
    <!-- username.trimEnd();
    '    olyrajak' -->
    <!-- trimEnd method returns the value of the string by removing extra spaces from end of the string. -->
6.  `trimStart`
    <!-- username.trimStart();
    'olyrajak    ' -->
    <!-- trimstart method returns the value of the string by removing extra spaces from start of the string. -->

7.  `concat`
    <!-- let name = "Arya Stark";
            let houseName = "Starks";
            name.concat(" live in ",houseName);-->

        <!-- Arya Stark live in Starks -->

    <!-- concat concatenates the string arguments to the calling string and returns a new string. -->

8.  `endsWith`
<!-- let name = 'Arya Stark';
    name.endsWith('ark'); -->
<!-- true -->
<!-- endsWith method lets you determine whether or not a string ends with another string. It's a case sensitive method. -->
9.  `includes`
    <!-- let houseName = 'Starks';
    houseName.includes('rk'); // true
    houseName.includes('s', 3); // false -->
    <!-- includes method lets you determine whether or not a string includes another string. -->

10. `indexOf`
    <!-- let designation = 'A quick brown fox jumped over a lazy dog';
    designation.indexOf('over', 12);
    25 -->
    <!-- indexOf characters in a string are indexed from left to right. -->

11. `lastIndexOf`
    <!-- let designation = 'A quick brown fox jumped over a lazy dog';
    designation.lastIndexOf('over', 32);
    // 25
    let houseName = 'Starks';
    houseName.lastIndexOf('Rk');
    // -1
    houseName.lastIndexOf('s', -4);
    // -1 -->
    <!-- lastIndexOf characters in a string are indexed from left to right. -->

12. `padEnd`
<!-- let designation = 'A quick brown fox jumped over a lazy dog';
designation.padEnd(42); // "A quick brown fox jumped over a lazy dog          "
let houseName = 'Starks';
houseName.padEnd(3, '*'); // "Starks" -->

<!-- padEnd adds the padding end of the string with the original string and returns it's value. -->

13. `padStart`
<!-- let designation = 'A quick brown fox jumped over a lazy dog';
designation.padStart(30); // "     A quick brown fox jumped over a lazy dog"
let houseName = 'Starks';
houseName.padStart(2, '*'); // "Starks" -->

<!-- padStart adds the padding at start of the string with the original string and returns it's value. -->

14. `repeat`

<!-- let name = 'Arya';
name.repeat(7); // "AryaAryaAryaAryaAryaAryaArya"
let designation = `I'm a Develper`;
designation.repeat(); // " "
let houseName = 'Starks  ';
houseName.repeat(4); // "Starks  Starks  Starks  Starks  " -->

<!-- repeat adds the repeated string and returns it. -->

15. `replace`

<!-- let designation = `I'm a Developer`;
designation.replace('o', '..'); // "I'm a dev..per"
let houseName = 'Starks';
houseName.replace('s', 'S'); // "StarkS" -->

<!-- replace returns the replaced string. -->

16. `slice`
<!-- let name = 'Arya';
name.slice(3); // "Ary"
let designation = `I'm a Developer`;
designation.slice(5, 15); // " Developer"
let houseName = 'Starks';
houseName.slice(6, 0); // "" -->

<!-- slice extracts the text from one string and returns a new string. Changes to the text in one string do not affect the other string. -->

17. `split`

<!-- let name = 'Arya';
name.split(" "); // [ "Arya" ]
let designation = `I'm a Developer`;
designation.split(' ', 8); // [ "I'm", "a", "Developer" ]
let houseName = 'This is just a simple home';
houseName.split(); // [ "This is just a simple home" ] -->

<!-- split separator is removed from the string, and the substrings are returned in an array. -->

18. `substring`

<!-- let name = 'Arya';
name.substring(2); // "ya"
let designation = `I'm a Developer`;
sentance.substring(5, 18); // " Developer"
let houseName = 'Starks';
houseName.substring(6, 0); // "Starks" -->

<!-- sunstring extracts characters from indexStart up to but not including indexEnd. -->
