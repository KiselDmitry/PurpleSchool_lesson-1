
const operations = [1000, -700, 300, -500, 10000];
const startingBalans = 100;

//======
function average(arr, initailBalans) {
	let sum = initailBalans;
	for (const iterator of arr) {
		sum += iterator;
	}	
	return sum;
}
console.log(average(operations, startingBalans));

//======
function balanceCheck(arr, initailBalans) {
	let sum = initailBalans;
	let isOk = true;
	for (const iterator of arr) {
		sum += iterator;
		if (sum < 0) {
			isOk = false;
			break;
		}
		
	}
	return isOk;
} 
console.log(balanceCheck(operations, startingBalans));

//======

function checkPositivNgativ(arr) {
	let positiveCount = 0;
	let positiveSum = 0;
	let negativeCount = 0;
	let negativeSum = 0;
	for (const iterator of arr) {
		if (iterator > 0) {
			positiveCount++;
			positiveSum += iterator;
		}
		if(iterator < 0) {
			negativeCount++;
			negativeSum += iterator;
		}
	}
	return [positiveSum / positiveCount, negativeSum / negativeCount];
}
console.log(checkPositivNgativ(operations));