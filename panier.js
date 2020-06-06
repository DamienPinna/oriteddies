/**
 * Fonction qui permet de retourner le produit de 2 nombres.
 * @param {Number} quantite quantité d'article(s) d'une ligne du panier.
 * @param {Number} price prix d'un article.
 * @returns {Number} retourne le produit de la quantité par le prix d'un article.
 */
const calculSousTotalUnArticle = (quantite, price) => quantite * price;

/**
 * Fonction qui permet d'afficher dans le navigateur les produits que l'utilisateur a mis dans le panier.
 */
const afficherListePanier = () => {
   let tabProduitsPanier = localStorage.getItem('produitsPanier');
   tabProduitsPanier = JSON.parse(tabProduitsPanier);

   let lignesPanier = "";
   let listePanier = document.querySelector('tbody');
   for (let teddie of tabProduitsPanier) {
      lignesPanier += `
         <tr>
            <th scope="row"><i class="fas fa-times-circle"></i></th>
            <td>${teddie.name}</td>
            <td class="w-25"><img src="${teddie.imageUrl}" alt="photographie de l'ourson ${teddie.name}" class="img-thumbnail"></td>
            <td>${teddie.quantite}</td>
            <td>$${calculSousTotalUnArticle(teddie.quantite, teddie.price)}</td>
         </tr>`;
   }
   listePanier.innerHTML = lignesPanier;
};

afficherListePanier();