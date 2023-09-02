const transactionInUSD = [10, -7, 50, -10, 100];
console.log(transactionInUSD);
// Вариант for of
console.log('Вариант for of');
const transactionInRUB = [];
for (const iterator of transactionInUSD) {
	transactionInRUB.push(iterator*60);
}

console.log(transactionInRUB);

// Вариант map
console.log('Вариант map');
const transactionInRUB2 = transactionInUSD.map((transaction, i) => {
	return transaction * 60;
 });

console.log(transactionInRUB2);

// Вариант forEach
console.log('Вариант forEach');
const transactionInRUB3 = [];
transactionInUSD.forEach((transaction, i) => {
	transactionInRUB3[i] = transaction * 60;
 });

console.log(transactionInRUB3);





