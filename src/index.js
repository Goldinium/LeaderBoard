import './style.css';

import getScores from './modules/getScores.js';
import gameApiSend from './modules/sendScore.js';

getScores();
const submit = document.getElementById('submitbtn');

let user = '';
let score = '';

submit.addEventListener('click', () => {
  user = document.getElementById('player').value;
  score = document.getElementById('score').value;
  gameApiSend(user, score);
});

const downScores = document.getElementById('refreshBtn');
downScores.addEventListener('click', () => {
  getScores();
});
