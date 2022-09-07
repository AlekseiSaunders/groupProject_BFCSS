const Movie = require('../models/Movie')


exports.getMovies = async (req, res) => {
  console.log(req.user)
  try {
    const userMovies = await Movie.find({ userId: req.user.id })
    // following lines not needed currently unless we want to list the number of movies a user has selected  
    // const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
    // old res.render with itemsLeft as passed value in case needed in future
    // res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
    res.render('movies.ejs', { movies: userMovies, user: req.user })
  } catch (err) {
    console.log(err)
  }
}

exports.addMovie = async (req, res) => {
  try {
    await Movie.create({ title: req.body.movieTitle, movieId: req.body.movieId, image: req.body.movieImage, watched: false, recommend: false, userId: req.user.id })
    console.log('Movie has been added!')
    res.redirect('/movies')
  } catch (err) {
    console.log(err)
  }
}

exports.markWatched = async (req, res) => {
  try {
    await Movie.findOneAndUpdate({ _id: req.body.movieIdFromJSFile }, {
      watched: true
    })
    console.log('Marked Watched')
    res.json('Marked Watched')
  } catch (err) {
    console.log(err)
  }
}

exports.markNotWatched = async (req, res) => {
  try {
    await Movie.findOneAndUpdate({ _id: req.body.movieIdFromJSFile }, {
      watched: false
    })
    console.log('Marked Not Watched')
    res.json('Marked Not Watched')
  } catch (err) {
    console.log(err)
  }
}

exports.rateMovie = async (req, res) => {
  try {
    await Movie.findOneAndUpdate({ _id: req.body.movieIdFromJSFile }, {
      rating: red.body.movieRating
    })
    console.log('Movie Rating Updated')
    res.json('Movie Rating Updated')
  } catch (err) {
    console.log(err)
  }
}

exports.reviewMovie = async (req, res) => {
  try {
    await Movie.findOneAndUpdate({ _id: req.body.movieIdFromJSFile }, {
      review: req.body.movieReview
    })
  } catch (err) {
    console.log(err)
  }
}

exports.deleteMovie = async (req, res) => {
  console.log(req.body.movieIdFromJSFile)
  try {
    await Movie.findOneAndDelete({ _id: req.body.movieIdFromJSFile })
    console.log('Deleted Movie')
    res.json('Deleted Movie')
  } catch (err) {
    console.log(err)
  }
}
