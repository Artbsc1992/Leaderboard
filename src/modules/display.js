import { getScores } from './API.js';

const playerList = document.querySelector('.playerList');

const displayPlayers = () => {
  if (playerList.querySelectorAll('li')) {
    Array.from(playerList.querySelectorAll('li')).forEach((li) => {
      playerList.removeChild(li);
    });
  }

  getScores().then((result) => {
    const orderScores = result.result.sort((a, b) => b.score - a.score);
    orderScores.forEach((score) => {
      const li = document.createElement('li');
      li.className = 'item';
      const p = document.createElement('p');
      p.className = 'warrior';
      const text = document.createTextNode(`${score.user}: ${score.score}`);
      p.appendChild(text);
      li.appendChild(p);
      playerList.appendChild(li);
    });
  });
};

export default displayPlayers;