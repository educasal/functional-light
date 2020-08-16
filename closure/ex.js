"use strict";

function strBuilder(str) {
	return function(v) {
		if(typeof v == "string") {
			return strBuilder(str + v)
		} else {
			return str;
		}

	}
}

var hello = strBuilder("Hello, ");
var kyle = hello("Kyle");
var susan = hello("Susan");
var question = kyle("?")();
var greeting = susan("!")();

console.log(strBuilder("Hello, ")("")("Kyle")(".")("")());
console.log(hello());
console.log(kyle());
console.log(susan());
console.log(question);
console.log(greeting);

console.log(strBuilder("Hello, ")("")("Kyle")(".")("")() === "Hello, Kyle.");
console.log(hello() === "Hello, ");
console.log(kyle() === "Hello, Kyle");
console.log(susan() === "Hello, Susan");
console.log(question === "Hello, Kyle?");
console.log(greeting === "Hello, Susan!");
