export default class Leader {
    constructor () {
        this.leader = [];
    }

    addScore(score){
        this.Leader.push(score);
        localStorage.setItem('Leaderboard', JSON.stringify(this.leader));
    }

}