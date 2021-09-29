fetch('https://meme-api.herokuapp.com/gimme')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.url;
   const jokeElement = document.getElementById('jokeElement');
        jokeElement.src = jokeText;
      console.log(jokeText)
    })