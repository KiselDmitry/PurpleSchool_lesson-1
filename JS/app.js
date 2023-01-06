const users = ['Vasy', 'Petya', 'Katya'];
console.log(users);
users[2] = 'Anya'; //замена элементов массива
console.log(users);

// добавление элемента массива
users[3] = 'Nikita'; 
console.log(users);
users[users.length] = 'Abraham'; 
console.log(users);
// Метод push добавляет элемент в  конец массива при этом возвращает длинну массива
const arrLenght = users.push('Dik');
console.log(users);
console.log(arrLenght);

// Метод unshift добавляет элемент в  начало массива
users.unshift('Iren');
console.log(users);

// Метод pop() удаляет последний элемент при этом возвращает удаленный элемент
const el = users.pop();
console.log(users);
console.log(el);

// Метод shift() удаляет первый элемент при этом возвращает удаленный элемент
const el2 = users.shift();
console.log(users);
console.log(el2);

