/**
 * Fonction qui permet de créer une ligne du panier en HTML.
 * @param {Object} teddy correspond à un élement du tableau de produit(s).
 * @returns {String} // String ? à confirmer avec Babacar.
 */
const creerLignePanier = (teddy, index) => {
   const tr = document.createElement('tr');
 
   const thSupprimer = document.createElement('th');
   thSupprimer.setAttribute('scope', 'row');
   thSupprimer.innerHTML= `<i onclick="supprimerLignePanier('${index}')" class="fas fa-times-circle"></i>`;
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

   newTeddies.forEach((teddy, index) => tbody.appendChild(creerLignePanier(teddy, index)));

   const prixTotalDuPanier = newTeddies.reduce((acc, teddy) => acc + teddy.sousTotal, 0); //On additionne le sous total à chaque itération pour avoir le total.

   total.innerText = `$${prixTotalDuPanier}`;
}


/**
 * Fonction qui permet de supprimer un objet du tableau se trouvant dans le localStorage.
 * @param {*} index position du clique sur un bouton "supprimer".
 */
const supprimerLignePanier = index => {
   tabObjetsLocalStorage.splice(index, 1);
   ajouterDansLocalStorage(tabObjetsLocalStorage);
   document.location.reload();
}


/**
 * Permet au clique sur le bouton commander d'envoyer les informations de commande au serveur.
 */
document.querySelector('#order').addEventListener('click', () => {
   event.preventDefault();

   const order = {
      contact: {
         firstName: String,
         lastName: String,
         address: String,
         city: String,
         email: String
         },
      products: [String]
   };
   
   order.contact.firstName = document.querySelector('#firstName').value;
   order.contact.lastName = document.querySelector('#lastName').value;
   order.contact.address = document.querySelector('#address').value;
   order.contact.city = document.querySelector('#city').value;
   order.contact.email = document.querySelector('#email').value;

   const products = tabObjetsLocalStorage.map(e => e._id);
   order.products = products;
   
   insertPost(order);
   document.querySelector('form').reset();
});


afficherTabPanier(tabObjetsLocalStorage);

afficherCompteurPanier();