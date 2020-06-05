/**
 * Fonction qui permet de récupérer la sélection produit de l'utilisateur dans le localStorage.
 * @returns {Array} tableau comprenant des objets JavaScript.
 */
const getLocalStorage = () => {
   let tabListePanier = [];
   for (let key of Object.keys(localStorage)) { //Object.keys affiche que les propriétés propres
      tabListePanier.push(JSON.parse(localStorage.getItem(key)));
   }
   console.log(tabListePanier);
   return tabListePanier;
}

getLocalStorage()