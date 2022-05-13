import './style.css';
import { setScores } from './modules/API.js';
import displayPlayers from './modules/display.js';
import sound from './audio/levelup.mp3';

const submit = document.getElementById('submit');
const refresh = document.querySelector('.refresh');
const name = document.getElementById('name');
const score = document.getElementById('score');
const audio = new Audio(sound);

displayPlayers();

refresh.addEventListener('click', () => {
  displayPlayers();
});

submit.addEventListener('click', () => {
  if (name.value !== '' && score.value !== '') {
    audio.play();
  }
  setScores(name.value, score.value);
  name.value = '';
  score.value = '';
});
