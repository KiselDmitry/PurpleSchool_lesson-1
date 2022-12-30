// ФУНКЦИИ

function numRes(num1, num2) {
	const res = num1 * num2
	console.log(`${num1} ${num2} получится ${res}`);
	return res;
}
console.log(numRes(3, 4));

numRes(5, 6);

//Анонимная

let anonimnayFun = function (num1, num2) {
	const res = num1 * num2
	console.log(`${num1} *${num2} получится ${res}`);
	return res;
};

console.log(anonimnayFun(17,23));
anonimnayFun(40, 5);

// Стрелочные

let strelochnayFun = (num1, num2) => num1 * num2;

let a1 = 60,
	a2 = anonimnayFun(3,3);


console.log(`${a1} умножить ${a2} получится ${strelochnayFun(a1, a2)}`);

/*	
Задание для упражнения:
Пользователь:
Возраст
Availability of work
Деньги
Нужно проверить может ли он купить новый MacBook за 2000$? Он может брать не только свои деньги, но и взять кредит. Ему дадут 500$, только если ему больше 24-х лет и он имеет работу, 100$ если ему просто больше 24-х лет и 0 в ином случае. Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false.
*/
// const costOfGoods = 2000;
// const userAge = 25;
// const userWork = false;
// const userMoney = 1000;



function rez (costOfGoods, userAge, userMoney, userWork = false) {
	if (userWork && userAge > 24) {
		userMoneyCredit = 500;
	} else if (userAge > 24) {
		userMoneyCredit = 100;
	} else {
		userMoneyCredit = 0;
	}
	let balans = userMoneyCredit + userMoney;
	
	let answer;
	if (balans >= costOfGoods) {
		answer = true;
	} else {
		answer = false;
	}
	return answer;
}


console.log(rez(2000, 25, 1600, ) ? 'может купить':'не может купить');

