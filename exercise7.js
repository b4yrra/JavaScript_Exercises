// 1.

for (i = 10; i > 0; i--) {
  console.log("1.", i);
}

// 2.

n = 3;
result = 1;

for (i = 1; i <= 10; i++) {
  console.log("2.", n * i);
}

// 3.

for (i = 0; i < 5; i++) {
  result *= 2;
}

console.log("3.", result);

// 4.

let num = 234;
let digit;
let sum = 0;

for (i = 0; num > 0; i++) {
  digit = num % 10;
  num = (num - digit) / 10;
  sum += digit;
}

console.log("4.", sum);

// 5.

let nums = 987654;
let count = 0;

for (i = 0; nums > 0; i++) {
  digit = nums % 10;
  nums = (nums - digit) / 10;
  count++;
}

console.log("5.", nums);

// 6.

number = 5;
result1 = 1;

for (i = 0; i < 2; i++) {
  result1 *= number;
}

console.log("6.", result1);

// 7.

four = 4;
sum1 = 0;

for (i = 1; i <= four; i++) {
  sum1 += i ** 3;
}

console.log("7.", sum1);

// 8.

for (i = 0; i <= 30; i++) {
  if (i % 2 === 0 && i % 3 === 0) {
    console.log("3.", i);
  }
}

// 9.

for (i = 0; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log("9. Fizz-", i);
  } else if (i % 5 === 0) {
    console.log("9. Buzz-", i);
  }
}

// 10.

for (i = 0; i <= 100; i++) {
  if (i % 7 !== 0) {
    console.log("10.", i);
  }
}

// 11.

for (i = 0; i <= 50; i++) {
  if (i % 2 !== 0 && i % 5 === 0) {
    console.log("11.", i);
  }
}

// 12.

summoned = 0;

for (let i = 1; i <= 100; i++) {
  if (i >= 50 && i <= 60) {
    summoned += i;
  }
}

console.log("12.", summoned);

// 13.

for (i = 0; i <= 20; i++) {}

// 14.

plus = 0;

for (i = 0; i <= 50; i++) {
  if (i % 2 !== 0) {
    plus += i ** 3;
  }
}

console.log("14.", plus);

// 15.

for (i = 0; i <= 100; i++) {
  if (i % 2 === 0 && i % 5 === 0) {
    console.log("15.", i);
  }
}
