/**
 * script.js - Geolocalisation
 */

/**
 * Création de la fonction qui permet de savoir ta géolocalisation
 */

function checkGeolocation() {
  /* Récupération des query selectors */
  let myLocButton = document.querySelector(".myLocButton");
  let myPosition = document.querySelector(".myPosition");

  //Création de l'écouteurs d'évenement sur le bouton myLocButton
  myLocButton.addEventListener("click", function () {
    // Si le navigateur accepte la geolocalisation:
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        //Callback de la fonction getCurrentPosition qui renvoi les coordonnées GPS.
        (data) => {
          myPosition.innerHTML =
            "lat " + data.coords.latitude + " long " + data.coords.longitude;
        }
      );
    }
    // Sinon envoi du message ci-dessous
    else {
      positionDisplay.innerHTML =
        "Geolocation is not supported by this browser.";
    }
  });
}

/**
 * Sauvegarde de la position dans le localStorage
 */
function savePositionInStorage() {
  /* Récupération des query selectors */
  let mySavedPositionButton = document.querySelector(".mySavePositionButton");
  let mySavedPosition = document.querySelector(".mySavedPosition");

  mySavedPositionButton.addEventListener("click", function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        //Callback de la fonction getCurrentPosition qui renvoi les coordonnées GPS.
        (data) => {
          console.log(data);
          // Enregistrement de la data dans le local Storage
          localStorage.setItem("@lat", data.coords.latitude);
          localStorage.setItem("@long", data.coords.longitude);

          // Récupération des données dans le localStorage grâce au nom donné dans le setItem
          let latitude = c
          let longitude = localStorage.getItem("@long");

          // Affichage de la data avec le querySelector mySavedPosition
          mySavedPosition.innerHTML =
            "Ma position sauvegardée est Lat: " +
            latitude +
            " Long: " +
            longitude;
        }
      );
    } else {
      positionDisplay.innerHTML =
        "Geolocation is not supported by this browser.";
    }
  });
}

/**
 * Initialisation de la réinitialisation de position
 */
function initReset() {
  /* Récupération des query selectors */
  const myDeleteButton = document.querySelector(".myDeleteButton");
  let myPosition = document.querySelector(".myPosition");
  let myLastPosition = document.querySelector(".myLastPosition");

  /* Evènement de réinitialisation */
  myDeleteButton.addEventListener("click", function () {
    /* Suppression de la sauvegarde de la position */
    localStorage.removeItem("@lat");
    localStorage.removeItem("@long");

    myPosition.innerText = ""
    myLastPosition.innerText = " "

    // Alerte confirmant la bonne suppression du localStorage
    alert("Votre loca a bien été réinitialiser");
  });
}

/**
 * Récupération de la localisation dans le localStorage
 */
function getMyStorageLocation() {
  /* Récupération des query selectors */
  let myLastPositionButton = document.querySelector(".myLastPositionButton");
  let myLastPosition = document.querySelector(".myLastPosition");

  // Récupération du localStorage
  let latitude = localStorage.getItem("@lat");
  let longitude = localStorage.getItem("@long");

  // Création de l'évenement pour récupérer la position
  myLastPositionButton.addEventListener("click", function () {
    // Si le localStorage est vide une alerte est crée pour le dire
    if (!latitude && !longitude) {
      console.log(latitude + longitude);
      alert("Aucune localisation n'est enregistrée");
    } else {
      //Sinon affichage du texte ci-dessous
      myLastPosition.innerHTML =
        "Votre dernière position enregistrée est: Latitude: " +
        latitude +
        " Longitude: " +
        longitude;
    }
  });
}

/* Execution des fonctions */
getMyStorageLocation();
savePositionInStorage();
checkGeolocation();
initReset();
