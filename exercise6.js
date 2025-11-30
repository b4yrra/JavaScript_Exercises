// 1.

for (let i = 0; i < 1; i++) {
  console.log("1. Pinecone");
}

// 2.

for (let i = 0; i < 10; i++) {
  console.log("2. Pinecone");
}

// 3.

n = 100;

for (i = 0; i < n; i++) {
  console.log("3. Pinecone");
}

// 4.

for (i = 0; i < 20; i++) {
  if (i % 2 !== 0) {
    console.log("4.", i);
  }
}

// 5.

for (i = 0; i < 40; i++) {
  if (i % 2 === 0) {
    console.log("5.", i);
  }
}

// 6.

result = 0;

for (i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    result += i;
  }
}

console.log("6.", result);

// 7.

for (i = 0; i < 40; i++) {
  if (i % 2 !== 0) {
    result += i;
  }
}

console.log("7.", result);

// 8.

for (i = 0; i < n; i++) {
  result += i;
}

console.log("8.", result);

// 9.

sum = 0;

for (i = 0; i < 10; i++) {
  sum += 100;
  console.log("9.", sum);
}

// 10.

nums = 1;

for (i = 1; i < 125; i++) {
  nums *= i;
}

console.log("10.", nums);

// 11.

num = 1;

for (i = 1; i < 125; i++) {
  if (i % 2 !== 0) {
    num *= i;
  }
}

console.log("11.", num);

// 12.

factorialNum = 1;
number = 10;

for (i = 0; i < number; i++) {
  factorialNum = (i + 1) * factorialNum;
  console.log("12.", factorialNum);
}
