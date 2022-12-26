

const role = 'medik';

if (role === 'maneg') { 
	console.log('yyyy');
} else if (role === 'seo') {
	console.log('seoseo');
} else if(role === 'medik') {
	console.log('medikmedik');
} else {
	console.log('nonono');
}

const role1 = 'maneg';
/*
switch (role1) { 
	case 'maneg1':
		console.log('1yyyy');
		break;
	case 'seo1':
		console.log('1seoseo');
		break;
	case 'medik1':
		console.log('1medikmedik');
		break;
	default:
		console.log('nonono');
}
*/

const role2 = 'medik';

switch (role2) { 
	case 'maneg1':
	case 'seo1':
		console.log('yyyyyyyyyyyyyy');
		break;
	case 'medik1':
		console.log('1medikmedik');
		break;
	default:
		console.log('nonono');
}


// Задача. В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).

// Решение:
const min = 59;

if (min < 15 && min >= 0) {
	console.log('в первую');
} else if (min >=15 && min <30) {
	console.log('вторую');
} else if (min >= 30 && min < 45) {
	console.log('третью');
} else if (min >= 45 && min < 60) {
	console.log('четвертую');
} else {

}

// Переменная lang может принимать 2 значения: 'ru' 'en'. Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке, а если имеет значение 'en' – то на английском. Решите задачу через 2 if, через switch-case и через многомерный массив без ифов и switch.

let lang = 'en';
let arr, arrErorr = 'Erorr';
const arrEn  = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
	arrRu  = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let rezTest = lang === 'ru' || lang === 'en';

console.log(rezTest);
lang === 'ru' ?  arr = arrRu : arr = arrEn;
console.log(rezTest === true ? arr : arrErorr);




