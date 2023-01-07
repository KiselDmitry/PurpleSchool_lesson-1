// Дан произвольный url вида - https://purpleschool.ru/course/javascript
// Нужно сделать функцию, которая выводит в консоль:
// Протокол (https)
// Доменное имя (purpleschool.ru)
// Путь внутри сайта (/course/javascript)

const url = 'https://purpleschool.ru/course/javascript';

function dispCons(url) {
	const [protocol, _, host, ...paht]= url.split('/');
	console.log(protocol, _, host, paht);
	console.log(`Протокол: ${protocol.split(':')[0]}`);
	console.log(`Доменное имя: ${host}`);
	console.log(`Путь внутри сайта: /${paht.join('/')}`);
	
}
dispCons(url);
