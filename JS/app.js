function add(a,b) {
	return a + b;
}

function subtract(a,b) {
	return a - b;
}

function power(a,b) {
	return a ** b;
}

// Фукция вышего порядка
function calculate(a,b,fn) {
	console.log(fn.name);
	const res = fn(a, b);
	return res;
}

let res = calculate(2, 3, add);
console.log(res);
res = calculate(2, 3, subtract);
console.log(res);
res = calculate(2, 3, power);
console.log(res);