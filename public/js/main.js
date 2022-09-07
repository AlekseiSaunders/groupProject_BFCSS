const deleteBtn = document.querySelectorAll('.del')
const movieItems = document.querySelectorAll('span.not')
const movieComplete = document.querySelectorAll('span.completed')
let movieArray = []

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener('click', deleteMovie)
})

Array.from(movieItems).forEach((el) => {
  el.addEventListener('click', markWatched)
})

Array.from(movieComplete).forEach((el) => {
  el.addEventListener('click', markNotWatched)
})


document.querySelector('#searchMovies').addEventListener('click', searchMovies)

function searchMovies() {
  const choice = document.querySelector('#movieSearch').value
  console.log(choice)

  const url = `https://imdb-api.com/en/API/SearchMovie/k_fnr2z065/${choice}`;

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      movieArray = []
      movieArray = data.results
      console.log(movieArray)
      data.results.forEach(obj => {
        const li = document.createElement('li')
        li.classList.add('movieLi')
        let pic = document.createElement("img")
        pic.classList.add('poster')
        let addButton = document.createElement("button")
        addButton.classList.add('addBtn')
        li.textContent = `${obj.title} ${obj.description}`
        pic.src = `${obj.image}`
        addButton.innerText = 'Add This Movie!'
        addButton.id = `${obj.id}`
        console.log(addButton)
        li.appendChild(addButton)
        li.appendChild(pic)
        document.querySelector("ul").appendChild(li)
      })
      const addButtons = document.querySelectorAll('.addBtn')
      Array.from(addButtons).forEach((el) => {
        el.addEventListener('click', handleAddMovie)
      })
      console.log('You should have buttons now')
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

function handleAddMovie() {
  console.log(`Button ID: ${this.id}?`)
  let yourMovie = movieArray.filter(movie => movie.id === this.id)
  console.log(yourMovie[0].image)
  addMovie(yourMovie[0].title, yourMovie[0].id, yourMovie[0].image)
}

async function addMovie(title, id, image) {
  try {
    const response = await fetch('movies/addMovie', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        movieTitle: title,
        movieId: id,
        movieImage: image
      })
    })
    const data = await response.json()
    console.log(data)
    res.redirect('/movies')
  } catch (err) {
    console.log(err)
  }
}

async function deleteMovie() {
  const movieId = this.parentNode.dataset.id
  try {
    const response = await fetch('movies/deleteMovie', {
      method: 'delete',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        'movieIdFromJSFile': movieId
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}

async function markWatched() {
  const todoId = this.parentNode.dataset.id
  try {
    const response = await fetch('movies/markComplete', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        'movieIdFromJSFile': movieId
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}

async function markNotWatched() {
  const todoId = this.parentNode.dataset.id
  try {
    const response = await fetch('movie/markNotWatched', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        'movieIdFromJSFile': movieId
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}

//Formatting Code

