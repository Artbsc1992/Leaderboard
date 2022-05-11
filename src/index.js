import './style.css';
import { setScores } from './modules/API.js';
import displayPlayers from './modules/display.js';

const submit = document.getElementById('submit');
const refresh = document.querySelector('.refresh');
const name = document.getElementById('name');
const score = document.getElementById('score');

displayPlayers();

refresh.addEventListener('click', () => {
  displayPlayers();
});

submit.addEventListener('click', () => {
  setScores(name.value, score.value);
  name.value = '';
  score.value = '';
});
