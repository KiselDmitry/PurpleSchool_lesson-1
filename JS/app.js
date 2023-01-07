/*
Задача вывести в консоль строку "Я люблю  JS !" из массива
const arr = ['!', ' JS', 'люблю', 'Я'];
*/
// Вариант 1
const arr = ['!', ' JS', 'люблю', 'Я'];
const arrRes = [];
for (let i = arr.length - 1; i >= 0; i--) {
	arrRes.push(arr[i]);

}
const res = arrRes.join(" ");
console.log(res);

// Вариант 2
const arr2 = ['!', ' JS', 'люблю', 'Я'];
const arrRes2 = [];
for (let i = 0; i < arr.length; i++) {
	arrRes2.unshift(arr[i]);
}
const res2 = arrRes2.join(" ")
console.log(res2);

// Вариант 3 цикл wile

const arr3 = ['!', ' JS', 'люблю', 'Я'];
const arrRes3 = [];
let i = arr3.length - 1;

while (i>=0) {
	arrRes3.push(arr3[i]);
	i--;
}
console.log(arrRes3.join(" "));

// ====цикл do wile ======
let j = 0;
do {
	console.log(j);
	j++;
} while (j < 0);

// ====цикл for of перебор по элементам======

const array1 = [1, -3, 5, 7, -9, -11];
let resEl = 0;
for (let element of array1) {
	console.log(element);
	resEl = resEl + element
}
console.log('===');
console.log(resEl);
console.log('===');

// ====цикл for in перебор по индексу======

const array2 = ['ф', 'ы', 'в', 'а', 'п', 'р'];
for (let index in array2) {
	console.log(index); // выводит индекс
	console.log(array2[index]); //выводит элемент
}