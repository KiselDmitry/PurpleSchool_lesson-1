const role1 = 'admin';
const role2 = 'user';
const role3 = 'superuser';

const roles = ['admin', 'user', 'superuser'];

const userInfo = ['Any', 25];
console.log(roles);
console.log(userInfo);
console.log(roles[0]);
console.log(roles.at(0)); // первый элемент
console.log(roles.at(-1)); // последний элемент

console.log(roles.length);
console.log(roles[roles.length - 1]); // последний элемент

const userAge = [2020 - 2002, 10 > 0 ? 20 : 10]; // элементы могут расчмтываться и применятся тернарные операторы
console.log(userAge);
//другой синтаксис объявления (используется реже)
const userName = new Array('Vasy', 'Petya', 'Katya');
console.log(userName);

//для выполнения операций *+/- с элементами массива необходимо прменять спуциальные методы массивов