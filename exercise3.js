// 1.

let a = 8;
let Perimetr = a * 4;

console.log("1.", Perimetr);

// 2.

let Square = a ** 2;

console.log("2.", Square);

// 3.

let b = 4;
let P = a * 2 + b * 2;

console.log("3.", P);

// 4.

let S = a * b;

console.log("4.", S);

// 5.

let ratio = P / S;

console.log("5.", ratio);

// 6.

r = 3;
PI = Math.PI;

let roundPeri = 2 * PI * r;

console.log("6.", roundPeri);

// 7.

let roundS = PI * r ** 2;

console.log("7.", roundS);

// 8.

let ratioRound = roundPeri / roundS;

console.log("8.", ratioRound);

// 9.

r1 = 3;
r2 = 7;

let round1 = PI * r1 ** 2;
let round2 = PI * r2 ** 2;
let roundRatios = round1 / round2;

console.log("9.", roundRatios);

// 10.

r3 = 10;

let diametr = 2 * r3;

console.log("10.", diametr);

// 11.

t = 25;

let hour = t % 12;

console.log("11.", hour);

// 12.

t2 = 50;

let minute = t2 % 60;

console.log("12.", minute);

// 13.

x = 8.7;
y = 7;

let ostatoc = x % y;

console.log("13.", ostatoc);

// 14.

x1 = 15;
y1 = 4;

let ostatic = x1 % y1;

console.log("14.", ostatic);

// 15.

x2 = 123;

let lastNum = x2 % 10;

console.log("15.", lastNum);

// 16.

a1 = 3;
a2 = 7;

let d = a2 - a1;
let a3 = a1 + 2 * d;

console.log("16.", a3);

// 17.

b1 = 2;
b2 = 4;
b3 = 6;

d = b2 - b1;

b4 = b3 + d;
b5 = b4 + d;

console.log("17.", b4, b5);

// 18.

num = 10;
num1 = 20;

let Bodlogo = num + num1 * 2;

console.log("18.", Bodlogo);

// 19.

x3 = 5;
y3 = 10;

let Bodlogo1 = (x3 + y3) * 2;

console.log("19.", Bodlogo1);

// 20.

number = 7;

isEven = number % 2;

if (isEven === 0) {
  console.log("20.", "True");
} else {
  console.log("20.", "False");
}
