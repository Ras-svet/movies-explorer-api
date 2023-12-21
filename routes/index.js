const router = require('express').Router();

const NotFoundError = require('../errors/not-found-error');

const auth = require('../middlewares/auth');
const {
  validationSignIn,
  validationSignUp,
} = require('../middlewares/validator');

const userRoutes = require('./users');
const movieRoutes = require('./movies');

const { login, createUser } = require('../controllers/users');

router.post('/signin', validationSignIn, login);
router.post('/signup', validationSignUp, createUser);

router.use(auth);

router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.use('*', (req, res, next) => {
  next(new NotFoundError('Запрос отправлен по неправильному URL'));
});

module.exports = router;
