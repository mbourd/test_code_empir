# test_code_meteorjs_export

## Description FR
En utilisant Meteor.js avec Blaze comme framework front, réalise une liste d'export qui répond aux règles suivantes :
+ La page doit afficher un bouton "Export" qui permet de démarrer de façon asynchrone un nouvel export
+ La page doit afficher la liste des exports avec leur progression
+ Une fois l'export terminé, la liste doit afficher l'URL du résultat 

### Un export se définit de la façon suivante :
+ Un export est terminé lorsqu'il atteint 100%
+ Il avance de 5% chaque seconde
+ une fois arrivé à 100%, il sélectionne une url au hasard parmi les urls suivantes
  - https://www.exemple1.com/
  - https://www.exemple2.com/
  - https://www.exemple3.com/
  - https://www.exemple4.com/
