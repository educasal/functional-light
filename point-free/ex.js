"use strict";

function output(txt) {
	console.log(txt);
}

function printIf(shouldPrintIt) {
	return function(msg) {
		if (shouldPrintIt(msg)) {
			output(msg);
		}
	};
}

function isShortEnough(str) {
	return str.length <= 5;
}

function isLongEnough(str) {
	return !isShortEnough(str);
}

var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(isShortEnough)(msg1);		// Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2);		// Hello World

// ---------------------------------------------------------------------------------------------------------------------

function negate(fn) {
	return function(...args) {
		return !fn(...args);
	}
}

function when(fn) {
	return function(predicate){
		return function(...args){
			if (predicate(...args)) {
				return fn(...args);
			}
		};
	};
}


var pointFreeOutput = console.log.bind(console);
var pointFreePrintIf = when(pointFreeOutput);
var pointFreeIsLongEnough = negate(pointFreeIsShortEnough);


function pointFreeIsShortEnough(str) {
	return str.length <= 5;
}



console.log("2nd round")

pointFreePrintIf(pointFreeIsShortEnough)(msg1);		// Hello
pointFreePrintIf(pointFreeIsShortEnough)(msg2);
pointFreePrintIf(pointFreeIsLongEnough)(msg1);
pointFreePrintIf(pointFreeIsLongEnough)(msg2);		// Hello World
