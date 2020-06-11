/**
 * Fonction qui permet de retourner l'id de commande et le prix total de la commande.
 * @returns {Array}
 */
const infosOrder = () => {
   const order = getTabSessionStorage();
   const orderId = order.orderId;
   const prixCommande = order.products.reduce((acc, product) => acc + product.price, 0);
   return [orderId, prixCommande];
}

console.log(infosOrder());