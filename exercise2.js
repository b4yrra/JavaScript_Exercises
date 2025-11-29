// 1.

let a = 5;
let b = 6;
let c = 9;

Perimetr = a + b + c;
console.log("1.", Perimetr);

// 2.

let sum = 1 + 3 + 5 + 7 + 8.7;

console.log("2.", sum);

// 3.

let S = a * b;
let P = a * 2 + b * 2;

console.log(`3. Square ${S}, Perimetr ${P}`);

// 4.

let sec = 98;
let min = sec / 60;
let remainder = sec % 60;

console.log(`4. ${~~min} min: ${remainder} sec`);

// 5.

let sec1 = 1297;
remaindersec = sec1 % 60;
minute = sec1 / 60;
hour = minute / 60;

console.log(`5. ${~~hour}H : ${~~minute}MIN : ${remaindersec}SEC`);

// 6.

let min1 = 875;
let sec2 = 88;

min1 *= 60;
sum2 = min1 + sec2;

console.log(`6. ${sum2} SEC`);

// 7.

let hour2 = 83;
let min2 = 84;
let sec3 = 85;

hourMulti = hour2 * 60;
hourMin = (hourMulti + min2) * 60;

console.log(`7. ${hourMin + sec3} SEC`);

// 8.

let hour3 = 38;

let day = hour3 / 24;
let dayHour = hour3 % 24;

console.log(`8. ${~~day} DAY ${dayHour} HOUR`);

// 9.

let days = 4;
let hours = 40;

let toHours = 4 * 24;
let allHours = toHours + hours;

console.log(`9. ${allHours} HOURS`);

// 10.

let months = 106;

let toYears = 106 / 12;
let remainderYear = 106 % 12;

console.log(`10. ${~~toYears} years, ${remainderYear} month`);

// 11.

let years = 90;
let month = 98;

let toMonth = years * 12;
let allMonth = toMonth + month;

console.log(`11. ${allMonth} MONTHS`);

// 12.

let nums = [9, 3, 2, 8];

let mininmum = Math.min(...nums);

console.log("12.", mininmum);

// 13.

let nums2 = [2, 9, 4, 3];

let lowerFive = nums2.filter((nums2) => 5 > nums2);
let lowerMulti = lowerFive.reduce((a, b) => a * b);

console.log("13.", lowerMulti);

// 14.

let nums3 = [11, 9, 4, 3];

let higher = nums3.filter((nums3) => nums3 > 5);
let higherMulti = higher.reduce((a, b) => a * b);

console.log("14.", higherMulti);
