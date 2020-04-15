'use srtict';
//part 1
   daysRu = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];

  daysEng = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

let 
  lang = 'ru';

if (lang === 'ru') {
  console.log(daysRu);
} else {
  console.log(daysEng);
}

switch (lang) {
  case 'ru':
    console.log(daysRu);
    break;
  case 'en':
    console.log(daysEng);
    break;
}

const langArr = new Map([
  ['ru', ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье']],
  ['en', ['Monday, Tuesday, Wensday, Thursday, Friday, Saturday, Sunday']]
]);

console.log(langArr.get(lang));

//part2

let namePerson = 'Максим';

namePerson === 'Артем' ? console.log('директор') : namePerson === 'Максим' ? console.log('преподаватель') : console.log('студент');
