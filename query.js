/**
 * Fonction qui permet de demander à l'API tous les oursons
 * @returns {Object}
 */
const getTeddies = async () => {
   try { //On controle si la requête fonctionne bien
      let response = await fetch('http://localhost:3000/api/teddies'); //On fait une requête sur cet URL et on attend une réponse en JSON
      if (response.ok) { //On test si oui ou nous nous avons eu un retour correct (statut HTTP entre 200 et 299)
         let data = await response.json(); //On assigne la réponse convertit en objet JavaScript à la variable data (la méthode body.json renvoie une promesse)
         console.log(data);
      } else { //Si la réponse de la requête est incorrect (statut HTTP entre 300 et 599)
         console.error("retour du serveur : ", response.status);
      }
   } catch (error) { //Si la requête n'a pas bien fonctionné, on capture l'erreur
      console.log(error);
   }
}

getTeddies();