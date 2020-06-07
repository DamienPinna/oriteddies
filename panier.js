/**
 * Fonction qui permet de récupérer le tableau d'objet(s) stocké dans le localStorage.
 * @returns {Array}
 */
const getTabLocalStorage = () => {
   let tabProduitsPanier = localStorage.getItem('produitsPanier');
   tabProduitsPanier = JSON.parse(tabProduitsPanier);
   return tabProduitsPanier;
}

const tabObjetsLocalStorage = getTabLocalStorage();

/**
 * Fonction qui permet de créer une ligne du panier en HTML.
 * @param {Object} teddy correspond à un élement du tableau de produit(s).
 * @returns {String} // String ? à confirmer avec Babacar.
 */
const creerLignePanier = teddy => {
   const tr = document.createElement('tr');

   const thSupprimer = document.createElement('th');
   thSupprimer.setAttribute('scope', 'row');
   thSupprimer.innerHTML= "<i class='fas fa-times-circle'></i>";
   tr.appendChild(thSupprimer);

   const tdArticle = document.createElement('td');
   tdArticle.innerText = teddy.name;
   tr.appendChild(tdArticle);

   const tdImage = document.createElement('td');
   tdImage.classList.add('w-25');
   tdImage.innerHTML = `<img src="${teddy.imageUrl}" alt="photographie de l'ourson ${teddy.name}" class="img-thumbnail"></img>`;
   tr.appendChild(tdImage);

   const tdQuantite = document.createElement('td');
   tdQuantite.innerText = teddy.quantite;
   tr.appendChild(tdQuantite);

   const tdPrix = document.createElement('td');
   tdPrix.innerText = `$${teddy.sousTotal}`;
   tr.appendChild(tdPrix);
   
   return tr;
}


/**
 * Fonction qui permet d'afficher sur le navigateur la liste des produits du panier.
 * @param {Array} teddies 
 */
const afficherTabPanier = teddies => {
   const tbody = document.querySelector('tbody');
   const total = document.querySelector('.total');

   const newTeddies = teddies.map(e => ({...e, sousTotal: e.quantite * e.price})); //Création d'une projection du tableau teddies nommée newTeddies et ajout du sous total.

   newTeddies.forEach(teddy => tbody.appendChild(creerLignePanier(teddy)));

   const prixTotalDuPanier = newTeddies.reduce((acc, teddy) => acc + teddy.sousTotal, 0); //On additionne le sous total à chaque itération pour avoir le total.

   total.innerText = `$${prixTotalDuPanier}`;
}

afficherTabPanier(tabObjetsLocalStorage);


/**
 * Fonction qui permet d'afficher à coté de l'icône panier la quantité d'articles se trouvant dans le panier.
 */
const afficherCompteurPanier = () => {
   const compteurPanier = tabObjetsLocalStorage.reduce((acc, teddy) => acc + parseInt(teddy.quantite), 0);
   const badge = document.querySelector('.badge');
   badge.innerHTML = compteurPanier;
}

afficherCompteurPanier();