const idTeddy = document.location.hash.substring(1); //Récupération de l'id produit passé dans l'url.

/**
 * Permet d'afficher un produit en fonction de l'id transmis par la page index.html.
 * @param {String} idteddy 
 */
const afficherUnTeddy = async (idteddy) => {
   const data = await get(`http://localhost:3000/api/teddies/${idteddy}`);
   const article = document.querySelector('#article');
   console.log(data)
   article.innerHTML =`
            <div class="col-sm-10 col-md-8 col-lg-6 mx-auto">
               <div class="card h-100">
                  <a href="produit.html"><img class="card-img-top" src="${data.imageUrl}" alt="photographie d'un ourson en peluche"></a>
                  <div class="card-body">
                     <h4 class="card-title">
                        <a href="produit.html">${data.name}</a>
                     </h4>
                     <h5>$${data.price}</h5>
                     <p class="card-text">${data.description}</p>
                  </div>
                  <ul class="list-group list-group-flush">
                     <li class="list-group-item"">
                        <label for="couleur">Couleur :</label>
                        <select class="custom-select" name="couleur" id="couleur">
                           <option value="1">Rouge</option>
                           <option value="2">Bleu</option>
                           <option value="3">Vert</option>
                        </select>
                     </li>
                     <li class="list-group-item"">
                     <label for="quantite">Quantité :</label>
                        <input type="number" class="form-control" name="quantite" id="quantite" min="1" value="1">
                     </li>
                  </ul>
                  <div class="card-footer text-center">
                     <button type="button" class="btn btn-secondary">Ajouter au panier</button>
                  </div>
               </div>
            </div>`;
};

afficherUnTeddy(idTeddy);