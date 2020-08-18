"use strict";

function lotteryNum(maxNumber, includeZero) {
	var highestNumber = includeZero ? maxNumber + 1 : maxNumber;
	var increment = includeZero ? 0 : 1;

	return (Math.round(Math.random() * highestNumber) % maxNumber) + increment;
}

function pickNumber(newNumber, numbers) {
	if(!numbers.includes(newNumber)) {
		numbers = [newNumber, ...numbers]
		numbers.sort(function asc(a,b) { return a - b; })
	}
	return numbers;
}

var luckyLotteryNumbers = [];
const maxLength = 6;

while (luckyLotteryNumbers.length < maxLength) {
	luckyLotteryNumbers = pickNumber(lotteryNum(40, false), Object.freeze(luckyLotteryNumbers));
}

console.log(luckyLotteryNumbers);
console.log(lotteryNum(9, true));
