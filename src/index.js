import _ from 'lodash';
import Leader from './modules/leaderboard.js';
import Score from './modules/score.js';

const leaderboard = new Leader();

const display = (scoreObj) => {
  const template = `<li>
                        <span>${scoreObj.name}</span>
                        <span>${scoreObj.score}</span>
                    </li>`
}