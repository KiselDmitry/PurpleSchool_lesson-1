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
//функция передаётся в функцию
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

//функция возвращает функцию

function power2(pow) {
	return function (num) {
		return num ** pow;
	}
}

const powerOfTwo = power2(2);
console.log(powerOfTwo(5));
console.log(powerOfTwo(10));


const powerOfThree = power2(3);
console.log(powerOfThree(5));

console.log(power2(5)(4));