
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('movies', [{
      title: 'Pulp Fiction',
      description: `L'odyssée sanglante et burlesque de petits malfrats dans la jungle de Hollywood à travers trois histoires qui s'entremêlent.`,
      image: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg',
      year: '1994',
      realisator: 'Quentin Tarantino',
      categoryId: 1,
      actor: 'John Travolta, Samuel L. Jackson, Bruce Willis, Uma Thurman',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Fight club',
      description: `Le narrateur, sans identité précise, vit seul, travaille seul, dort seul, mange seul ses plateaux-repas pour une personne comme beaucoup d'autres personnes seules qui connaissent la misère humaine, morale et sexuelle. C'est pourquoi il va devenir membre du Fight club, un lieu clandestin ou il va pouvoir retrouver sa virilité, l'échange et la communication. Ce club est dirigé par Tyler Durden, une sorte d'anarchiste entre gourou et philosophe qui prêche l'amour de son prochain.`,
      year: '1999',
      realisator: 'David Fincher',
      actor: 'Edward Norton, Brad Pitt, Helena Bonham Carter',
      categoryId: 5,
      createdAt: new Date(),
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzFjMWNhYzQtYTIxNC00ZWQ1LThiOTItNWQyZmMxNDYyMjA5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'INGLOURIOUS BASTERDS',
      description: `Dans la France occupée de 1940, Shosanna Dreyfus assiste à l'exécution de sa famille tombée entre les mains du colonel nazi Hans Landa. Shosanna s'échappe de justesse et s'enfuit à Paris où elle se construit une nouvelle identité en devenant exploitante d'une salle de cinéma.
      Quelque part ailleurs en Europe, le lieutenant Aldo Raine forme un groupe de soldats juifs américains pour mener des actions punitives particulièrement sanglantes contre les nazis. "Les bâtards", nom sous lequel leurs ennemis vont apprendre à les connaître, se joignent à l'actrice allemande et agent secret Bridget von Hammersmark pour tenter d'éliminer les hauts dignitaires du Troisième Reich. Leurs destins vont se jouer à l'entrée du cinéma où Shosanna est décidée à mettre à exécution une vengeance très personnelle...`,
      year: '2009',
      realisator: 'Quentin Tarantino, Eli Roth',
      categoryId: 1,
      actor: 'Brad Pitt, Mélanie Laurent, Christoph Waltz, Michael Fassbender, Diane Kruger',
      image: 'https://images-na.ssl-images-amazon.com/images/I/71t14nj8cKL._SY445_.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'E.T.',
      description: `Une soucoupe volante atterrit en pleine nuit près de Los Angeles. Quelques extraterrestres, envoyés sur Terre en mission d'exploration botanique, sortent de l'engin, mais un des leurs s'aventure au-delà de la clairière où se trouve la navette. Celui-ci se dirige alors vers la ville. C'est sa première découverte de la civilisation humaine. Bientôt traquée par des militaires et abandonnée par les siens, cette petite créature apeurée se nommant E.T. se réfugie dans une résidence de banlieue.
      Elliot, un garçon de dix ans, le découvre et lui construit un abri dans son armoire. Rapprochés par un échange télépathique, les deux êtres ne tardent pas à devenir amis. Aidé par sa soeur Gertie et son frère aîné Michael, Elliot va alors tenter de garder la présence d'E.T. secrète.`,
      year: '1982',
      realisator: 'Steven Spielberg',
      actor: 'Dee Wallace, Henry Thomas, Peter Coyote',
      categoryId: 2,
      createdAt: new Date(),
      image: 'http://i.dailymail.co.uk/i/pix/2017/01/26/17/3C8B191E00000578-4161070-image-m-19_1485451450954.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Forrest Gump',
      description: `Quelques décennies d'histoire américaine, des années 1940 à la fin du XXème siècle, à travers le regard et l'étrange odyssée d'un homme simple et pur, Forrest Gump.`,
      year: '1994',
      realisator: 'Robert Zemeckis',
      actor: 'Tom Hanks',
      createdAt: new Date(),
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg',
      categoryId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return new Promise((resolve, reject) => {
      queryInterface.bulkDelete('movies').then(() => {
        return queryInterface.sequelize.query('ALTER TABLE movies AUTO_INCREMENT = 1');
      }).then(() => {
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  }
};