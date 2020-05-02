'use srtict';

const colorcreate = document.querySelector('.colorcreate'),
colorDiv = document.querySelector('.container'),
title = document.querySelector('.title');


const create = () => {
 let colorNew = '#' + (Math.random().toString(16)).substring(2,8).toUpperCase();
 colorDiv.style.background = colorNew;
 title.innerHTML = colorNew;
};

colorcreate.addEventListener('click', create);