'use srtict';

//////////////////////////

const divTime = document.createElement('div');

let timeNowLong = () => {

  const now = new Date();

  const nowWeek = () => {
    const weekRu = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
      ],
      weekDay = now.getDay();
    return weekRu[weekDay];
  };
  
  const nowMonth = () => {
    const monthRu = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря'
      ],
      monthNow = now.getMonth();
    return monthRu[monthNow];
  };
  
  const rightHours = () => {
  
    let rightWordHour;
  
    if ((now.getHours() > 1 && now.getHours() < 5) || now.getHours() > 21) {
      rightWordHour = 'часа';
      return rightWordHour;
    } else if (now.getHours() === 1 || now.getHours() === 21) {
      rightWordHour = 'час';
      return rightWordHour;
    } else {
      rightWordHour = 'часов';
      return rightWordHour;
    }
  
  };
  
  const rightMinutes = () => {
  
    let rightWordMinute;
  
    if ((now.getMinutes() > 4 && now.getMinutes() < 21) || (now.getMinutes() > 24 && now.getMinutes() < 31) || (now.getMinutes() > 34 && now.getMinutes() < 41) || (now.getMinutes() > 44 && now.getMinutes() < 51) || now.getMinutes() > 54) {
      rightWordMinute = 'минут';
      return rightWordMinute;
    } else if (now.getMinutes() === 1 || now.getMinutes() === 21 || now.getMinutes() === 31 || now.getMinutes() === 41 || now.getMinutes() === 51) {
      rightWordMinute = 'минута';
      return rightWordMinute;
    } else {
      rightWordMinute = 'минуты';
      return rightWordMinute;
    }
  };
  
  const rightSeconds = () => {
  
    let rightWordSecond;
  
    if ((now.getSeconds() > 4 && now.getSeconds() < 21) || (now.getSeconds() > 24 && now.getSeconds() < 31) || (now.getSeconds() > 34 && now.getSeconds() < 41) || (now.getSeconds() > 44 && now.getSeconds() < 51) || now.getSeconds() > 54) {
      rightWordSecond = 'секунд';
      return rightWordSecond;
    } else if (now.getSeconds() === 1 || now.getSeconds() === 21 || now.getSeconds() === 31 || now.getSeconds() === 41 || now.getSeconds() === 51) {
      rightWordSecond = 'секунда';
      return rightWordSecond;
    } else {
      rightWordSecond = 'секунды';
      return rightWordSecond;
    }
  }
  
  let html1 = 'Сегодня' + ' ' + nowWeek() + ', ' + now.getDate() + ' ' + nowMonth() + ' ' + now.getFullYear() + ' года ' + now.getHours() + ' ' + rightHours() + ' ' + now.getMinutes() + ' ' + rightMinutes() + ' ' + now.getSeconds() + ' ' + rightSeconds();

  return(html1);

};

divTime.innerHTML = timeNowLong();
document.body.append(divTime);

let conclusionLong = () => {
  divTime.innerHTML = timeNowLong();
  document.body.append(divTime);
};

setInterval(conclusionLong, 1000);

///////////////////////

const divTime2 = document.createElement('div');

let timeNow = () => {

let now2 = new Date(),
dd = String(now2.getDate()).padStart(2, '0'),
mm = String(now2.getMonth() + 1).padStart(2, '0'), 
yyyy = now2.getFullYear(),
hh = String(now2.getHours()).padStart(2, '0'),
mi = String(now2.getMinutes()).padStart(2, '0'),
ss = String(now2.getSeconds()).padStart(2, '0');

now2Html = mm + '.' + dd + '.' + yyyy + ' - ' + hh + ':' + mi + ':' +ss;
return now2Html;
}; 

divTime2.innerHTML = timeNow();
document.body.append(divTime2);

let conclusion = () => {
  divTime2.innerHTML = timeNow();
  document.body.append(divTime2);
 
};

setInterval(conclusion, 1000);






