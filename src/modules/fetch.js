const gameApiSend = () => { fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/PNs6qW3tahPZnCACAuYx/scores', {
    method: 'POST',
    body: JSON.stringify({
      user: 'jane',
      score: '34'
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((result) => result.json())
    .then((json) => console.log(JSON.parse(json)));
  
}



PNs6qW3tahPZnCACAuYx

  export default gameApi;