/*
Дан список задач
const tasks = ['Задача 1'];

Сделать функции:
Добавление задачи в конец
Удаление задачи по названию
Перенос задачи в начало списка по названию
! Всегда меняем исходный массив
push()
includes('el')
indexof()
splice(2, 2)
splice()
unshift()
*/

const tasks = ['Задача 1'];

//Добавление задачи в конец
function addEnd(task) {
	tasks.push(task);
}
addEnd('Задача2');
addEnd('Задача3');
addEnd('Задача4');
console.log(tasks);
//==========================

//Удаление задачи по названию=====
function deletTask(task) {
	 
	
	const el = tasks.indexOf(task);
	if (el === -1) {
		return;
	} 
	const taskStart = tasks.splice(el, 1);
	
}

const start = deletTask('Задача2');
console.log(tasks);
//==========================

//Перенос задачи в начало списка по названию===
function addBeginningList(task) {
	const el = tasks.indexOf(task);
	if (el === -1) {
		return;
	} 
	//одно решение
	const taskStart = tasks.splice(el, 1)[0];
	tasks.unshift(taskStart);
	//другое решение
	// const oldTask = tasks[el];
	// tasks.splice(el, 1)
	// tasks.unshift(oldTask);
} 
addBeginningList('Задача4');
console.log(tasks);
console.log(tasks.includes('Задача6'));
//==========================












