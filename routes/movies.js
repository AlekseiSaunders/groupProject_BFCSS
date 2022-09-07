const express = require('express')
const router = express.Router()
const moviesController = require('../controllers/movies') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, moviesController.getMovies)

router.post('/addMovie', moviesController.addMovie)

router.put('/markWatched', moviesController.markWatched)

router.put('/markNotWatched', moviesController.markNotWatched)

router.put('/rateMovie', moviesController.rateMovie)

router.put('/reviewMovie', moviesController.reviewMovie)

router.delete('/deleteMovie', moviesController.deleteMovie)

module.exports = router