const afficherTeddies = async () => {
   const data = await getTeddies();
   const card = document.querySelector('.card');
   console.log(data)
   card.innerHTML = `<a href="#"><img class="card-img-top" src="${data[0].imageUrl}" alt=""></a>
                     <div class="card-body">
                        <h4 class="card-title">
                           <a href="#">${data[0].name}</a>
                        </h4>
                        <h5>$${data[0].price}</h5>
                        <p class="card-text">${data[0].description}</p>
                     </div>
                     <div class="card-footer text-center">
                        <button type="button" class="btn btn-secondary">Commander</button>
                     </div>`
};

afficherTeddies()