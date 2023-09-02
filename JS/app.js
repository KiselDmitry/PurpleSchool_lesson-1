// ПОПЫТКА 2 (ДВА)
// Основы Преобразование типов

const age = '45';
const name = 'Dmutry';
let pension = true;

console.log(age + 6); //456
console.log(String(45) + 6); //456
console.log(Number(age) + 6); //51
console.log(age - 6); //39 любые действия кроме "+" из строки делает число
const result = age - 1;
console.log(result); // 44
console.log(typeof (result)); // number

console.log(typeof(pension)); // boolean
console.log(Boolean('')); //false
console.log(Boolean(0)); //false
console.log(Boolean(1)); //true
console.log(Boolean(-1)); //true
console.log(Boolean('asd')); //true
console.log(true + 3); //4
console.log(false + 3); //3
