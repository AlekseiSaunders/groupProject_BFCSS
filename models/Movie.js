const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  movieId: {
    type: String,
  },
  image: {
    type: String,
  },
  releaseDate: {
    type: String,
  },
  watched: {
    type: Boolean,
  },
  recommend: {
    type: Boolean,
  },
  rating: {
    type: Number
  },
  review: {
    type: String
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Movie', MovieSchema)