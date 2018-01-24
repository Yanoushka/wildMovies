const MoviesController = require('../controllers/movies');

module.exports = (express) => {

  const moviesController = new MoviesController;
  const router = express.Router();

  router.get('/', (req, res, next) => {
    moviesController.findAll(req, res);
  });

  router.get('/:id', (req, res) => {
    moviesController.findOne(req, res);
  });

  router.post('/', (req, res) => {
    moviesController.create(req, res);
  });

  router.post('/image', (req, res) => {
    moviesController.uploadImage(req, res);
  });

  router.delete('/:id', (req, res) => {
    moviesController.delete(req, res);
  });

  return router;
};