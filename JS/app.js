const roles = ['admin', 'user', 'menager'];

//indexOf('el') возвращает индекс 'el'
const elIndex = roles.indexOf('admin');
console.log(elIndex);
//если элемента нет возвращает -1
const elIndex2 = roles.indexOf('superadmin');
console.log(elIndex2);
//пример использования
if (roles.indexOf('admin') >= 0) {
	console.log('yes');
} else {
	console.log('nooo!');
}

//includes('el') возвращает индекс true false
console.log(roles.includes('admin'));
console.log(roles.includes('superadmin'));

//пример использования
if (roles.includes('admin')) {
	console.log('yes');
} else {
	console.log('nooo!');
}
