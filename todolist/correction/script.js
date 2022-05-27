/**
 * Récupérer les éléments du DOM / Création Variable
 */
// Récupération de l'input de mon index.html
const input = document.querySelector(".input");
// Récupération du bouton Ajouter de mon index.html
const buttonAdd = document.querySelector(".buttonAdd");
// Récupération de la balise ul pour stocker mes task
const list = document.querySelector(".list");

/**
 * Placer un écouteur d'evenement sur notre buttonAdd
 */

buttonAdd.addEventListener("click", function () {
  // SI LA VALEUR DE L'INPUT EST VIDE ON ENVOI UNE ALERTE ERREUR
  // SINON ON ENVOI LA CREATION DE L'ELEMENT

  if (input.value == "") {
    alert("Veuillez remplir le champs");
  } else {
    // Création de mon élément LI
    let li = document.createElement("li");
    // Création de mon bouton check
    let checkButton = document.createElement("button");
    // Création de mon bouton supprimer
    let deleteButton = document.createElement("button");
    // Création de mon bouton modifier
    let modifButton = document.createElement("button");
    // DOnner une valeur à mon bouton Check
    checkButton.innerText = "En Cours";
    // Donner une valeur à mon bouton SUpprimer
    deleteButton.innerText = "Supprimer";
    // DOnner une valeur à mon bouton modifier
    modifButton.innerText = "M";
    // Stocker la valeur de mon input dans une variable
    let inputValue = input.value;
    // Donner une valeur à l'interieur de la balise LI qui est la valeur de mon input
    li.innerText = inputValue;
    // Faire apparaitre mon bouton Check dans le parent li
    li.appendChild(checkButton);
    // Faire apparaitre mon bouton supprimer dans le parent LI
    li.appendChild(deleteButton);
    // Faire apparaitre  mon bouton modifier dans le parent LI
    li.appendChild(modifButton);
    //  Appeler l'enfant LI dans le parent list
    list.appendChild(li);
    // Vider l'input pour que l'utilisateur pusise remettre une nouvelle valeur
    input.value = "";

    /**
     * CREATION DE MON EVENEMENT QUI VA MARQUER MA TACHE EN COURS
     */
    checkButton.addEventListener("click", function () {
      // CONDITION SI LA VALEUR DE CHECK BUTTON EST ANNULER ON PASSE LA VALEUR DU BOUTON A EN COURS
      // SINON ON PASSE LA VALEUR DU BOUTON A ANNULER ET ON RAJOUTE UN LINE THROUGH
      if (checkButton.innerText == "Annuler") {
        li.style.textDecoration = "";
        checkButton.innerText = "En Cours";
      } else {
        // Modifier le style de li pour le démarquer des autres
        li.style.textDecoration = "line-through";
        checkButton.innerText = "Annuler";
      }
    });
    /**
     * CREATION DE L'EVENEMENT SUPPRESSION AVEC LE BOUTON SUPPRIMER
     */
    deleteButton.addEventListener("click", function () {
      if (confirm("Voulez vous supprimer la tâche ?")) {
        // Suppression de la li sur la quelle on a cliqué
        li.remove();
      } else {
        false;
      }
    });
    /**
     * CREATION DE L'EVENEMENT MODIF AVEC LE BOUTON MODIF
     */
    modifButton.addEventListener("click", function () {
      // Cacher notre li
      li.style.display = "none";
      // Création de notre input
      let liInput = document.createElement("input");
      liInput.setAttribute("type", "text");
      list.appendChild(liInput);

      /**
       * Création d'evenement avec la touche entrée qui va modifier notre li
       */
      liInput.addEventListener("keydown", function (e) {
        if (e.key == "Enter") {
          li.innerText = liInput.value;
          li.style.display = "";
          liInput.style.display = "none";

          // Faire réapparaitre mes boutons une fois la modification effectué
          li.appendChild(checkButton);
          // Faire apparaitre mon bouton supprimer dans le parent LI
          li.appendChild(deleteButton);
          // Faire apparaitre  mon bouton modifier dans le parent LI
          li.appendChild(modifButton);
        } else {
          false;
        }
      });
    });
  }
});
