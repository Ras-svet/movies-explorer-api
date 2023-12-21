const router = require('express').Router();
const { validationCreateMovie, validationDeleteMovieById } = require('../middlewares/validator');
const { getMovies, createMovie, deleteMovieById } = require('../controllers/movies');

router.get('/', getMovies);
router.post('/', validationCreateMovie, createMovie);
router.delete('/:movieId', validationDeleteMovieById, deleteMovieById);

module.exports = router;
