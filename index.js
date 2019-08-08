document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  const newJokeLi = document.createElement('li')
  const username = document.getElementById('name-input').value
  let joke;

  function fetchJoke(){
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => {joke = jokeData.joke});
  }

  function setJoke(){
    fetchJoke()
  }
  setJoke()

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const username = event.target[0].value
    if(username === "") return;
    newJokeLi.innerHTML = `
    <span class="username">${username} says:</span> ${joke}
    `
    jokeList.appendChild(newJokeLi)
    setJoke()
  })
})
