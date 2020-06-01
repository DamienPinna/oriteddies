/**
 * Fonction qui permet d'effectuer des requêtes GET
 * @param {String} url
 * @returns {Promise}
 */
const get = async (url) => { //Fonction asynchrone
   try { //On controle si la requête fonctionne bien
      const response = await fetch(url); //On fait une requête sur cet URL et on attend une réponse en JSON.
      if (response.ok) { //On test si oui ou non nous avons eu un retour correct (statut HTTP entre 200 et 299)
         const data = response.json(); //On assigne la réponse convertit en objet JavaScript à la variable data.
         return data; //On retourne la promesse résolut
      } else { //Si la réponse de la requête est incorrect (statut HTTP entre 300 et 599)
         console.error("retour du serveur : ", response.status);
         const alert = document.querySelector('.alert'); //Sélection de l'élément du DOM
         alert.parentElement.classList.remove('d-none'); //Suppression de la classe d-none
         alert.textContent = `Erreur ${response.status}`; //Ajout du statut dans l'élement du DOM
         return [];
      }
   } catch (error) { //Si la requête n'a pas bien fonctionné, on capture l'erreur.
      console.log(error);
      const alert = document.querySelector('.alert'); //Sélection de l'élément du DOM
      alert.parentElement.classList.remove('d-none'); //Suppression de la classe d-none
      alert.textContent = error; //Ajout de l'erreur dans l'élement du DOM
   }
};