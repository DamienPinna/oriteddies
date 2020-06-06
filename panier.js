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