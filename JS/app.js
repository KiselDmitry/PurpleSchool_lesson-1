const roles = ['admin', 'user', 'menager', 'superuser'];

//Метод slice(2) отрезает кусок массива начиная от указонного элемента , не изменяя исходный массив
const res = roles.slice(2);
console.log(roles);
console.log(res);

//Метод slice(2, 3) отрезает кусок массива начиная от указонного элемента и до указанного во втором аргументе , не изменяя исходный массив
const res2 = roles.slice(2,3);
console.log(roles);
console.log(res2);

//Метод slice(-1) вернёт МАССИВ из последнего элемента, а -2 из двух последних
const res3 = roles.slice(-2);
console.log(roles);
console.log(res3);

//Метод splice(2) отрезает кусок массива начиная от указонного элемента , и зменяет исходный массив остовляя в нём то что не отрезалось
const res4 = roles.splice(2);
console.log(roles);
console.log(res4);

//Метод splice(2, 2) второй аргумент указывает сколько элементов обрезать начиная от элемента указанного в первом аргументе
const res5 = roles.splice(1, 2);
console.log(roles);
console.log(res5);
