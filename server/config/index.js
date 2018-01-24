const path = require('path');

let settings = {
  serverPort: process.env.NODE_PORT || 3000,
  imagesPath: 'images',
  publicPath: '',
  basePath: '',
};

module.exports = (basePath) => {

  if (basePath) {
    // Read the sequelize config file
    settings.env = process.env.NODE_ENV || 'development';
    let dbSettings = require('./config.json')[settings.env];

    // Build the base front directory path
    settings.publicPath = path.join(basePath, 'public');
    settings.serverPath = path.join(basePath, 'server');

    // Extend base config with database one
    for (let key in dbSettings) {
      if (dbSettings.hasOwnProperty(key)) {
        settings[key] = dbSettings[key];
      }
    }
  }

  return settings;
};