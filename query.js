/**
 * Fonction qui permet de demander à l'API tous les oursons
 * @returns {Array}
 */
const getTeddies = async () => { //Fonction asynchrone
   try { //On controle si la requête fonctionne bien
      const response = await fetch('http://localhost:3000/api/teddies'); //On fait une requête sur cet URL et on attend une réponse en JSON (retourne une promesse)
      if (response.ok) { //On test si oui ou nous nous avons eu un retour correct (statut HTTP entre 200 et 299)
         const data = await response.json(); //On assigne la réponse convertit en objet JavaScript à la variable data (la méthode body.json renvoie une promesse)
         console.log(data);
         return data;
      } else { //Si la réponse de la requête est incorrect (statut HTTP entre 300 et 599)
         console.error("retour du serveur : ", response.status);
         return [];
      }
   } catch (error) { //Si la requête n'a pas bien fonctionné, on capture l'erreur
      console.log(error);
   }
}

getTeddies();