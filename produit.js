const afficherUnTeddy = async (idteddy) => {
   const data = await get(`http://localhost:3000/api/teddies/${idteddy}`);
   const article = document.querySelector('#article');
   console.log(data)
   article.innerHTML =`
            <div class="col-sm-10 col-md-8 col-lg-6 mx-auto">
               <div class="card h-100">
                  <a href="produit.html"><img class="card-img-top" src="${data.imageUrl}" alt=""></a>
                  <div class="card-body">
                     <h4 class="card-title">
                        <a href="produit.html">${data.name}</a>
                     </h4>
                     <h5>$${data.price}</h5>
                     <p class="card-text">${data.description}</p>
                  </div>
                  <div class="card-footer text-center">
                     <button type="button" class="btn btn-secondary">Commander</button>
                  </div>
               </div>
            </div>`;
};

afficherUnTeddy('5be9c8541c9d440000665243');