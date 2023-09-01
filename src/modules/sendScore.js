const gameApiSend = async (user, score) => { 
  try {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4clKnBGqzg8jtb9gbQYY/scores', {
    method: 'POST',
    body: JSON.stringify({
      user: user,
      score: score
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return 'score sent!';
}
catch (err)
{
  return `an error has occured while sending score! ${err}`;
}
}
export default gameApiSend;