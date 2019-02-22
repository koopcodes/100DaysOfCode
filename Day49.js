//Codinghire.com Samples

// How would calculate all the ways to reach targetSum from an array of integers operands
function countWays(targetSum, operands) {
	'use strict';
	var targetsLength = targetSum + 1;
	var operandsLength = operands.length;
	targetSum = [1];
	for (var i = 0; i < operandsLength; i++) {
		for (var j = 0; j < targetsLength; j++) {
			// Initialize undefinded target
			targetSum[j] = targetSum[j] ? targetSum[j] : 0;
			// Accumulate target + operand ways
			targetSum[j] += (j < operands[i]) ? 0 : targetSum[j - operands[i]];
		}
	}
	console.log(targetSum[targetsLength - 1]);
	return targetSum[targetsLength - 1];
}

countWays(100, [1, 5, 10, 25]); // 242

// Given 2 different lists of integers, write a function that will return their intersection.
function intersection(array1, array2) {
	return array1.filter(value => -1 !== array2.indexOf(value));
}
console.log(intersection([1, 2, 2, 3], [2, 2, 3, 4])); // [2, 2, 3]

// Implement a queue using 2 stacks. Specifically, implement the enqueue and dequeue methods.
class Queue {
	constructor() {
		this.items = [];
	}

	enqueue(element) {
		this.items.push(element);
	}

	dequeue() {
		if (this.isEmpty()) {
			return "Underflow";
		} else {return this.items.shift();}
	}

	isEmpty() {
		return this.items.length == 0;
	}

	printQueue() {
		var queue = "";
		for (var i = 0; i < this.items.length; i++)
			queue += this.items[i] + " ";
		return queue;
	}
}

var queue = new Queue();
console.log(queue.enqueue("koop"));
console.log(queue.enqueue("koop"));
console.log(queue.enqueue("koopdev"));
console.log(queue.printQueue());
console.log(queue.dequeue());
console.log(queue.printQueue());
console.log(queue.dequeue());
console.log(queue.printQueue());

// Design the software system for a parking garage. You’ll want to handle the ticketing system and keeping track of when the garage is full.

// https://www.educative.io/collection/page/5668639101419520/5692201761767424/5770234338213888
// https://www.quora.com/How-do-I-answer-design-related-questions-like-design-a-parking-lot-in-an-Amazon-interview-Do-we-need-to-write-code-for-design-questions
