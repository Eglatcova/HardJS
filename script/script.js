'use srtict';

const week = [

  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'

];

const date = new Date();

const getWeekDay = (date) => {
  date = new Date();
  let days = week;
  let day = date.getDay() - 1;
  return days[day];
};

week.forEach((element, index) => {

  const div = document.createElement('div');

  let html = week[index];

  if (index === 5 || index === 6) {
    html = html.italics();
    div.innerHTML = html;
    document.body.append(div);

  } else {
    div.innerHTML = html;
    document.body.append(div);
  }

  if (week[index] === getWeekDay(date)) {
    html = html.bold();
    div.innerHTML = html;
    document.body.append(div);
  }
});