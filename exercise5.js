// 1.

let fruits = ["apple", "banana", "mango", "orange"];
firstFruit = fruits.shift();
lastFruit = fruits.pop();

console.log("1.", firstFruit, lastFruit);

// 2.

let fruit = ["apple", "banana"];
pushFruit = fruit.push("mango");

console.log("2.", fruit);

// 3.

nums = [1, 2, 3, 4];
nums.pop();

console.log("3.", nums);

// 4.

number = [10, 20, 30];
number.unshift(5);

console.log("4.", number);

// 5.

num = [100, 200, 300];
num.shift();

console.log("5.", num);

// 6.

num1 = [1, 2, 3];
num2 = [4, 5, 6];

mergeNum = num1.concat(num2);

console.log("6.", mergeNum);

// 7.

fruits1 = ["apple", "banana", "orange"];
find = fruits1.includes("banana");

console.log("7.", find);

// 8.

animals = ["cat", "bird", "dog"];
findIndex = animals.indexOf("dog");

console.log("8.", findIndex);

// 9.

words = ["I", "love", "JavaScript"];
oneWord = words.join(" ");

console.log("9.", oneWord);

// 10.

numbers = [10, 20, 30, 40, 50];
sliced = numbers.slice(0, 3);

console.log("10.", sliced);

// 11.

const numer = [1, 2, 3, 4];
numer.splice(1, 1);

console.log("11.", numer);

// 12.

const numers = [1, 2, 3, 4, 5];
numers.reverse();

console.log("12.", numers);

// 13.

fruit1 = ["banana", "apple", "cherry"];
fruit1.sort();

console.log("13.", fruit1);

// 14.

fruit1 = ["banana", "apple", "cherry"];
checkArray = Array.isArray(fruit1);

console.log("14.", checkArray);

// 15.

color = ["red", "blue", "green"];
arrayLength = color.length;

console.log("15.", arrayLength);

// 16.

numie = [10, 20, 30];
numie.splice(1, 1, "25");

console.log("16.", numie);

// 17.

lang = ["HTML", "CSS"];
lang1 = ["JavaScript", "React"];

merge = lang.concat(lang1);
mergeLength = merge.length;

console.log("17.", mergeLength);

// 18.

numies = [1, 2, 3, 4, 5];
numies.splice(3, 5);

console.log("18.", numies);

// 19.

numBer = [5, 10, 15, 20];
numBer.splice(2, 1);

console.log("19.", numBer);

// 20.

bigNum = [100, 2200, 300];
findNum = bigNum.includes(200);

if (findNum === true) {
  console.log("20. Байна");
} else {
  console.log("20. Байхгүй");
}
