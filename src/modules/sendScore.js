const gameApiSend = async (user, score) => {
  try {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CdmmlqRyZ0rIHBCP4fyu/scores', {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    return 'score sent!';
  } catch (err) {
    return `an error has occured while sending score! ${err}`;
  }
};
export default gameApiSend;