const getScores = async () => { 
    document.getElementById('scores').innerHTML ='';

    try {
    let response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4clKnBGqzg8jtb9gbQYY/scores')
    let data = await response.json();
    data.result.forEach((players, index) => {
    document.getElementById('scores').innerHTML += `<div class="players_rows" id="${index}">${players.user}: ${players.score}</div>`;
});
return 'Recieved all scores';
    }
    catch (error) {
        return `Error fetching scores: ${error}`;
      }
      
  };

export default getScores;