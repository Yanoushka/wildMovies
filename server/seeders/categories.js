'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [{
      name: 'Action',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Science-fiction',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Comédie',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Aventure',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Drame',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Fantastique',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Crime',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Thriller',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Amour',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Horreur',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return new Promise((resolve, reject) => {
      queryInterface.bulkDelete('categories').then(() => {
        return queryInterface.sequelize.query('ALTER TABLE categories AUTO_INCREMENT = 1');
      }).then(() => {
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  }
};