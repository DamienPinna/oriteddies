const afficherTeddies = async () => {
   const data = await getTeddies();
   const articles = document.querySelector('#articles');
   console.log(data[0])
   let teddies = ""; 
   for (let teddy of data) {
      teddies +=`
            <div class="col-lg-4 col-md-6 mb-4">
               <div class="card h-100">
                  <a href="#"><img class="card-img-top" src="${teddy.imageUrl}" alt=""></a>
                  <div class="card-body">
                     <h4 class="card-title">
                        <a href="#">${teddy.name}</a>
                     </h4>
                     <h5>$${teddy.price}</h5>
                     <p class="card-text">${teddy.description}</p>
                  </div>
                  <div class="card-footer text-center">
                     <button type="button" class="btn btn-secondary">Commander</button>
                  </div>
               </div>
            </div>`;
   }
   articles.innerHTML = teddies;
};

afficherTeddies()