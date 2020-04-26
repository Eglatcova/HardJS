'use srtict';

let arr = [
  '4111111',
  '33333',
  '456789',
  '134567',
  '2345678',
  '87653',
  '23456666666'
];

for (let num of arr) {
  num2 = num.slice(0, 1);
  for (let subnum of num2) {
    if (+num2 === 4 || +num2 === 2) {
      console.log(num);
    }
  }
}

for (let i = 1; i <= 11; i++) {
  let bb;
  for (let n = 2; n < i; n++) {
    res = i / n;
    if (Number.isInteger(res) === true) {
      bb = i;
    }
  }
  if (i != bb) {
    console.log(i + ' ' + 'Делители этого числа: 1 и' + ' ' + i);
  }
}
