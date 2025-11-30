// 1.

function numberSquare(n) {
  return n ** 2;
}

Square = numberSquare(4);
console.log("1.", Square);

// 2.

function isEven(n) {
  //   if (n % 2 === 0) {
  //     console.log("2. True");
  //     return true;
  //   } else {
  //     console.log("2. False");
  //     return false;
  //   }

  return n % 2 === 0;
}

evenOdd = isEven(10);
console.log("2.", evenOdd);

// 3.

function greet(name) {
  return console.log("3. Hello", name);
}

myName = greet("Batbold");

// 4.

nums = [1, 5, 6];
summ = 0;

function sum() {
  for (i = 0; i < nums.length; i++) {
    num = nums[i];
    summ += num;
  }

  return summ;
}

sum(nums);
console.log("4.", summ);

// 5.

function maxOfTwo(a, b) {
  return Math.max(a, b);
}

maximum = maxOfTwo(6, 9);
console.log("5.", maximum);

// 6.

function getLength(arr) {
  return arr.length;
}

word = getLength("My Name is Batbold");
console.log("6.", word);

// 7.

function toUpper(str) {
  return str.toUpperCase();
}

string = toUpper("my name is batbold");
console.log("7.", string);

// 8.

function isPositive(n) {
  return n % 2 > 0;
}

num = isPositive(9);
console.log("8.", num);

// 9.

function firstItem(arr) {
  return arr[0];
}

array = firstItem([10, 20, 30]);
console.log("9.", array);
