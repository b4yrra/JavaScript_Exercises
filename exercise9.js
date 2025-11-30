// 1.

nums = [10, 20, 30];
sum = 0;

function sumArray() {
  for (i = 0; i < nums.length; i++) {
    num = nums[i];
    sum += num;
  }
  return sum;
}

sumArray(nums);
console.log("1.", sum);

// 2.

string = "Hello World";

function reverseString(str) {
  reversed = "";

  for (i = str.length - 1; i >= 0; i--) {
    const char = str[i];
    reversed += char;
  }
}

reverseString(string);
console.log("2.", reversed);

// 3.

numbers = [12, 15, 20, 21, 11];

function maxInArray(arr) {
  max = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

maxInArray(numbers);
console.log("3.", max);

// 4.

wordy = "hello";

function capitalize(word) {
  result = "";

  for (i = 0; i < word.length; i++) {
    if (i === 0) {
      result += word[i].toUpperCase();
    } else {
      result += word[i];
    }
  }

  return result;
}

capitalize(wordy);
console.log("4.", result);

// 5.

factorialNum = 1;

function factorial(n) {
  for (i = 1; i <= n; i++) {
    factorialNum *= i;
  }

  return factorialNum;
}

factorial(5);
console.log(factorialNum);

// 6.

strings = "LABEL";

function isPalindrome(str) {
  for (i = 0; i < str.length; i++) {
    if (str[0] === str[str.length - 1]) {
      return true;
    }
  }

  return false;
}

Final = isPalindrome(strings);
console.log("6.", Final);

// 7.

array = [10, 20, 30];

function lastItem(arr) {
  for (i = 0; i < arr.length; i++) {
    lastArr = arr[arr.length - 1];
  }

  return lastArr;
}

lastItem(array);
console.log("7.", lastArr);

// 8.

arrays = [10, 10, 10, 20, 30, 40, 20, 30];
count = 0;

function countOccurences(arr, item) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      count++;
    }
  }

  return count;
}

countOccurences(arrays, 10);
console.log("8.", count);

// 9.

function shortestWord(str) {
  const strSplit = str.split(" ");

  let shortWord = strSplit[0].length;

  for (i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length < shortWord) {
      shortWord = strSplit[i].length;
    }
  }

  shortResult = strSplit.filter((w) => w.length === shortWord);

  return shortResult;
}

shortestWord("my name is Batbold");
console.log("9.", shortResult);

// 10.

arrNum = [1, 2, 3, 2, 4, 1];

function findDuplicates(arr) {
  duplicate = [];

  obj = {};

  for (i = 0; i < arr.length; i++) {
    eachNum = arr[i];

    if (!obj[eachNum]) {
      obj[eachNum] = true;
    } else {
      if (!duplicate.includes(eachNum)) {
        duplicate.push(eachNum);
      }
    }
  }

  return duplicate;
}

findDuplicates(arrNum);
console.log("10.", duplicate);
