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

let firstName = "";
let lastName = "";
let adresse = "";
let city = "";
let email = "";
let products = [];

let order = {
   contact: {
      firstName: firstName,
      lastName: lastName,
      address: adresse,
      city: city,
      email: email
      },
      products: [products]
};

document.querySelector('#order').addEventListener('click', () => {
   console.log('test');
 
});

console.log(order);


insertPost({
   contact: {
      firstName: 'damien',
      lastName: 'pinna',
      address: 'adresse',
      city: 'ville',
      email: 'email'
      },
      products: ['5beaacd41c9d440000a57d97']
});

afficherTabPanier(tabObjetsLocalStorage);

afficherCompteurPanier();