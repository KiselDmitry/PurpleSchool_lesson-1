const userDate = ['Anton', 18, 'Mascow'];

function getDate() {
	return ['Anton', 18, 'Mascow'];
}

const userName = getDate()[0];
const age = getDate()[1];
const city = getDate()[2];

console.log(userName, age, city); //Anton 18 Mascow

console.log(userDate); //['Anton', 18, 'Mascow']

console.log(getDate()); //['Anton', 18, 'Mascow']

//Деструктуризация=================

//const userDate2 = ['Ivan', 22, 'Anapa'];
function getDate2() {
	return ['Ivan', 22, 'Anapa'];
}

const [userImy, userAge, userCity] = getDate2();
//const [userImy, userAge, userCity] = userDate2;

console.log(userImy, userAge, userCity); //Ivan 22 Anapa
//console.log(userDate2); //['Ivan', 22, 'Anapa']

//Rest оператор

const data = [1, 2, 3, 4, 5, 6, 7];

const [one, two, three, four, ...others] = data;

console.log(one, two, three, others); //1 2 3   [5, 6, 7]
