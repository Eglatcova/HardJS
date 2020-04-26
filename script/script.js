'use srtict';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

function game1() {
  //let rightNumber = 7;
  rightNumber = getRandomInt(100);
  number = prompt("Угадай число от 1 до 100");
  let i = 10;
  const game2 = function () {
    if (number === null) {
      alert('До встречи!')
      return;
    }
    if (isNaN(number) === true || number === '') {
      number = prompt("Введите число!");
      return game2();
    }
    i = i - 1;
    if (number > rightNumber) {
      if (i === 0) {
        number2 = confirm('Попытки закончились, хотите сыграть еще?'); 
        i = 10;
        if (number2 === false) {
          alert('До встречи!')
          return;
        }
        number = prompt("Угадай число от 1 до 100");
        return game2();
      }
      
      alert("Загаданное число меньше, осталось попыток" + ' ' + i);
      number = prompt("Угадай число от 1 до 100");
      return game2();

    } else if (number < rightNumber) {
      if (i === 0) {
        number2 = confirm('Попытки закончились, хотите сыграть еще?');
        i = 10;
        if (number2 === false) {
          alert('До встречи!')
          return;
        }
        number = prompt("Угадай число от 1 до 100");
        return game2();
      }

      alert("Загаданное число больше, осталось попыток" + ' ' + i);
      number = prompt("Угадай число от 1 до 100");
      return game2();
    } else {
      alert("Вы угадали!");
      number3 = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
      if (number3 === false) {
        alert('До встречи!')
        return;
      }
      number = prompt("Угадай число от 1 до 100");
      rightNumber = getRandomInt(100);
      i = 10;
      return game2();
    }
  };
  return game2;
}

let resultGame = game1();
resultGame();