
const log = console.log;
const roles = ['admin', 'user', 'superuser'];
let l;
roles[roles.length] = 'superadmin';


log(roles.length);
console.log(roles.at(1));
log(roles);

const arrLenght = roles.push('admin2');
log(roles);
log(arrLenght);

const num = 987654321;
const str = String(num);
log(str);


const res = str.split('');
log(res);

const rev = res.reverse();
log(rev);

const resRev = rev.join('');
log(Number(resRev));

/*
Дан список задач
const tasks = ['Задача 1'];

Сделать функции:
Добавление задачи в конец
Удаление задачи по названию
Перенос задачи в начало списка по названию
! Всегда меняем исходный массив
push()
indexof()
splice()
unshift()
*/

const tasks = ['Задача 1'];