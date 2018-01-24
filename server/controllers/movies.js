const multer = require('multer');
const path = require('path');
const fs = require('fs');

const models = require('../models');

const config = require('../config')();

const uploadPath = path.resolve(config.publicPath, config.imagesPath);

const upload = multer({
  dest: uploadPath
}).single('file');

module.exports = class {

  /**
   * Return all movies without their descriptions
   * @param {*} req 
   * @param {*} res 
   */
  findAll(req, res) {

    let options = {
      attributes: ['id', 'title', 'image', 'year', 'realisator', 'actor', 'categoryId'],
      include: [{
        attributes: ['name'],
        model: models.category,
        as: 'category'
      }]
    };

    let categoryId = parseInt(req.query.categoryId);
    if (categoryId) {
      options.where = {
        categoryId: categoryId
      };
    }

    models.movie.findAll(options).then((movies) => {
      res.json(movies);
    }).catch((err) => {
      res.status(500).send(err);
    });
  }

  /**
   * Return the requested movie details
   * @param {*} req 
   * @param {*} res 
   */
  findOne(req, res) {
    models.movie.findById(req.params.id, {
      include: [{
        model: models.category,
        as: 'category'
      }]
    }).then((movie) => {
      if (movie) {
        res.json(movie);
      } else {
        res.sendStatus(404);
      }
    }).catch((err) => {
      res.status(500).send(err);
    });
  }

  /**
   * Create a new movie from the body data
   * @param {*} req 
   * @param {*} res 
   */
  create(req, res) {
    let result;
    models.movie.create(req.body).then((movie) => {
      result = movie;
    }).then((info) => {
      res.json(result);
    }).catch((err) => {
      res.status(500).send(err);
    });
  }

  /**
   * Upload movie image
   * @param {*} req 
   * @param {*} res 
   */
  uploadImage(req, res) {
    upload(req, res, (err) => {
      if (err) {
        res.json(err);
      } else {
        res.json({
          originalFilename: req.file.originalname,
          url: path.join(config.imagesPath, req.file.filename)
        });
      }
    });
  }

  /**
   * Delete the movie image if any. Always resolve the promise,
   * even upon image deletion error
   * @param {*} movie
   * @return {Promise}
   */
  _deleteImage(movie) {
    return new Promise((resolve, reject) => {
      if (movie.image) {
        let imagePath = path.resolve(config.publicPath, movie.image);
        fs.unlink(imagePath, (err) => {
          if (err) {
            console.log(`Error deleting image ${movie.image}`, err);
          }
          resolve(movie);
        });
      } else {
        resolve(movie);
      }
    });
  }

  /**
   * Delete the specified movie. First find the requested movie, then delete the downloaded image if any
   * and terminate by deleting the movie itself
   * @param {*} req 
   * @param {*} res 
   */
  delete(req, res) {
    models.movie.findOne({
      where: {
        id: req.params.id
      }
    }).then((movie) => {
      return this._deleteImage(movie);
    }).then((movie) => {
      return movie.destroy();
    }).then(() => {
      res.sendStatus(200);
    }).catch((err) => {
      res.status(500).send(err);
    });
  }
};