const num = 987654321;
const str = String(num);
console.log(str);

//split('') метод строк (строка в массив)
const res = str.split('');
console.log(res);

const rev = res.reverse();
console.log(rev);

//split('') метод массивов (массив в строку)
const resRev = rev.join('');
console.log(Number(resRev));
