// Run this code when you want to create a new game ID

const prevApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const endpoint = async () => {
  await fetch(prevApi, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'new game name' }),
  });
};
endpoint();