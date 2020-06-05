/**
 * Fonction qui permet de récupérer la sélection produit de l'utilisateur dans le localStorage.
 * @returns {Array} tableau comprenant des objets JavaScript.
 */
const getLocalStorage = () => {
   let tabListePanier = [];
   for (let key of Object.keys(localStorage)) { //Object.keys affiche que les propriétés propres
      tabListePanier.push(JSON.parse(localStorage.getItem(key)));
   }
   return tabListePanier;
};

/**
 * Fonction qui permet d'afficher dans le navigateur les produits que l'utilisateur a mis dans le panier.
 */
const afficherListePanier = () => {
   const tabListePanier = getLocalStorage();
   console.log(tabListePanier);
   let lignesPanier = "";
   let listePanier = document.querySelector('tbody');
   for (let teddie of tabListePanier) {
      lignesPanier += `
         <tr>
            <th scope="row">X</th>
            <td>${teddie.name}</td>
            <td><img src="${teddie.imageUrl}" alt="photographie de l'ourson ${teddie.name}" class="img-thumbnail"></td>
            <td>${teddie.quantite}</td>
            <td>$${teddie.price}</td>
         </tr>`;
   }
   listePanier.innerHTML = lignesPanier;
};

afficherListePanier();