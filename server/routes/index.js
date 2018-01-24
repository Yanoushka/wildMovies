
const moviesRoutes = require('./movies');
const categoriesRoutes = require('./categories');

const config = require('../config')();

module.exports = (app, express) => {

  app.use('/movies', moviesRoutes(express));
  app.use('/categories', categoriesRoutes(express));

  /**
   * The default error handler when all route matching has failed
   */
  app.use((err, req, res, next) => {});
};