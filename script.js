let prénom = "Arnaud";

let MOI = {
  cerveau: true,
  nom: "ATHUIL",
  prenom: "David",
  passion:"tennis",
 };

// Modification du cerveau
let AUTRE = {
    cerveau: true,
    nom: "ATHUIL",
    prenom: "elsa",
    passion:"TV",
   };
moi.cerveau = false;

console.log(humain);

// Ajout de pied à l'humain
moi.pied = 2;



/**
 *  PARTIE TABLEAU
 *
 *  INDEX 0 = Premier élément du tableau
 * INDEX 1 = deuxième élément du tableau
 */

let array1 = [1, 2, 3, 4];



console.log("array1:", array1);

// Ajouter un élément dans mon tableau
array1.push(5);

// Trouver l'index d'une valeur de mon tableau
let indexATrouver = array1.indexOf(4);

console.log("indexAtrouver:", indexATrouver);

// Suppression d'une valeur dans le tableau
// On veut supprimer l'indexA trouver une fois
array1.splice(1, 1);

console.log("1", array1);