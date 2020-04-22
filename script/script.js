'use srtict';
foo = function (str) {
  if (typeof str !== 'string') {
    console.log('Это не строка');
    return;
  }
  strNew = str.trim();
  if (strNew.length > 30) {
    strNew2 = strNew.slice(0, 30) + '...';
    console.log(strNew2);
  } else {
    console.log(strNew);
  }
};

a = '               ggggggggggggggggggg6666666666666666669999           ';

foo(a);

//console.log(foo(ty));