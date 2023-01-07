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
const res = arrRes.join(" ")
console.log(res);

// Вариант 2
const arr2 = ['!', ' JS', 'люблю', 'Я'];
const arrRes2 = [];
for (let i = 0; i < arr.length; i++) {
	arrRes2.unshift(arr[i]);
}
const res2 = arrRes2.join(" ")
console.log(res2);
