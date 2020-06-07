const idTeddy = document.location.hash.substring(1); //Récupération de l'id produit passé dans l'url.

/**
 * Permet d'afficher un produit en fonction de l'id transmis par la page index.html.
 * @param {String} idTeddy id de l'article sélectionné.
 */
const afficherUnTeddy = async (idTeddy) => {
   const data = await get(`http://localhost:3000/api/teddies/${idTeddy}`);
   const article = document.querySelector('#article');

   //Je créé dynamiquement la liste de couleurs.
   let listeDesCouleurs = "";
   for (let couleur of data.colors) {
      listeDesCouleurs += `<option value="${couleur}">${couleur}</option>`;
   }

   article.innerHTML =`
            <div class="col-sm-10 col-md-8 col-lg-6 mx-auto">
               <div class="card h-100">
                  <img class="card-img-top" src="${data.imageUrl}" alt="photographie d'un ourson en peluche">
                  <div class="card-body">
                     <h4 class="card-title text-primary">${data.name}</h4>
                     <h5>$${data.price}</h5>
                     <p class="card-text">${data.description}</p>
                  </div>
                  <ul class="list-group list-group-flush">
                     <li class="list-group-item"">
                        <label for="couleur">Couleur :</label>
                        <select class="custom-select" name="couleur" id="couleur">
                           ${listeDesCouleurs}
                        </select>
                     </li>
                     <li class="list-group-item"">
                        <label for="quantite">Quantité :</label>
                        <input type="number" class="form-control" name="quantite" id="quantite" min="1" value="1">
                     </li>
                  </ul>
                  <div class="card-footer text-center">
                     <button id="test" type="button" class="btn btn-secondary" data-toggle="modal" data-target="#confirmationAjoutPanier" onclick="ajoutTeddyLocalStorage(idTeddy, document.querySelector('#quantite').value)">Ajouter au panier</button>
                  </div>
               </div>
            </div>`;
};

afficherUnTeddy(idTeddy);


/**
 * Fonction qui permet d'ajouter dans le localStorage ce qui est passé en paramètre.
 * @param {Array} tabProduitsPanier tableau comprenant un ou des objects correspondant à un article.
 */
const ajouterDansLocalStorage = (tabProduitsPanier) => {
   tabProduitsPanier = JSON.stringify(tabProduitsPanier);
   localStorage.setItem('produitsPanier', tabProduitsPanier);
};


/**
 * Fonction qui permet d'ajouter le produit dans le localStorage.
 * @param {String} idTeddy id de l'article sélectionné.
 * @param {Number} quantite quantité d'articles sélectionné par l'utilisateur.
 */
const ajoutTeddyLocalStorage = async (idTeddy, quantite) => {
   let data = await get(`http://localhost:3000/api/teddies/${idTeddy}`);
   data.quantite = quantite;
   let tabProduitsPanier = localStorage.getItem('produitsPanier');

   if (tabProduitsPanier == null) {
      tabProduitsPanier = [data];
      ajouterDansLocalStorage(tabProduitsPanier);
   } else {
      tabProduitsPanier = JSON.parse(tabProduitsPanier);
      tabProduitsPanier.push(data);
      ajouterDansLocalStorage(tabProduitsPanier);
   }
};

afficherCompteurPanier();