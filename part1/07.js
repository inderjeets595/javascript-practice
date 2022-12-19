// trim() 
// toUpperCase()
// toLowerCase()
// slice()

//slice() extracts a part of a string and returns the extracted part in a new string. The method takes 2 parameters: start position, and end position (end not included).

let firstName = "harshit";
 console.log(firstName.length);
 firstName = firstName.trim(); // "harshit"
// console.log(firstName)
// console.log(firstName.length);
// firstName = firstName.toUpperCase();
 firstName = firstName.toLowerCase();
 console.log(firstName);

let newString = firstName.slice(1); // arshit
console.log(newString);
              // 0          1         2        3        4 //
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(2, 3); //orange.lemon  //select the element from the given array range ('start from which index', ' num of element return ')
console.log(citrus)
              // 0          1        2         3        4 //
const fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const myBest = fruit.slice(-3, -1);
console.log(myBest) //lemon,apple

const text = 'abc,xyz,mno,pqr';
console.log(text.slice(4,7));

//                     987654321
let text1 = "Apple,,Banana, Kiwi";
               //   7 
console.log(text1.slice(-12,-6));// return Banana //if give negative number it count the string from the end.
console.log('slice - '+text1.slice(7,16)); // return Banana, K

//substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().
console.log('substring - '+text1.substring(7,3)); // return le,,

//substr() extracts parts of a string, beginning at the character at the specified position,  
//substr() is similar to slice().The difference is that the second parameter specifies the length of the extracted part.
console.log('substr - '+text1.substr(7, 5)); // return Banan
//console.log(text1.substr(-6))  // return , Kiwi
//console.log('str-'+text1.substr(-6,-1)) //return null


