// 1.

a = 4;
b = 9;
if (a > b) {
  console.log("1.", a);
} else {
  console.log("1.", b);
}

// 2.

ab = 6;
isEven = ab % 2;

if (isEven === 0) {
  console.log("2. Even");
} else {
  console.log("2. Odd");
}

// 3.

q = 8;
w = 7;
e = 10;

if (q > w) {
  if (q > e) {
    console.log("3. Хамгийн их", q);
  } else {
    console.log("3. Хамгийн их", e);
  }
} else {
  if (w > e) {
    console.log("3. Хамгийн их", w);
  } else {
    console.log("3. Хамгийн их", e);
  }
}

if (q < w) {
  if (q < e) {
    console.log("3. Хамгийн бага", q);
  } else {
    console.log("3. Хамгийн бага", e);
  }
} else {
  if (w < e) {
    console.log("3. Хамгийн бага", w);
  } else {
    console.log("3. Хамгийн бага", e);
  }
}

// 4.

str = "Хамгийн бага";

let strLength = str.length;

console.log("4.", strLength);

// 5.

let upperStr = "Хамгийн бага";

let upper = upperStr.toUpperCase();

console.log("5.", upper);

// 6.

a = 5;

if (a % 3 === 0 && a % 5 === 0) {
  console.log("6. FizzBuzz");
} else if (a % 3 === 0) {
  console.log("6. Fizz");
} else if (a % 5 === 0) {
  console.log("6. Buzz");
}

// 7.

a = "Hello";
b = "World";

let stringJoin = a + " " + b;

console.log("7.", stringJoin);

// 8.

num1 = 20;
num2 = 50;

let average = (num1 + num2) / 2;

console.log("8.", average);

// 9.

number = 80;

if (number % 2 === 0 && number !== 0) {
  console.log("9. Positive");
} else if (number % 2 === 1) {
  console.log("9. Negative");
} else if (number === 0) {
  console.log("9. The Number is Zero");
}

// 10.

numbers = 20;

if (numbers < 10) {
  console.log("10. Lower than 10");
} else {
  console.log("10. Higher than 10");
}

// 11.

x = 10;
y = 11;

if (x === y) {
  console.log("11. Same");
} else {
  console.log("11. Different");
}

// 12.

nums = 90;

if (nums < 0) {
  console.log("12. Lower than 0");
} else if (nums > 100) {
  console.log("12. Higher than 100");
} else if (0 < nums < 100) {
  console.log("12. Number is between 0 to 100");
}

// 13.

num = 1000;

let increaseTen = num * 1.1;
let increaseTwenty = num * 1.2;
let increaseThirty = num * 1.3;

console.log(
  `13. 10%-> ${increaseTen}, 20%-> ${increaseTwenty}, 30%-> ${increaseThirty}`
);

// 14.

nums1 = 101;

if (nums1 > 100) {
  console.log("14. 100");
} else {
  console.log("14.", nums1);
}

// 15.

symbol = 12;
symbol1 = 12;

if (symbol === symbol1) {
  console.log("15. Symbols are Same");
} else {
  console.log("15. Symbols are Different");
}

// 16.

numer = 67;

let firstNum = Math.floor(numer / 10);
let secondNum = numer % 10;
let reversed = secondNum * 10 + firstNum;

console.log("16.", reversed);

// 17.

n = -26;

if (n < 0) {
  n *= -1;
} else {
  n = n;
}

console.log("17.", n);

// 18.

const oldDate = new Date("1970.01.01");
const newDate = new Date();
const difference = newDate - oldDate;

console.log("18.", difference / 1000);

// 19.

let carNumber = 1205;
let lastNum = carNumber % 10;

if (lastNum === 1 || lastNum === 2) {
  console.log("19. Даваа гарагт явахгүй");
} else if (lastNum === 3 || lastNum === 4) {
  console.log("19. Мягмар гарагт явахгүй");
} else if (lastNum === 5 || lastNum === 6) {
  console.log("19. Лхагва гарагт явахгүй");
} else if (lastNum === 7 || lastNum === 8) {
  console.log("19. Пүрэв гарагт явахгүй");
} else if (lastNum === 9 || lastNum === 0) {
  console.log("19. Баасан гарагт явахгүй");
}
