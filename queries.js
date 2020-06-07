/**
 * Fonction qui permet d'effectuer des requêtes GET à la base de données.
 * @param {String} url
 * @returns {Promise}
 */
const get = async (url) => {
   try {
      const response = await fetch(url);
      if (response.ok) { //On test si oui ou non nous avons eu un retour correct (statut HTTP entre 200 et 299)
         const data = response.json(); //On assigne la réponse convertit en objet JavaScript à la variable data.
         return data;
      } else { //Si la réponse de la requête est incorrect (statut HTTP entre 300 et 599)
         console.error("retour du serveur : ", response.status);
         const alert = document.querySelector('.alert');
         alert.parentElement.classList.remove('d-none');
         alert.textContent = `Erreur ${response.status}`;
         return [];
      }
   } catch (error) {
      console.log(error);
      const alert = document.querySelector('.alert');
      alert.parentElement.classList.remove('d-none');
      alert.textContent = error;
   }
};

/**
 * Fonction qui permet de récupérer le tableau d'objet(s) stocké dans le localStorage.
 * @returns {Array}
 */
const getTabLocalStorage = () => {
   let tabProduitsPanier = localStorage.getItem('produitsPanier');
   tabProduitsPanier = JSON.parse(tabProduitsPanier);
   return tabProduitsPanier;
}

let tabObjetsLocalStorage = getTabLocalStorage();