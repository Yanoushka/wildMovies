'use strict';

angular.module('moviesApp')

  .config(function ($translateProvider) {

    $translateProvider

      .translations('en', {
        BUTTON: {
          ADD: 'Add',
          DELETE: 'Delete',
          SAVE: 'Save',
          CANCEL: 'Cancel',
          RETURN: 'Return',
          VALIDATE: 'Validate'
        },
        NAVBAR: {
          TITLE: 'WILD MOVIES',
          LANGUAGE: 'Language',
          ENGLISH: 'English',
          FRENCH: 'French',
        },
        MOVIE_ADD: {
          TITLE: 'Title',
          DESCRIPTION: 'Description',
          IMAGE: 'Image',
          COUNT: 'Person count',
          CATEGORY: 'Category',
          FILESIZE: 'File too large',
          SELECT: 'Select image file',
          DROP: 'or drop it here',
          PREVIEW: 'Preview',
          ACTOR: 'Main actors',
          REALISATOR: 'Realisator',
          YEAR: 'Year'
        },
        ALL: 'All'
      })

      .translations('fr', {
        BUTTON: {
          ADD: 'Ajouter',
          DELETE: 'Effacer',
          SAVE: 'Sauver',
          CANCEL: 'Annuler',
          RETURN: 'Retour',
          VALIDATE: 'Valider'
        },
        NAVBAR: {
          TITLE: 'FILMS SAUVAGES',
          LANGUAGE: 'Langage',
          ENGLISH: 'Anglais',
          FRENCH: 'Français',
          LOGOUT: 'Déconnexion',
        },
        MOVIE_ADD: {
          TITLE: 'Titre',
          DESCRIPTION: 'Description',
          IMAGE: 'Image',
          COUNT: 'Nombre de personnes',
          CATEGORY: 'Categorie',
          FILESIZE: 'Fichier trop lourd',
          SELECT: 'Choisir un fichier',
          DROP: 'ou le déposer ici',
          PREVIEW: 'Aperçu',
          ACTOR: 'Acteurs principaux',
          REALISATOR: 'Réalisateur',
          YEAR: 'Année'
        },
        ALL: 'Toutes'
      })

      .useSanitizeValueStrategy('escape')
      .preferredLanguage('fr')
      .fallbackLanguage('fr');
  });