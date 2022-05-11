const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6RKhuxySSohuLlFSECHK/scores';

export const getScores = async () => {
  const response = await fetch(api);
  const scores = await response.json();
  return scores;
};

export const setScores = async (username, userscore) => {
  const response = await fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: username, score: userscore }),
  });
  const scores = response.json();
  return scores;
};
