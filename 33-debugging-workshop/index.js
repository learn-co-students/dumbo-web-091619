document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')

  let joke;

  function fetchJoke(){
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(function(res){
      return res.json()
    })

  }


  form.addEventListener('submit', (event) => {
    event.preventDefault()
    let username = document.getElementById('name-input').value
    if(username === "") return;

    let promiseObj = fetchJoke()

    promiseObj
    .then(jokeData => {
      joke = jokeData.joke
      const newJokeLi = document.createElement('li')

      newJokeLi.innerHTML = `
      <span class="username">${username} says:</span> ${joke}
      `
      jokeList.appendChild(newJokeLi)
    })


  })



})
