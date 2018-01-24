module.exports = (sequelize, DataTypes) => {

    const Movie = sequelize.define('movie', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      description: DataTypes.TEXT,
      year: DataTypes.INTEGER,
      realisator: DataTypes.STRING,
      actor: DataTypes.STRING,
      image: DataTypes.STRING,
    });
  
    Movie.associate = (models) => {
        Movie.belongsTo(models.category);
    };
  
    return Movie;
  };